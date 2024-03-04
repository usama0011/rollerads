import React from "react";
import "../styles/sidebar.css";
import MyLog from "../assets/ads.svg";
import PlusIcon from "../assets/plus.svg";
import HelpIcon from "../assets/help.svg";
import RatesIcon from "../assets/rates.svg";
import ImageIcon from "../assets/image.svg";
import TradeIcon from "../assets/trade.svg";
import StatsIcon from "../assets/stats.svg";
import MickIcon from "../assets/mick.svg";
import MoneyIcon from "../assets/money.svg";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="sidebarcontainer">
      <div className="logocontainer">
        <img src={MyLog} className="mylogoweb" alt="" />
      </div>
      <div className="menuitemscontainer">
       <NavLink to="/campaigns/new">
       <div style={{cursor:"pointers"}} className="compainContainer">
          <img className="icon" src={PlusIcon} alt="" />
          <p>New Campaign</p>
        </div>
       </NavLink>
        <NavLink
          style={({ isActive }) => ({
            backgroundColor: isActive ? "red" : "", 
          })}
          to="/campaigns"
        >
          <div className="rr">
            <img className="icon" src={MickIcon} alt="" />
            <p>Campaings</p>
          </div>
        </NavLink>
        <NavLink to="/reports">
          <div className="rr">
            <img className="icon" src={StatsIcon} alt="" />
            <p>Reports</p>
          </div>
        </NavLink>
        <NavLink to="/tracking">
          <div className="rr">
            <img className="icon" src={TradeIcon} alt="" />
            <p>Tracking</p>
          </div>
        </NavLink>
        <NavLink to="/finance">
          <div className="rr">
            <img className="icon" src={MoneyIcon} alt="" />
            <p>Finance</p>
          </div>
        </NavLink>
        <NavLink to="/creatives">
          <div className="rr">
            <img className="icon" src={ImageIcon} alt="" />
            <p>Creatives</p>
          </div>
        </NavLink>
        <NavLink to="/rates">
          <div className="rr">
            <img className="icon" src={RatesIcon} alt="" />
            <p>Rates</p>
          </div>
        </NavLink>
        <NavLink to="/helpcenter">
          <div className="rr">
            <img className="icon" src={HelpIcon} alt="" />
            <p>Help Center</p>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default SideBar;
