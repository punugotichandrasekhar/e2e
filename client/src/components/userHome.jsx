import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function GroupOrientation() {
  const navigate = useNavigate();
  const [url, setUrl] = useState("/userprofile");

  const displa = async (newUrl) => {
    const mail = localStorage.getItem("mail");

    try {
      const response = await axios.get(
        `http://localhost:3000/api/userdata/${mail}`
      );
      console.log(response.data[0].email);
      // Assuming the response contains an email to verify
      if (response.data[0].email) {
        setUrl(newUrl);
      }
      // Set the URL if everything is fine
    } catch (error) {
      navigate("/login", { replace: true });
    }
  };

  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "#64b5f6",
        height: "100%",
        padding: "50px",
        columnGap: "20px",
      }}
    >
      <div>
        <Box>
          <ButtonGroup
            orientation="vertical"
            aria-label="vertical contained button group"
            variant="outlined"
            className="button-list"
            style={{ display: "grid", backgroundColor: "#ffffff" }}
          >
            <Button key="one" onClick={() => displa("/userprofile")}>
              Profile
            </Button>
            ,
            <Button key="two" onClick={() => displa("/selfdata")}>
              My details
            </Button>
            ,
            <Button key="three" onClick={() => displa("/a")}>
              Apply for new one
            </Button>
            <Button key="four">crop prediction</Button>,
            <Button key="five">Market Insights</Button>
            <Button key="six">Buyer/Investor Connections</Button>
            <Button key="seven">Upcoming Events/Deadlines</Button>
            <Button key="eight">My Products</Button>
            <Button key="nine">Cooperative Information</Button>
          </ButtonGroup>
        </Box>
      </div>
      <div style={{ backgroundColor: "#ffffff", display: "flex" }}>
        <iframe
          src={url}
          title="Embedded Page"
          width="1200"
          height="600"
          style={{ backgroundColor: "#ffffff", display: "flex" }}
        ></iframe>
      </div>
    </div>
  );
}
