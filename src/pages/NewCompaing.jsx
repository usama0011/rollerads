import React, { useState } from "react";
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
import Tooltip from "../assets/tooltip.svg";
import ArrowDownIcon from "../assets/arrowdown.svg";
import SmielFaceSVG from "../assets/smile.svg";
import AddIcon from "../assets/plus.svg";
const NewCompaing = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [showOptions, setShowOptions] = useState(false);
  const [showCountiresOption, setshowCountiresOption] = useState(false);
  const [campaignName, setCampaignName] = useState("");
  const [targetURL, setTargetURL] = useState("");
  const [targetInputValue, setTargetInputValue] = useState("");
  const [trafficPresetsInputValue, setTrafficPresetsInputValue] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [countries, setCountries] = useState([
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Côte d'Ivoire",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo (Congo-Brazzaville)",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czechia (Czech Republic)",
    "Democratic Republic of the Congo",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Holy See",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar (formerly Burma)",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Korea",
    "North Macedonia",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Palestine State",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Korea",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Sweden",
    "Switzerland",
    "Syria",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States of America",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Venezuela",
    "Vietnam",
    "Yemen",
    "Zambia",
    "Zimbabwe",
]);

  const handleInputChange = (e, setInputState) => {
    setInputState(e.target.value);
  };

  const handleInputFocus = (e) => {
    if (e.target.value === "Required") {
      e.target.value = "";
    }
  };

  const handleTagClick = (tag) => {
    setSelectedTags((prevTags) => [...prevTags, tag]);
    setTargetInputValue((prevValue) => prevValue + " " + tag);
  };

  const handleTagRemove = (tag) => {
    setSelectedTags((prevTags) =>
      prevTags.filter((selectedTag) => selectedTag !== tag)
    );
    setTargetInputValue((prevValue) => prevValue.replace(tag, ""));
  };

  const handleOptionSelect = (value) => {
    if (inputValue === "Target URL") {
      setTargetURL(value); // Fill the input with the selected value
    }
    setInputValue(value); // Fill the input with the selected value
    setShowOptions(false); // Hide options after selection
  };
  const handleToggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  const handleTrafficPresetInputChange = (e) => {
    setTrafficPresetsInputValue(e.target.value);
  };
  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setshowCountiresOption(false);
  };

  const handleToggleOptions = () => {
    setshowCountiresOption((prev) => !prev);
  };
  return (
    <div className="maincontainer">
      <div className="contentconatiner">
        <Header routename="Campaigns / New campaing" />
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
            <section className="sectionone dropdownselectotoinslist">
              <div
                className="preseheadercontainer"
                onClick={handleToggleDropdown}
              >
                <div>
                  <h3>Traffic Presets</h3>
                  <img src={Tooltip} alt="" />
                </div>
                <div style={{ cursor: "pointer" }}>
                  <img
                    src={ArrowDownIcon}
                    onClick={(e) => e.stopPropagation()}
                    alt=""
                  />
                </div>
              </div>
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Search..."
                className="searchInput"
                onClick={() => setShowOptions(true)} // Show options when input is clicked
              />
              {showOptions && (
                <div className="optionsContainer">
                  <div onClick={() => handleOptionSelect("No Presets")}>
                    No Presets
                  </div>
                  <div
                    onClick={() =>
                      handleOptionSelect("AR | Desktop | Software")
                    }
                  >
                    AR | Desktop | Software
                  </div>
                  <div onClick={() => handleOptionSelect("AT | Mobile Gaming")}>
                    AT | Mobile Gaming
                  </div>
                  <div
                    onClick={() => handleOptionSelect("AU | Mobile | Finance")}
                  >
                    AU | Mobile | Finance
                  </div>
                  <div
                    onClick={() =>
                      handleOptionSelect("AU Mobile Utilities Aggressions")
                    }
                  >
                    AU Mobile Utilities Aggressions
                  </div>
                  {/* Add more options as needed */}
                </div>
              )}
            </section>
            <section className="sectionone prrr">
              <div className="sectononetop">
                <h3 style={{ marginBottom: "15px" }}>General</h3>
                <div className="inputContainer">
                  <input
                    type="text"
                    value={trafficPresetsInputValue}
                    onChange={handleTrafficPresetInputChange}
                    onFocus={handleInputFocus}
                    placeholder="Traffic Presets"
                    className="custominput"
                  />
                  <span className="requiredText">Required</span>
                </div>
                <div className="inputContainer">
                  <input
                    type="text"
                    value={targetInputValue}
                    onChange={(e) => handleInputChange(e, setTargetInputValue)}
                    onFocus={handleInputFocus}
                    placeholder="Target URL"
                    className="custominput"
                  />
                  <span className="requiredText">Required</span>
                </div>
              </div>
              <div className="sectononebottom">
                <div className="tagsContainer">
                  {[
                    "{campaignid}",
                    "{creativeId}",
                    "{zoneId}",
                    "{feedId}",
                    "{clickId}",
                    "{cost}",
                    "{device}",
                    "{browser}",
                    "{browserVersion}",
                    "{os}",
                    "{osVersion}",
                    "{country}",
                    "{countryName}",
                    "{isp}",
                    "{carrier}",
                    "{connectionType}",
                    "{userAgent}",
                    "{ageGroup}",
                    "{format}",
                  ].map((tag, index) => (
                    <div
                      key={index}
                      className={`tag ${
                        selectedTags.includes(tag) ? "selected" : ""
                      }`}
                      onClick={() => handleTagClick(tag)}
                    >
                      {tag}
                      <p className="mytooltip">{tag}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
            {/* Craeteives section start form there   */}
            <section className="sectionone creativesecton">
              <h3>Creatives</h3>
              <div className="createiveheader">
                <img src={Tooltip} alt="" />
                <p>
                  Working with software and utilities? Try auto-generated
                  creatives! More in the{" "}
                  <Link
                    style={{ color: "#3880df" }}
                    to="https://blog.rollerads.com/2023/10/18/introducing-auto-generated-creatives-for-software-utilities/"
                  >
                    blog.
                  </Link>
                </p>
              </div>
              <div className="genreatebuttonsredion">
                <div>
                  <img src={Radiocheck} alt="" />
                  <p>Manual</p>
                </div>
                <div>
                  <img src={RadionUncheck} alt="" />
                  <p>Auto-genereated</p>
                </div>
              </div>
              <div className="imagescontainermain">
                <div>
                  <p>Icon</p>
                  <p className="specilstyle">
                    192 x 192 px jpg.png,webp 2Mb max
                  </p>
                </div>
                <div className="secondcontainerimgads">
                  <p>Image</p>
                  <p className="specilstyle">
                    360 x 240 px jpg.png,webp 2Mb max
                  </p>
                </div>
              </div>
              <div className="emojitextcontinaer">
                <div className="facecontainer">
                  <img src={SmielFaceSVG} alt="" />
                </div>
                <div className="inputemoijinut">
                  <input
                    className="myinputemoitlte"
                    type="text"
                    placeholder="Title"
                  />
                </div>
              </div>
              <div className="selectedtextcontainer">
                <div>{`{City}`}</div>
                <div>{`{Country}`}</div>
              </div>
              <div className="emojitextcontinaer">
                <div className="facecontainer">
                  <img src={SmielFaceSVG} alt="" />
                </div>
                <div className="inputemoijinut">
                  <input
                    className="myinputemoitlte"
                    type="text"
                    placeholder="Description"
                  />
                </div>
              </div>
              <div className="selectedtextcontainer">
                <div>{`{City}`}</div>
                <div>{`{Country}`}</div>
              </div>
            </section>
            <section className="sectionone ssss">
              <h3>Preview</h3>
              <div className="previewbuttonsconainer">
                <div>
                  <img src={Radiocheck} alt="" />
                  <p>Android</p>
                </div>
                <div>
                  <img src={RadionUncheck} alt="" />
                  <p>Windows</p>
                </div>
                <div>
                  <img src={RadionUncheck} alt="" />
                  <p>macOS</p>
                </div>
              </div>
              <div className="blackcontainner">
                <div className="crnnrr">
                  <img
                    className="chromimage"
                    src="https://img.icons8.com/?size=40&id=YqsZIFNpoKuB&format=png"
                    alt=""
                  />{" "}
                  <p className="chrome">Chrome. example.rollerads.com .new</p>
                </div>
                <h5>You createive title</h5>
                <p>You creative description</p>
              </div>
              <div className="addcreateubuttons">
                <img src={AddIcon} alt="" />
                <p>Add creative</p>
              </div>
            </section>
            <section className="sectionone countriescontainer">
              <h3>Countries</h3>
              <div className="inputContainer">
                <input
                  type="text"
                  value={selectedCountry}
                  onChange={(e)=>setSelectedCountry(e.target.value)}
                  placeholder="Select country"
                  className="custominput"
                  readOnly
                  onClick={handleToggleOptions}
                />
                <span className="requiredText">Required</span>
              </div>
              {showCountiresOption && ( // Fixed variable name
                <div className="optionsContainer">
                  {countries.map((country, index) => (
                    <div
                      key={index}
                      onClick={() => handleCountrySelect(country)}
                    >
                      {country}
                    </div>
                  ))}
                </div>
              )}
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
