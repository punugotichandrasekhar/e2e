import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import Login from "./components/Login.jsx";
import Header from "./components/Header.jsx";
import FormData from "./components/Form.jsx";
import SignUp from "./components/Signup.jsx";
import FormComponent from "./components/FormComponent.jsx";
import DataDisplayPage from "./components/Data-Display.jsx";
import SelfData from "./components/selfdata.jsx";
import HomeUser from "./components/userHome.jsx";
import Userprofile from "./components/userprofile.jsx";
import Agentprofile from "./components/agentprofile.jsx";
import Investorprofile from "./components/investorprofile.jsx";
import Asignup from "./components/Asignup.jsx";
import Alogin from "./components/Alogin.jsx";
import Ilogin from "./components/Ilogin.jsx";
import Isignup from "./components/Isignup.jsx";
import AcceptedData from "./components/Accepted-data-display.jsx";
import RejectedData from "./components/Rejected-data-display.jsx";
import AgentUser from "./components/agentHome.jsx";
import InvestorUser from "./components/investorHome.jsx";
import UploadForm from "./components/UploadForm.jsx";
import Fileupload from "./components/fff.jsx";
class App extends React.Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/form" element={<FormData />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/a" element={<FormComponent />} />
          <Route path="/data-display" element={<DataDisplayPage />} />
          <Route path="/selfdata" element={<SelfData />} />
          <Route path="/userhome" element={<HomeUser />} />
          <Route path="/agenthome" element={<AgentUser />} />
          <Route path="/investorhome" element={<InvestorUser />} />
          <Route path="/userprofile" element={<Userprofile />} />
          <Route path="/agentprofile" element={<Agentprofile />} />
          <Route path="/investorprofile" element={<Investorprofile />} />
          <Route path="/asignup" element={<Asignup />} />
          <Route path="/isignup" element={<Isignup />} />
          <Route path="/alogin" element={<Alogin />} />
          <Route path="/ilogin" element={<Ilogin />} />
          <Route path="/acceptdata-display" element={<AcceptedData />} />
          <Route path="/rejectdata-display" element={<RejectedData />} />
          <Route path="/upload" element={<UploadForm />} />
          <Route path="/f" element={<Fileupload />} />
        </Routes>
      </Router>
    );
  }
}
export default App;
