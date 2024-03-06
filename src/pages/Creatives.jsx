import React, { useEffect } from "react";
import SideBar from "../components/SideBar";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const Creatives = () => {
  useEffect(() => {
    document.title = "Creative . RollerAds";
  }, []);
  return (
    <div className="createtivepagehere">
      <Header routename="Creatives Library" />
      <div className="sommingConatiner">
          <p className="tagline">
            🔥Smoking hot! Check out a new profitable offer from CpaRoll —{" "}
            <span>
              <Link to="https://platform.cparoll.com/offers/890">
                AVG Mobile Security WW
              </Link>{" "}
            </span>
            {"  "}
            for Android and iOS. Performs strong on our traffic.
          </p>
          <p style={{ cursor: "pointer" }}>Dismiss</p>
        </div>
    </div>
  );
};

export default Creatives;
