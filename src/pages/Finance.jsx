import React, { useEffect } from "react";

const Finance = () => {
  useEffect(() => {
    document.title = "Finance . RollerAds";
  }, []);
  return (
   <div className="financepagehere">
    Finanace page here
   </div>
  );
};

export default Finance;
