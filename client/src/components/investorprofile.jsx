import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
const userprofile = () => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const email = localStorage.getItem("mail");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/investordata/${email}`
        );
        setData(response.data);
        console.log(response.data);
        const counter = await axios.get(
          `http://localhost:3000/api/formdata/${email}`
        );
        setCount(counter.data);
      } catch (error) {
        alert("Failed to fetch data");
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>
          <h3>name:{item.name}</h3>
          <h3>email:{item.email}</h3>
          <h3>password:{item.password}</h3>
        </div>
      ))}
    </div>
  );
};
export default userprofile;
