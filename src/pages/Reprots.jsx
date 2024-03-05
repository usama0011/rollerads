import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import "../styles/Reports.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TableEYEIcon from "../assets/tableeye.svg";
import DownlaodIcon from "../assets/download.svg";
const Reprots = () => {
  const [showSavedReports, setShowSavedReports] = useState(false);
  const [selectedReport, setSelectedReport] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [showCountries, setShowCountries] = useState(false);
  const [selectedDate, setSelectedDate] = useState("2024-03-04");
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const handleToggleSavedReports = () => {
    setShowSavedReports(!showSavedReports);
  };

  const handleSelectReport = (report) => {
    setSelectedReport(report);
    setShowSavedReports(false);
  };

  const handleSelectCountry = (country) => {
    setSelectedCountry(country);
    setShowCountries(false);
  };

  const handleToggleCountries = () => {
    setShowCountries(!showCountries);
  };
  const handleToggleDatePicker = () => {
    setShowDatePicker(!showDatePicker);
  };

  const handleSelectDate = (date) => {
    setSelectedDate(date);
    setShowDatePicker(false);
  };
  useEffect(() => {
    document.title = "Reports Campaings . RollerAds";
  }, []);
  return (
    <div className="reportsContainer">
      <Header routename="Reports" />
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
      <div className="reaportsfiltercontainer">
        <div className="reportfiheader">
          <h3>Filters</h3>
          <div className="reportfilterrightside">
            <p>Show saved reports</p>
            {/* toggledivbycss */}
          </div>
        </div>
        <div className="filerreportsbody">
          <div className="reportsdivItem">
            <div>
              <input
                type="text"
                value={selectedReport}
                placeholder="Select report"
                readOnly
                onClick={handleToggleSavedReports}
              />
            </div>
            {showSavedReports && (
              <div className="optionsContainer avafi">
                <div onClick={() => handleSelectReport("Report 1")}>
                  Creatives
                </div>
                <div onClick={() => handleSelectReport("Report 2")}>
                  Compaign
                </div>
                <div onClick={() => handleSelectReport("Report 3")}>
                  Add Format
                </div>
                <div onClick={() => handleSelectReport("Report 3")}>Day</div>
                <div onClick={() => handleSelectReport("Report 3")}>Hour</div>
                <div onClick={() => handleSelectReport("Report 3")}>Zone</div>
                <div onClick={() => handleSelectReport("Report 3")}>Feed</div>
                <div onClick={() => handleSelectReport("Report 3")}>
                  Country
                </div>
                <div onClick={() => handleSelectReport("Report 3")}>
                  Plateform
                </div>
                <div onClick={() => handleSelectReport("Report 3")}>
                  Subscriptons age
                </div>
                <div onClick={() => handleSelectReport("Report 3")}></div>
                {/* Add more reports as needed */}
              </div>
            )}
          </div>
          <div className="reportsdivItem datepicker">
            <div>
              <input
                className="dadddd"
                type="text"
                value={selectedDate}
                placeholder="Select date"
                readOnly
                onClick={handleToggleDatePicker}
              />
            </div>
            {showDatePicker && (
              <div className="datePickerContainer">
                <div className="daterngaertopconainer">
                  <div className="leftSideButtons">
                    <button onClick={() => handleSelectDate("Today")}>
                      Today
                    </button>
                    <button onClick={() => handleSelectDate("Yesterday")}>
                      Yesterday
                    </button>
                    <button onClick={() => handleSelectDate("Current Week")}>
                      Current Week
                    </button>
                    <button onClick={() => handleSelectDate("Last 7 Days")}>
                      Last 7 Days
                    </button>
                    <button onClick={() => handleSelectDate("Last 30 Days")}>
                      Last 30 Days
                    </button>
                    <button onClick={() => handleSelectDate("This Month")}>
                      This Month
                    </button>
                    <button onClick={() => handleSelectDate("Last Month")}>
                      Last Month
                    </button>
                  </div>
                  <div className="rightSideCalendar">
                    <div className="uuper">
                      <div>
                        <DatePicker
                          wrapperClassName="datePicker"
                          selected={startDate}
                          onChange={(date) => setStartDate(date)}
                          startDate={startDate}
                          endDate={endDate}
                          minDate={new Date()}
                          selectsRange
                          inline
                        />
                      </div>
                      <div>
                        <DatePicker
                          wrapperClassName="datePicker"
                          selected={startDate}
                          onChange={(date) => setStartDate(date)}
                          startDate={startDate}
                          endDate={endDate}
                          minDate={new Date()}
                          selectsRange
                          inline
                        />
                      </div>
                    </div>
                    <div className="chosenDateButtons">
                      <p>2024-03-04 - 2024-03-04</p>
                      <button onClick={() => handleSelectDate(selectedDate)}>
                        Apply
                      </button>
                      <button onClick={() => setShowDatePicker(false)}>
                        Clear
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="reportsdivItem">
            <div>
              <input
                type="text"
                value={selectedReport}
                placeholder="Select report"
                readOnly
                onClick={handleToggleSavedReports}
              />
            </div>
            {showSavedReports && (
              <div className="optionsContainer">
                <div onClick={() => handleSelectReport("Report 1")}>
                  Report 1
                </div>
                <div onClick={() => handleSelectReport("Report 2")}>
                  Report 2
                </div>
                <div onClick={() => handleSelectReport("Report 3")}>
                  Report 3
                </div>
                {/* Add more reports as needed */}
              </div>
            )}
          </div>{" "}
          <div className="reportsdivItem">
            <div>
              <input
                type="text"
                value={selectedReport}
                placeholder="Select report"
                readOnly
                onClick={handleToggleSavedReports}
              />
            </div>
            {showSavedReports && (
              <div className="optionsContainer">
                <div onClick={() => handleSelectReport("Report 1")}>
                  Report 1
                </div>
                <div onClick={() => handleSelectReport("Report 2")}>
                  Report 2
                </div>
                <div onClick={() => handleSelectReport("Report 3")}>
                  Report 3
                </div>
                {/* Add more reports as needed */}
              </div>
            )}
          </div>{" "}
          <div className="reportsdivItem">
            <div>
              <input
                type="text"
                value={selectedReport}
                placeholder="Select report"
                readOnly
                onClick={handleToggleSavedReports}
              />
            </div>
            {showSavedReports && (
              <div className="optionsContainer">
                <div onClick={() => handleSelectReport("Report 1")}>
                  Report 1
                </div>
                <div onClick={() => handleSelectReport("Report 2")}>
                  Report 2
                </div>
                <div onClick={() => handleSelectReport("Report 3")}>
                  Report 3
                </div>
                {/* Add more reports as needed */}
              </div>
            )}
          </div>{" "}
          <div className="reportsdivItem">
            <div>
              <input
                type="text"
                value={selectedReport}
                placeholder="Select report"
                readOnly
                onClick={handleToggleSavedReports}
              />
            </div>
            {showSavedReports && (
              <div className="optionsContainer">
                <div onClick={() => handleSelectReport("Report 1")}>
                  Report 1
                </div>
                <div onClick={() => handleSelectReport("Report 2")}>
                  Report 2
                </div>
                <div onClick={() => handleSelectReport("Report 3")}>
                  Report 3
                </div>
                {/* Add more reports as needed */}
              </div>
            )}
          </div>{" "}
          <div className="reportsdivItem">
            <div>
              <input
                type="text"
                value={selectedCountry}
                placeholder="Select country"
                readOnly
                onClick={handleToggleCountries}
              />
            </div>
            {showCountries && (
              <div className="optionsContainer">
                <div onClick={() => handleSelectCountry("Country 1")}>
                  Country 1
                </div>
                <div onClick={() => handleSelectCountry("Country 2")}>
                  Country 2
                </div>
                <div onClick={() => handleSelectCountry("Country 3")}>
                  Country 3
                </div>
                {/* Add more countries as needed */}
              </div>
            )}
          </div>{" "}
          <div className="reportsdivItem">
            <div>
              <input
                type="text"
                value={selectedReport}
                placeholder="Select report"
                readOnly
                onClick={handleToggleSavedReports}
              />
            </div>
            {showSavedReports && (
              <div className="optionsContainer">
                <div onClick={() => handleSelectReport("Report 1")}>
                  Report 1
                </div>
                <div onClick={() => handleSelectReport("Report 2")}>
                  Report 2
                </div>
                <div onClick={() => handleSelectReport("Report 3")}>
                  Report 3
                </div>
                {/* Add more reports as needed */}
              </div>
            )}
          </div>{" "}
          <div className="reportsdivItem">
            <div>
              <input
                type="text"
                value={selectedReport}
                placeholder="Select report"
                readOnly
                onClick={handleToggleSavedReports}
              />
            </div>
            {showSavedReports && (
              <div className="optionsContainer">
                <div onClick={() => handleSelectReport("Report 1")}>
                  Report 1
                </div>
                <div onClick={() => handleSelectReport("Report 2")}>
                  Report 2
                </div>
                <div onClick={() => handleSelectReport("Report 3")}>
                  Report 3
                </div>
                {/* Add more reports as needed */}
              </div>
            )}
          </div>
        </div>
        <div className="footbuttons">
          <button>Apply filters</button>
          <button>clearn filters</button>
        </div>
      </div>
      <div className="reportstalbContainer">
        <div className="reporttableherader">
          <h3>Report</h3>
          <div className="iconscintainerseye">
            <img src={DownlaodIcon} alt="" />
            <img src={TableEYEIcon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reprots;
