import React from "react";
import "../styles/Header.css";
import UserIcon from "../assets/user.svg";
import WallatIcon from "../assets/wall.svg";
import MenuIcon from "../assets/menu.svg";
const Header = () => {
  return (
    <div className="headerContainer">
      <div className="headerLeftcontaienr">
        <div className="iconContainerheader">
          <img src={MenuIcon} alt="" />
        </div>
        <div>
          <h2 className="titlehaeder">Compaigns</h2>
        </div>
      </div>
      <div className="headerRightcontaienr">
        <div className="timecontainer">03 Mar 04:58 (UTC)</div>
        <div className="balanceContainer">
          <img src={WallatIcon} alt="" />
          <span>Balance:$0.55</span>
        </div>
        <div className="volteContainer">
          <img src={WallatIcon} alt="" />
        </div>
        <div className="userecontainer">
          <img src={UserIcon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
