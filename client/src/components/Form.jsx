import { useState } from "react";
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
const formData = () => {
  const [username, setName] = useState("");
  const [number, setNumber] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/form", { username, number })
      .then((result) => {
        console.log(result);
        navigate("/home");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>username</label>
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <label>number</label>
        <input type="text" onChange={(e) => setNumber(e.target.value)}></input>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};
export default formData;
