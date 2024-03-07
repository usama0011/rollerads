import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Reprots from "./pages/Reprots.jsx";
import Tracking from "./pages/Tracking.jsx";
import Finance from "./pages/Finance.jsx";
import Creatives from "./pages/Creatives.jsx";
import Rates from "./pages/Rates.jsx";
import HelpCenter from "./pages/HelpCenter.jsx";
import NewCompaing from "./pages/NewCompaing.jsx";
import SideBar from "./components/SideBar.jsx";
import EditCompaing from "./pages/EditCompaing.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="main-container">
        <div className="sidebar">
          <SideBar />
        </div>
        <div className="content">
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/campaigns" element={<App />} />
            <Route path="/reports" element={<Reprots />} />
            <Route path="/tracking" element={<Tracking />} />
            <Route path="/finance" element={<Finance />} />
            <Route path="/creatives" element={<Creatives />} />
            <Route path="/rates" element={<Rates />} />
            <Route path="/helpcenter" element={<HelpCenter />} />
            <Route path="/campaigns/new" element={<NewCompaing />} />
            <Route path="/campaings/:id" element={<EditCompaing />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  </React.StrictMode>
);
