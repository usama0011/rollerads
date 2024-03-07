import React, { useState } from "react";
import "../styles/compainsContainer.css";
import HeaderIcon from "../assets/header.svg";
import InstaLogo from "../assets/insta.svg";
import {
  ChartBarSquareIcon,
  PauseIcon,
  PencilIcon,
  PlayIcon,
  PlusCircleIcon,
  ArrowDownIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  CheckIcon,
} from "@heroicons/react/24/solid";
import { Link, useNavigate } from "react-router-dom";

const CompainContainer = () => {
  const navigate = useNavigate();
  const campaignsData = [
    {
      id: 659465,
      name: "S1 Solar New",
      status: "paused",
      adFormat: "In-Page Push",
      type: "SmartCPC",
      bid: "$0.50",
      impressions: 0,
      clicks: 0,
      conversions: 0,
      ctr: "—",
      cpa: "—",
      ecpc: "$0.000",
      ecpm: "$0.000",
      cost: "$0.00",
      dailyBudget: "—",
      totalBudget: "$0.00",
      startDate: "2024-02-15",
    },
    {
      id: 264830,
      name: "S1 Roofing 1",
      status: "paused",
      adFormat: "In-Page Push",
      type: "SmartCPM",
      bid: "$0.50",
      impressions: 0,
      clicks: 0,
      conversions: 0,
      ctr: "—",
      cpa: "—",
      ecpc: "$0.000",
      ecpm: "$0.000",
      cost: "$0.00",
      dailyBudget: "—",
      totalBudget: "$0.00",
      startDate: "2024-02-20",
    },
    {
      id: 537921,
      name: "S1 Kitchen 2",
      status: "paused",
      adFormat: "In-Page Push",
      type: "SmartCPM",
      bid: "$0.50",
      impressions: 0,
      clicks: 0,
      conversions: 0,
      ctr: "—",
      cpa: "—",
      ecpc: "$0.000",
      ecpm: "$0.000",
      cost: "$0.00",
      dailyBudget: "—",
      totalBudget: "$0.00",
      startDate: "2024-02-20",
    },
    {
      id: 923765,
      name: "S1 Bathroom IN",
      status: "paused",
      adFormat: "In-Page Push",
      type: "SmartCPM",
      bid: "$0.50",
      impressions: 0,
      clicks: 0,
      conversions: 0,
      ctr: "—",
      cpa: "—",
      ecpc: "$0.000",
      ecpm: "$0.000",
      cost: "$0.00",
      dailyBudget: "—",
      totalBudget: "$0.00",
      startDate: "2024-02-15",
    },
    {
      id: 387215,
      name: "S1 Medicare Low End",
      status: "paused",
      adFormat: "In-Page Push",
      type: "CPC",
      bid: "$0.50",
      impressions: 0,
      clicks: 0,
      conversions: 0,
      ctr: "—",
      cpa: "—",
      ecpc: "$0.000",
      ecpm: "$0.000",
      cost: "$0.00",
      dailyBudget: "—",
      totalBudget: "$0.00",
      startDate: "2024-02-15",
    },
    {
      id: 601849,
      name: "S1 Mortgage T1",
      status: "paused",
      adFormat: "In-Page Push",
      type: "SmartCPM",
      bid: "$0.50",
      impressions: 0,
      clicks: 0,
      conversions: 0,
      ctr: "—",
      cpa: "—",
      ecpc: "$0.000",
      ecpm: "$0.000",
      cost: "$0.00",
      dailyBudget: "—",
      totalBudget: "$0.00",
      startDate: "2024-02-15",
    },
    {
      id: 175932,
      name: "UNB Solar DR",
      status: "Active",
      adFormat: "OnClick",
      type: "SmartCPM",
      bid: "$0.024",
      impressions: "510,000",
      clicks: "24,000",
      conversions: 0,
      ctr: "4.71%",
      cpa: "—",
      ecpc: "$0.025",
      ecpm: "$1.17",
      cost: "$2500",
      dailyBudget: "$700",
      totalBudget: "$5000",
      startDate: "2024-03-01",
    },
    {
      id: 849206,
      name: "UNB Roofing DR",
      status: "Active",
      adFormat: "OnClick",
      type: "SmartCPM",
      bid: "$0.016",
      impressions: "230,000",
      clicks: "14,800",
      conversions: 0,
      ctr: "6.43%",
      cpa: "—",
      ecpc: "$0.023",
      ecpm: "$1.48",
      cost: "$340.4",
      dailyBudget: "$1,200",
      totalBudget: "$4000",
      startDate: "2024-03-01",
    },
    {
      id: 320574,
      name: "UNB Bathroom XR",
      status: "Active",
      adFormat: "OnClick",
      type: "SmartCPM",
      bid: "$0.019",
      impressions: "425,301",
      clicks: "13,728",
      conversions: "0",
      ctr: "3.23%",
      cpa: "—",
      ecpc: "$0.20",
      ecpm: "$0.64",
      cost: "$274.56",
      dailyBudget: "$500",
      totalBudget: "$4000",
      startDate: "2024-02-27",
    },
    {
      id: 702185,
      name: "UNB KIT DR",
      status: "Active",
      adFormat: "OnClick",
      type: "SmartCPM",
      bid: "$0.033",
      impressions: "331,455",
      clicks: "12,351",
      conversions: 0,
      ctr: "3.73%",
      cpa: "—",
      ecpc: "$0.034",
      ecpm: "$1.26",
      cost: "$419.93",
      dailyBudget: "$300",
      totalBudget: "$4,500",
      startDate: "2024-03-02",
    },
    {
      id: 465823,
      name: "ADS SO 1",
      status: "Active",
      adFormat: "OnClick",
      type: "SmartCPM",
      bid: "$0.50",
      impressions: "483,900",
      clicks: "21.012",
      conversions: 0,
      ctr: "4.35%",
      cpa: "—",
      ecpc: "$0.056",
      ecpm: "$2.43",
      cost: "$1,176.67",
      dailyBudget: "$1500",
      totalBudget: "$11,000",
      startDate: "2024-03-01",
    },

    {
      id: 189342,
      name: "ADS 2 Insurance PP",
      status: "Active",
      adFormat: "OnClick",
      type: "SmartCPM",
      bid: "$0.039",
      impressions: "300,888",
      clicks: "11,557",
      conversions: 0,
      ctr: "'3.84%'",
      cpa: "—",
      ecpc: "$0.041",
      ecpm: "$1.57",
      cost: "$473.83",
      dailyBudget: "$600",
      totalBudget: "$7000",
      startDate: "2024-02-25",
    },

    {
      id: 873412,
      name: "ADS 3 New Solar",
      status: "Active",
      adFormat: "OnClick",
      type: "SmartCPM",
      bid: "$0.051",
      impressions: "198,244",
      clicks: "8,520",
      conversions: 0,
      ctr: "4.30%",
      cpa: "—",
      ecpc: "$0.060",
      ecpm: "$2.57",
      cost: "$511.2",
      dailyBudget: "$1300",
      totalBudget: "$8000",
      startDate: "2024-02-29",
    },
    {
      id: 540921,
      name: "Test ADS Home RR",
      status: "Pause",
      adFormat: "OnClick",
      type: "SmartCPM",
      bid: "$0.015",
      impressions: 0,
      clicks: 0,
      conversions: 0,
      ctr: "—",
      cpa: "—",
      ecpc: "$0.000",
      ecpm: "$0.000",
      cost: "$2500",
      dailyBudget: "—",
      totalBudget: "—",
      startDate: "2024-02-22",
    },
    {
      id: 246831,
      name: "Test S1 Old AFD",
      status: "Declined",
      adFormat: "OnClick",
      type: "SmartCPM",
      bid: "$0.50",
      impressions: 0,
      clicks: 0,
      conversions: 0,
      ctr: "—",
      cpa: "—",
      ecpc: "$0.10",
      ecpm: "$5",
      cost: "$2500",
      dailyBudget: "$100",
      totalBudget: "$5000",
      startDate: "2024-03-01",
    },
    {
      id: 713594,
      name: "Test Native.",
      status: "paused",
      adFormat: "OnClick",
      type: "SmartCPM",
      bid: "$0.501",
      impressions: 0,
      clicks: 0,
      conversions: 0,
      ctr: "—",
      cpa: "—",
      ecpc: "$0.000",
      ecpm: "$0.000",
      cost: "$0.00",
      dailyBudget: "—",
      totalBudget: "—",
      startDate: "2024-03-01",
    },
  ];
  const [filteredData, setFilteredData] = useState(campaignsData);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(25);
  const [dropdownState, setDropdownState] = useState({
    status: false,
    adFormat: false,
    type: false,
  });
  const [selectedValue, setSelectedValue] = useState("4 values");
  const [selectedValueAds, setSelectedValueAds] = useState("All");
  const [selectedValuetypes, setSelectedValuetypes] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    const results = campaignsData.filter(
      (campaign) =>
        campaign.name.toLowerCase().includes(value.toLowerCase()) ||
        campaign.id.toString().includes(value) ||
        campaign.status.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData(results);
  };

  const handleFilter = (key, value) => {
    const results = campaignsData.filter((campaign) =>
      value === "All" ? true : campaign[key] === value
    );
    setFilteredData(results);
  };
  const toggleDropdown = (dropdown) => {
    setDropdownState((prevState) => ({
      ...prevState,
      [dropdown]: !prevState[dropdown],
    }));
  };
  const options = [
    { value: "4values", label: "4 values" },
    { value: "active", label: "Active" },
    { value: "paused", label: "Paused" },
    { value: "stopped", label: "Stopped" },
    { value: "draft", label: "Draft" },
    { value: "archive", label: "Archive" },
  ];
  const AdsOptioins = [
    { value: "All", label: "All" },
    { value: "Push", label: "Push" },
    { value: "onClick", label: "onClick" },
    { value: "IPP", label: "IPP" },
    { value: "Native", label: "Native" },
    { value: "Calender", label: "Calender" },
  ];
  const types = [
    { value: "All", label: "All" },
    { value: "CPC", label: "CPC" },
    { value: "CPA", label: "CPA" },
    { value: "SmartCPC", label: "SmartCPC" },
    { value: "SmartCPM", label: "SmartCPM" },
  ];
  const EditcomapinPage = (id) => {
    navigate("/rates");
  };
  const handleToggleOptions = (dropdown) => {
    setDropdownState((prevState) => ({
      ...prevState,
      [dropdown]: !prevState[dropdown],
    }));
  };
  const handleSelectOption = (key, value) => {
    setSelectedValue(value);
    handleFilter(key, value);
    // Toggle dropdown state
    toggleDropdown("status");
  };

  const handleSelectOptionAds = (value) => {
    setSelectedValueAds(value);
    handleFilter("adFormat", value);
    // Toggle dropdown state
    toggleDropdown("adFormat");
  };

  const handleSelectOptionTypes = (value) => {
    setSelectedValuetypes(value);
    handleFilter("type", value);
    // Toggle dropdown state
    toggleDropdown("type");
  };
  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = filteredData.slice(indexOfFirstRow, indexOfLastRow);

  const handlePageChange = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    setCurrentPage(pageNumber);
  };
  return (
    <>
      <div className="compainContainermain">
        <div className="compainsheader">
          <h3>List of compaigns</h3>
          <img src={HeaderIcon} alt="" />
        </div>
        <div className="compainstableContainer">
          <table className="campaignsTable">
            <thead>
              <tr>
                <th>
                  <label class="yycontainer">
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                  </label>
                </th>
                <th>
                  <div className="tablesingledivvv">
                    ID <ArrowDownIcon className="hhhh" />
                  </div>
                </th>
                <th>
                  <div className="tablesingledivvv">
                    Name <ArrowDownIcon className="hhhh" />
                  </div>
                </th>
                <th>
                  <div className="tablesingledivvv">
                    Status <ArrowDownIcon className="hhhh" />
                  </div>
                </th>
                <th>
                  <div className="tablesingledivvv">
                    Ad Format <ArrowDownIcon className="hhhh" />
                  </div>
                </th>
                <th>
                  <div className="tablesingledivvv">
                    Type <ArrowDownIcon className="hhhh" />
                  </div>
                </th>
                <th>
                  <div className="tablesingledivvv">
                    Bid <ArrowDownIcon className="hhhh" />
                  </div>
                </th>
                <th>
                  <div className="tablesingledivvv">
                    Impr. <ArrowDownIcon className="hhhh" />
                  </div>
                </th>
                <th>
                  <div className="tablesingledivvv">
                    Clicks <ArrowDownIcon className="hhhh" />
                  </div>
                </th>
                <th>
                  <div className="tablesingledivvv">
                    Conv. <ArrowDownIcon className="hhhh" />
                  </div>
                </th>
                <th>
                  <div className="tablesingledivvv">
                    CTR <ArrowDownIcon className="hhhh" />
                  </div>
                </th>
                <th>
                  <div className="tablesingledivvv">
                    CPA <ArrowDownIcon className="hhhh" />
                  </div>
                </th>
                <th>
                  <div className="tablesingledivvv">
                    eCPC <ArrowDownIcon className="hhhh" />
                  </div>
                </th>
                <th>
                  <div className="tablesingledivvv">
                    eCPM <ArrowDownIcon className="hhhh" />
                  </div>
                </th>
                <th>
                  <div className="tablesingledivvv">
                    Cost <ArrowDownIcon className="hhhh" />
                  </div>
                </th>
                <th>
                  <div className="tablesingledivvv">
                    Daily budget <ArrowDownIcon className="hhhh" />
                  </div>
                </th>
                <th>
                  <div className="tablesingledivvv">
                    Total budget <ArrowDownIcon className="hhhh" />
                  </div>
                </th>
                <th>
                  <div className="tablesingledivvv">
                    Start Date <ArrowDownIcon className="hhhh" />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="ccccctablebody">
              <br />
              <tr className="myrrrrrrr">
                <td>
                  <label class="yycontainer">
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                  </label>
                </td>
                <td>
                  <input type="" className="seasrchid" placeholder="ID" />
                </td>
                <td>
                  <input
                    type=""
                    className="nameinput"
                    placeholder="4 values"
                    value={searchTerm}
                    onChange={handleSearch}
                  />
                </td>
                <td>
                  <div className="customDropdownContainer">
                    <div
                      className="customInputContainer"
                      onClick={() => handleToggleOptions("status")}
                    >
                      <input
                        type="text"
                        className="customInput"
                        readOnly
                        value={selectedValue || "All"}
                      />
                      <div
                        className="arrowIcon"
                        onClick={() => handleToggleOptions("status")}
                      >
                        {dropdownState.status ? (
                          <ChevronUpIcon />
                        ) : (
                          <ChevronDownIcon />
                        )}
                      </div>
                    </div>
                    {dropdownState.status && (
                      <div className="optionsContainer">
                        {options.map((option) => (
                          <div
                            key={option.value}
                            className="option"
                            onClick={() =>
                              handleSelectOption("status", option.label)
                            }
                          >
                            {option.label}{" "}
                            {selectedValue === option.label && (
                              <CheckIcon className="checkIcon" />
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </td>
                <td>
                  <div className="customDropdownContainer">
                    <div
                      className="customInputContainer"
                      onClick={() => handleToggleOptions("adFormat")}
                    >
                      <input
                        type="text"
                        className="customInput"
                        readOnly
                        value={selectedValueAds || "All"}
                      />
                      <div
                        className="arrowIcon"
                        onClick={() => handleToggleOptions("adFormat")}
                      >
                        {dropdownState.adFormat ? (
                          <ChevronUpIcon />
                        ) : (
                          <ChevronDownIcon />
                        )}
                      </div>
                    </div>
                    {dropdownState.adFormat && (
                      <div className="optionsContainer">
                        {AdsOptioins.map((option) => (
                          <div
                            key={option.value}
                            className="option"
                            onClick={() => handleSelectOptionAds(option.label)}
                          >
                            {option.label}{" "}
                            {selectedValueAds === option.label && (
                              <CheckIcon className="checkIcon" />
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </td>
                <td>
                  <div className="customDropdownContainer">
                    <div
                      className="customInputContainer"
                      onClick={() => handleToggleOptions("type")}
                    >
                      <input
                        type="text"
                        className="customInput"
                        readOnly
                        value={selectedValuetypes || "All"}
                      />
                      <div
                        className="arrowIcon"
                        onClick={() => handleToggleOptions("type")}
                      >
                        {dropdownState.type ? (
                          <ChevronUpIcon />
                        ) : (
                          <ChevronDownIcon />
                        )}
                      </div>
                    </div>
                    {dropdownState.type && (
                      <div className="optionsContainer">
                        {types.map((option) => (
                          <div
                            key={option.value}
                            className="option"
                            onClick={() =>
                              handleSelectOptionTypes(option.label)
                            }
                          >
                            {option.label}{" "}
                            {selectedValuetypes === option.label && (
                              <CheckIcon className="checkIcon" />
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td className="alllastcontianer">All</td>
              </tr>

              {filteredData.map((campaign) => (
                <tr key={campaign.id}>
                  <td>
                    <label class="yycontainer">
                      <input type="checkbox" />
                      <span class="checkmark"></span>
                    </label>
                  </td>
                  <td>{campaign.id}</td>
                  <td>
                    <p className="companinnammedooted">{campaign.name}</p>
                  </td>
                  <td className="srcipp">
                    <div className="statuscontainer">
                      <p
                        mycuststylebar={campaign.status}
                        className="mycompainlargetitlt"
                      >
                        {campaign.status}
                      </p>
                      <div className="controlscotnaienr">
                        <PlayIcon className="oio" />
                        <PauseIcon className="oio" />
                        <Link
                          style={{ color: "unset" }}
                          to={`/campaings/${campaign.id}`}
                        >
                          <PencilIcon className="oio" />
                        </Link>
                        <PlusCircleIcon className="oio" />
                        <ChartBarSquareIcon className="oio" />
                      </div>
                    </div>
                  </td>
                  <td>{campaign.adFormat}</td>
                  <td>{campaign.type}</td>
                  <td>
                    <div className="bidcontainer">{campaign.bid}</div>
                  </td>
                  <td className="uyuyu">{campaign.impressions}</td>
                  <td className="uyuyu">{campaign.clicks}</td>
                  <td className="uyuyu">{campaign.conversions}</td>
                  <td className="uyuyu">{campaign.ctr}</td>
                  <td className="uyuyu">{campaign.cpa}</td>
                  <td className="uyuyu">{campaign.ecpc}</td>
                  <td className="uyuyu">{campaign.ecpm}</td>
                  <td>{campaign.cost}</td>
                  <td className="uyuyu">{campaign.dailyBudget}</td>
                  <td className="uyuyu">{campaign.totalBudget}</td>
                  <td>{campaign.startDate}</td>
                </tr>
              ))}
            </tbody>
            <footer className="tablefooter"></footer>
          </table>
        </div>
        <div className="paginationContainer">
          {/* Display row count and rows per page selection */}
          <p>Rws count: {currentRows.length}</p>
          <label htmlFor="rowsPerPage">Rows per Page:</label>
          <select
            id="rowsPerPage"
            value={rowsPerPage}
            onChange={(e) => setRowsPerPage(parseInt(e.target.value))}
          >
            <option value={25}>25</option>
            <option value={50}>50</option>
            <option value={75}>75</option>
            <option value={100}>100</option>
          </select>
          {/* Pagination buttons */}
          <button onClick={() => handlePageChange(1)}>
            <ChevronDoubleLeftIcon className="clicon" />
          </button>
          <button onClick={() => handlePageChange(currentPage - 1)}>
            <ChevronLeftIcon className="clicon" />
          </button>
          <button onClick={() => handlePageChange(currentPage + 1)}>
            <ChevronRightIcon className="clicon" />
          </button>
          <button onClick={() => handlePageChange(totalPages)}>
            <ChevronDoubleRightIcon className="clicon" />
          </button>
        </div>
      </div>
      <div className="iconsContainerslgoos">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <img src={InstaLogo} alt="" />
        <img src={InstaLogo} alt="" />
        <img src={InstaLogo} alt="" />
        <img src={InstaLogo} alt="" />
      </div>
    </>
  );
};

export default CompainContainer;
