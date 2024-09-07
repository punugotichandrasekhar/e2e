import React, { useState, useEffect } from "react";
import axios from "axios";
import "./selfdata.css"; // Import the CSS file

const FetchByEmail = () => {
  const [data, setData] = useState([]);
  const email = localStorage.getItem("mail"); // Example email

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/formdata/${email}`
        );
        setData(response.data);
      } catch (error) {
        alert("Failed to fetch data");
      }
    };

    fetchData();
  }, [email]);

  return (
    <div className="table-container">
      <h2>All Form Data</h2>
      {data.length === 0 ? (
        <p className="no-data">No data available.</p>
      ) : (
        <table className="table">
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
                <td>{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default FetchByEmail;
