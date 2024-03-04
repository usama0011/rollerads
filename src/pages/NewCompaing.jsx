import React from "react";
import "../styles/Newcompain.css";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import PushIcon from "../assets/pushdark.svg";
import OnclickIcon from "../assets/onclick.svg";
import InpageIcon from "../assets/inpage.svg";
import CalenderIcon from "../assets/calender.svg";
import Radiocheck from "../assets/radiocheck.svg";
import RadionUncheck from "../assets/radiouncheck.svg";
import CPCDarkOne from "../assets/cpcdarkone.svg";
import CPCDarkTwo from "../assets/cpcdarktwo.svg";
import IPPDark from "../assets/ippdark.svg";
const NewCompaing = () => {
  return (
    <div className="maincontainer">
      <div className="contentconatiner">
        <Header routename="campaigns / New campaing" />
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
        <div className="boxescompainsoverallsectoin">
          <div className="sectionleftonebeyong">
            <section className="sectionone">
              <div className="sectononetop">
                <h3>Format</h3>
                <div className="boxesgridonesection">
                  <div style={{ backgroundColor: "#1b1b1f" }}>
                    <img src={PushIcon} alt="" />

                    <h4>Push</h4>
                    <img src={Radiocheck} alt="" />
                  </div>
                  <div>
                    <img src={OnclickIcon} alt="" />
                    <h4>onclick</h4>
                    <img src={RadionUncheck} alt="" />
                  </div>
                  <div>
                    <img src={InpageIcon} alt="" />
                    <h4>In-page</h4>
                    <img src={RadionUncheck} alt="" />
                  </div>
                  <div>
                    <img src={CalenderIcon} alt="" />
                    <h4>Calendar</h4>
                    <img src={RadionUncheck} alt="" />
                  </div>
                </div>
              </div>
              <div className="sectononebottom"></div>
            </section>
            <section className="sectionone">
              <div className="sectononetop">
                <h3>Bid model</h3>
                <div className="boxesgridonesection">
                  <div style={{ backgroundColor: "#1b1b1f" }}>
                    <img src={CPCDarkOne} alt="" />
                    <h4>SmartCPC</h4>
                    <img src={Radiocheck} alt="" />
                  </div>
                  <div>
                    <img src={CPCDarkTwo} alt="" />
                    <h4>CPC</h4>
                    <img src={RadionUncheck} alt="" />
                  </div>
                </div>
              </div>
              <div className="sectononebottom"></div>
            </section>
            <section className="sectionone">
              <div className="sectononetop">
                <h3>Format</h3>
                <div className="boxesgridonesection">
                  <div style={{ backgroundColor: "#1b1b1f" }}>
                    <img src={PushIcon} alt="" />
                    <h4>Push</h4>
                    <img src={Radiocheck} alt="" />
                  </div>
                  <div>
                    <img src={OnclickIcon} alt="" />
                    <h4>onclick</h4>
                    <img src={RadionUncheck} alt="" />
                  </div>
                  <div>
                    <img src={InpageIcon} alt="" />
                    <h4>In-page</h4>
                    <img src={RadionUncheck} alt="" />
                  </div>
                  <div>
                    <img src={CalenderIcon} alt="" />
                    <h4>Calendar</h4>
                    <img src={RadionUncheck} alt="" />
                  </div>
                </div>
              </div>
              <div className="sectononebottom"></div>
            </section>
          </div>
          <div className="sectionrightonebeyong">
            <h3>Contents</h3>
            <div className="bordercontainer">
              <div className="lstcontentecontinaer">
                <div className="lisitimtesingle">
                  <p>Ad format</p>
                  <p>Push,SmartCPC</p>
                </div>
                <div className="lisitimtesingle">
                  <p>Traffic Presets</p>
                  <p>-</p>
                </div>
                <div className="lisitimtesingle">
                  <p>General</p>
                  <p></p>
                </div>
                <div className="lisitimtesingle">
                  <p>Creatives</p>
                  <p>1 creatuves</p>
                </div>
                <div className="lisitimtesingle">
                  <p>Countries</p>
                  <p>-</p>
                </div>
                <div className="lisitimtesingle">
                  <p>Bidding</p>
                  <p>-</p>
                </div>
                <div className="lisitimtesingle">
                  <p>Traffic</p>
                  <p>6 age groups</p>
                </div>
                <div className="lisitimtesingle">
                  <p>Frequency capping</p>
                  <p>1/24</p>
                </div>
                <div className="lisitimtesingle">
                  <p>Device</p>
                  <p>2 devices,4 Osec</p>
                </div>
                <div className="lisitimtesingle">
                  <p>Browser</p>
                  <p>-</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewCompaing;
