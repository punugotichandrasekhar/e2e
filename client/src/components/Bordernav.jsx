import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState("recents");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div
      style={{
        border: "2px solid blue",
        borderRadius: "15px 15px",
        backgroundColor: "lightBlue",
        padding: "10px",
      }}
    >
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <BottomNavigation
          sx={{ width: 1800 }}
          style={{ backgroundColor: "lightBlue", color: "violet" }}
          value={value}
          onChange={handleChange}
        >
          <BottomNavigationAction
            label="Overview"
            value="recents"
            icon={<TextSnippetIcon />}
          />
          <BottomNavigationAction
            label="Contact us"
            value="Farmers in rural villages often struggle to sell their products due to limited access to markets and middlemen. This project aims to connect farmers directly with investors and buyers, empowering them to take control of their livelihoods.
Encourage the formation of farmer cooperatives to collectively bargain, share resources, and amplify their voices.
Establish relationships with wholesalers, retailers, and e-commerce platforms to create reliable sales channels.
Develop a digital platform to facilitate transactions and negotiations between farmers, investors, and buyers.
"
            icon={<LocalPhoneIcon />}
          />
          <BottomNavigationAction
            label="Feed"
            value="It is a Agricultural Web Application which is intended to help farmers with trading of crops, agroproducts aimed at enhancing efficiency and convenience in agricultural transactions. There are three profiles -Seller ,Farmer ,Consumer who can edit their profile ,addresses individually . Farmer can add products like crops, cheese, silk etc.. and can also buy seeds, pesticides, or machinery or be rented. They can buy loan for farming. Seller can add products to site which are verified by them after making a deal with farmer Consumer can buy products from site through Paypal gateway, after adding to their cart . Add or delete items and also change their quantity and many more. Also provided with chatbot for assistance."
            icon={<NewspaperIcon />}
          />
          <BottomNavigationAction
            label="Videos"
            value="Videos"
            icon={<PlayArrowIcon />}
          ></BottomNavigationAction>
        </BottomNavigation>
      </div>
      <br></br>
      <br></br>
      <div
        style={{
          backgroundColor: "lightBlue",
          width: "100%",
          height: "200px",
          display: "flex",
          fontFamily: "sans-serif",
          fontSize: "24px",
        }}
      >
        {value}
      </div>
    </div>
  );
}
