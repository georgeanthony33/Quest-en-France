import React, { useState, useEffect } from "react";
import axios from "axios";
import Auth from "../../util/Auth";
import "./LoginRegister.scss";
import Login from "./Login";
import Register from "./Register";

const LoginRegister = (props) => {
  const [loginDetails, setLoginDetails] = useState(null);
  const headersToken = {
    headers: { Authorization: `Bearer ${Auth.getToken()}` },
  };
  useEffect(() => {
    const getLoginDetails = async () => {
      if (headersToken.headers.Authorization === "Bearer null") {
        setLoginDetails(false);
      } else {
        try {
          const response = await axios.get("/api/profile/", headersToken);
          setLoginDetails(response.data);
        } catch (err) {
          console.log(err);
        }
      }
    };
    getLoginDetails();
  }, []);

  const handleLogout = () => {
    Auth.logout();
    setLoginDetails(null);
    props.history.push("/");
  };

  const [selectedTab, setSelectedTab] = useState(
    props.match.path.slice(1, props.match.path.length),
  );
  const setTab = (tab) => {
    props.history.push({
      pathname: `/${tab}`,
    });
    setSelectedTab(tab);
  };

  if (loginDetails === null) return null;

  return (
    <div id="LoginRegister">
      <div className="form-container">
        <div className="tabs is-fullwidth top-banner is-large mb-0">
          <li
            className={selectedTab === "register" && "is-active"}
            onClick={() => setTab("register")}
          >
            <button className="auth-tabs anchor-button">
              <span>Register</span>
            </button>
          </li>
          <li
            className={selectedTab === "login" && "is-active"}
            onClick={() => setTab("login")}
          >
            <button className="auth-tabs anchor-button">
              <span>Login</span>
            </button>
          </li>
        </div>
        {!loginDetails && selectedTab === "register" && <Register />}
        {!loginDetails && selectedTab === "login" && <Login {...props} />}
        {loginDetails && (
          <div className="already-logged-in">
            <p>
              Logged in as{" "}
              <a href="/myprofile">
                {loginDetails.first_name} {loginDetails.last_name}
              </a>
            </p>
            <div className="column is-flex is-justify-content-center">
              <div className="action-button">
                <input
                  className="button is-danger"
                  value="Logout"
                  onClick={handleLogout}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginRegister;
