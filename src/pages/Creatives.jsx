import React, { useEffect } from "react";
import SideBar from "../components/SideBar";
import Header from "../components/Header";

const Creatives = () => {
  useEffect(() => {
    document.title = "Creative . RollerAds";
  }, []);
  return (
    <div className="createtivepagehere">
      <Header routename="Creatives Library" />
    </div>
  );
};

export default Creatives;
