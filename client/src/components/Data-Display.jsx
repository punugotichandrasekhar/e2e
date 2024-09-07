import React, { useEffect, useState } from "react";
import axios from "axios";
import "./data-display.css";
import DoneIcon from "@mui/icons-material/Done";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

const DataDisplayPage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/formdata");
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        alert("Failed to fetch data");
      }
    };
    fetchData();
  }, []);

  const updateStatus = async (email, newStatus) => {
    try {
      const response = await axios.put(
        `http://localhost:3000/api/formdata/${email}`,
        { status: newStatus }
      );
      console.log("Item status updated:", response.data);

      // Update the status in the local state
      setData((data) =>
        data.map((item) =>
          item.email === email ? { ...item, status: newStatus } : item
        )
      );
    } catch (error) {
      alert("Failed to update data");
      console.error("Error updating item status:", error);
    }
  };

  return (
    <div className="container">
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
              <th>Action</th>
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
                <td className="change">{item.status}</td>
                <td>
                  <button onClick={() => updateStatus(item.email, "accepted")}>
                    <DoneIcon />
                  </button>
                  <button onClick={() => updateStatus(item.email, "rejected")}>
                    <CloseOutlinedIcon />
                  </button>
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
