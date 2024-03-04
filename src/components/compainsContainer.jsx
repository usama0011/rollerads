import React from "react";
import "../styles/compainsContainer.css";
import HeaderIcon from "../assets/header.svg";
import CheckboxIcon from "../assets/checkbox.svg";
import ArrowDownIcon from "../assets/arrowdown.svg";
import InstaLogo from "../assets/insta.svg";

const CompainContainer = () => {
  return (
    <>
      <div className="compainContainermain">
        <div className="compainsheader">
          <h3>List of compaigns</h3>
          <img src={HeaderIcon} alt="" />
        </div>
        <div className="compainstableContainer">
          <table>
            <thead>
              <tr>
                <th className="compainstablth">
                  <div className="tablethiitem">
                    <img src={CheckboxIcon} alt="" />
                  </div>
                </th>
                <th className="compainstablth">
                  <div className="tablethiitem">
                    <p>ID</p>
                    <img src={ArrowDownIcon} alt="" />
                  </div>
                </th>
                <th className="compainstablth">
                  <div className="tablethiitem">
                    <p>Name</p>
                    <img src={ArrowDownIcon} alt="" />
                  </div>
                </th>

                <th className="compainstablth">
                  <div className="tablethiitem">
                    <p>Satus</p>
                    <img src={ArrowDownIcon} alt="" />
                  </div>
                </th>
                <th className="compainstablth">
                  <div className="tablethiitem">
                    <p>Ad format</p>
                    <img src={ArrowDownIcon} alt="" />
                  </div>
                </th>

                <th className="compainstablth">
                  <div className="tablethiitem">
                    <p>Type</p>
                    <img src={ArrowDownIcon} alt="" />
                  </div>
                </th>
                <th className="compainstablth">
                  <div className="tablethiitem">
                    <p>Type</p>
                  </div>
                </th>
                <th className="compainstablth">
                  <div className="tablethiitem">
                    <p>Impr.</p>
                  </div>
                </th>
                <th className="compainstablth">
                  <div className="tablethiitem">
                    <p>Clicks</p>
                  </div>
                </th>
                <th className="compainstablth">
                  <div className="tablethiitem">
                    <p>Conv.</p>
                  </div>
                </th>
                <th className="compainstablth">
                  <div className="tablethiitem">
                    <p>CTR</p>
                  </div>
                </th>
                <th className="compainstablth">
                  <div className="tablethiitem">
                    <p>CPA</p>
                  </div>
                </th>
                <th className="compainstablth">
                  <div className="tablethiitem">
                    <p>eCPC</p>
                  </div>
                </th>
                <th className="compainstablth">
                  <div className="tablethiitem">
                    <p>eCPM</p>
                  </div>
                </th>
                <th className="compainstablth">
                  <div className="tablethiitem">
                    <p>Cost</p>
                  </div>
                </th>
                <th className="compainstablth">
                  <div className="tablethiitem">
                    <p>Daily budget</p>
                  </div>
                </th>
                <th className="compainstablth">
                  <div className="tablethiitem">
                    <p>Total budget</p>
                  </div>
                </th>
                <th className="compainstablth">
                  <div className="tablethiitem">
                    <p>Start Date</p>
                    <img src={ArrowDownIcon} alt="" />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="tablecompainbody">
              <tr>
                <td></td>
                <td>
                  <input type="text" placeholder="All" className="idinput" />
                </td>
                <td>
                  <input type="text" placeholder="All" className="nameinput" />
                </td>
                <td>
                  <select name="status" id="status" className="mystatusselect">
                    <option value="4 values">4 Values</option>
                    <option value="4 values">Active</option>
                    <option value="4 values">Paused</option>
                    <option value="4 values">Stopped</option>
                    <option value="4 values">Draft</option>
                    <option value="4 values">Archive</option>
                  </select>
                </td>
                <td>
                  <select name="status" id="status" className="mystatusselect">
                    <option value="4 values">All</option>
                    <option value="4 values">Push</option>
                    <option value="4 values">OnClick</option>
                    <option value="4 values">IPP</option>
                    <option value="4 values">Native</option>
                    <option value="4 values">Calender</option>
                  </select>
                </td>
                <td>
                  <select name="status" id="status" className="mystatusselect">
                    <option value="4 values">All</option>
                    <option value="4 values">CPC</option>
                    <option value="4 values">CPM</option>
                    <option value="4 values">CPA</option>
                    <option value="4 values">SmartCPC</option>
                    <option value="4 values">SmartCPM</option>
                  </select>
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
                <td>
                  <div className="dateranger">All</div>
                </td>
              </tr>
            </tbody>
          </table>
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
