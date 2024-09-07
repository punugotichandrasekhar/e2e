import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CarouselLoader from "./Carousel";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import LabelBottomNavigation from "./Bordernav";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import USignUp from "./Signup";
export default function ButtonAppBar() {
  let navigate = useNavigate();
  const handleClick = () => {
    navigate("/login");
    console.log(localStorage);
  };
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              FarmerSlice
            </Typography>
            <Button color="inherit" onClick={() => navigate("/signup")}>
              farmer
            </Button>
            <Button color="inherit" onClick={() => navigate("/asignup")}>
              <nav>Agent</nav>
            </Button>
            <Button color="inherit" onClick={() => navigate("/isignup")}>
              Investor
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div>
        <CarouselLoader />
      </div>
      <br></br>
      <br></br>
      <div>
        <LabelBottomNavigation />
      </div>
      <br></br>
      <br></br>
    </div>
  );
}
