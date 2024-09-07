import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  console.log(email, password);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/isignin", { email, password })
      .then((result) => {
        if (result.data === email) {
          localStorage.setItem("mail", email);
          navigate("/investorhome");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="registration-container">
      <div>
        <h2 className="l-h2">Login Page</h2>
        <form onSubmit={handleSubmit}>
          <div className="lform-group">
            <label htmlFor="email" className="llabel">
              Email
            </label>
            <input
              className="linput"
              type="email"
              id="email"
              name="email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="lform-group">
            <label htmlFor="password" className="llabel">
              Password
            </label>
            <input
              className="linput"
              type="password"
              id="password"
              name="password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="lbutton">
            login
          </button>
        </form>
      </div>
    </div>
  );
}
export default Login;
