import React, { useEffect,useState } from "react";
import "../styles/Header.css";
import WallatIcon from "../assets/wall.svg";
import MenuIcon from "../assets/menu.svg";
import { CreditCardIcon, UserIcon } from "@heroicons/react/24/solid";
const Header = ({ routename }) => {
  const [currentTime, setCurrentTime] = useState("");
  useEffect(() => {
    // Function to update current time every second
    document.title= "Campaings . RollerAds"
    const updateTime = () => {
      const date = new Date();
      const options = {
        timeZone: "UTC", // Set timezone to UTC
        day: "2-digit", // Display day with leading zero
        month: "short", // Display month as abbreviation
        hour: "2-digit", // Display hours
        minute: "2-digit", // Display minutes
        hour12: false, // Use 24-hour format
      };
      setCurrentTime(date.toLocaleTimeString("en-US", options));
    };

    // Update time initially and set interval to update it every second
    updateTime();
    const interval = setInterval(updateTime, 1000);

    // Cleanup function to clear interval
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="headerContainer">
      <div className="headerLeftcontaienr">
        <div className="iconContainerheader">
          <img src={MenuIcon} alt="" />
        </div>
        <div>
          <h2 className="titlehaeder">{routename}</h2>
        </div>
      </div>
      <div className="headerRightcontaienr">
        <div className="timecontainer">{currentTime}  (UTC)</div>
        <div className="balanceContainer">
          <img src={WallatIcon} alt="" />
          <span>Balance:$17,583.93</span>
        </div>
        <div className="volteContainer">
          <CreditCardIcon className="creditcardionc" />
        </div>
        <div className="userecontainer">
          <UserIcon className="creditcardionc" />
        </div>
      </div>
    </div>
  );
};

export default Header;
