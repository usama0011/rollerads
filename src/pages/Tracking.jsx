import React, { useEffect } from "react";

const Tracking = () => {
  useEffect(() => {
    document.title = "Tracking . RollerAds";
  }, []);
  return (
   <div className="trackingContainer">
    Tarcking page here
   </div>
  );
};

export default Tracking;
