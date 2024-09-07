import React, { useEffect, useState } from "react";
import axios from "axios";
import "./data-display.css";
const fetchUserByEmail = async (email) => {
  try {
    const response = await axios.get(
      `http://localhost:3000/api/formdata/${email}`
    );
    console.log("User Data:", response.data);
  } catch (error) {
    console.error(
      "Error fetching user data:",
      error.response ? error.response.data : error.message
    );
  }
};

fetchUserByEmail("as@f");

const DataDisplayPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/formdata");
        setData(response.data);
      } catch (error) {
        alert("Failed to fetch data");
      }
    };
    fetchData();
  }, []);

  return (
    <div class="container">
      <h2>All Form Data</h2>
      {data.length === 0 ? (
        <p>No data available.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Message</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{item.message}</td>
                <td>{new Date(item.date).toLocaleDateString()}</td>
                <td>
                  <button style={{ color: "green" }} onClick={addData}></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default DataDisplayPage;
