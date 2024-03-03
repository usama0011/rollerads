import React from "react";
import "./App.css";
import SideBar from "./components/SideBar";
const App = () => {
  return <div className="maincontainer">
    <div className="sidebar">
      <SideBar/>
    </div>
    <div>Main container</div>
  </div>;
};

export default App;
