import React, { useState, useEffect } from "react";
import axios from "axios";
import SelfData from "./selfdata.jsx";
import "./profilestyles.css"; // Import the CSS file
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
const UserProfile = () => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const [formData, setFormData] = useState([]);
  const email = localStorage.getItem("mail");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/userdata/${email}`
        );
        setData(response.data);
        console.log(response.data);
        const counter = await axios.get(
          `http://localhost:3000/api/formdata/${email}`
        );
        setCount(counter.data);
        setFormData(counter.data); // Assuming this is an array of form data
      } catch (error) {
        alert("Failed to fetch data");
      }
    };
    fetchData();
  }, [email]);

  return (
    <div className="container">
      <div className="profile-card">
        {data.map((item, index) => (
          <div key={index}>
            {/* Profile Picture */}
            <img
              src={
                "https://res.cloudinary.com/dmszzb7zv/image/upload/v1718383278/farm-farmers-water-drops-rice-wallpaper-preview_3_piwsbg.jpg"
              } // Random profile picture
              alt="Profile"
              className="profile-pic"
            />
            <h3>Name: {item.name}</h3>
            <h3>Email: {item.email}</h3>
            <h3>Password: {item.password}</h3>
            <div className="count">{`Total Count: ${count.length}`}</div>
          </div>
        ))}
      </div>
      <div className="selfdata">
        <SelfData />
      </div>

      {/* Table for Form Data */}
    </div>
  );
};

export default UserProfile;
