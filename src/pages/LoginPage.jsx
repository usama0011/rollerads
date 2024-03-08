import { useState } from "react";
import wallSVG from "../assets/wall.svg";
import Tab from "../components/Tabs";
const LoginPage = ({ setIsLogedIn }) => {
  const [activeTab, setActiveTab] = useState("Login");
  const [email, setEmail] = useState("ads@clicksconnections.com");
  const [password, setPassword] = useState("123456");

  const handleInputFocus = (e) => {
    if (e.target.value === "Required") {
      e.target.value = "";
    }
  };

  return (
    <div className="login-container">
      <div className="login-logo-container">
        <img
          src="https://my.rollerads.com/img/ra_logo_dark.d49d937b.svg"
          className="mylogoweb"
          alt=""
        />
      </div>
      <div>
        <h1
          style={{
            marginBottom: "50px",
            marginTop: "50px",
            textAlign: "center",
          }}
        >
          Welcome to RollerAds
        </h1>
      </div>
      <div style={{ width: "100%", display: "flex", justifyItems: "center" }}>
        <div className="tabs-container">
          <Tab
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            tabName="Login"
          />
          <Tab
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            tabName="Sign Up"
          />
          <Tab
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            tabName="Forgot Password"
          />
        </div>
      </div>
      <div className="login-form-container">
        {activeTab === "Login" && (
          <section className="login-section">
            <div className="form-section">
              <h3 style={{ marginBottom: "25px" }}>Sign in to platform</h3>
              <div className="reportsdivItem">
                <div className="inputContainer">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onFocus={handleInputFocus}
                    placeholder="E-Mail:"
                    className="custominput"
                  />
                  <span className="requiredText">Required</span>
                </div>
              </div>{" "}
              <div className="reportsdivItem">
                <div className="inputContainer">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onFocus={handleInputFocus}
                    placeholder="Password:"
                    className="custominput"
                  />
                  <span className="requiredText">Required</span>
                </div>
              </div>{" "}
            </div>
            <div
              className="buttons"
              onClick={() => {
                setIsLogedIn(false);
              }}
            >
              <div className="button-container">
                {" "}
                <img src={wallSVG} alt="" /> <span>Login</span>
              </div>
            </div>
          </section>
        )}
        {activeTab === "Sign Up" && (
          <section className="signup-section">
            {/* Add Sign Up form here */}
            <h3>Sign Up Form</h3>
          </section>
        )}
        {activeTab === "Forgot Password" && (
          <section className="forgot-password-section">
            {/* Add Forgot Password form here */}
            <h3>Forgot Password Form</h3>
          </section>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
