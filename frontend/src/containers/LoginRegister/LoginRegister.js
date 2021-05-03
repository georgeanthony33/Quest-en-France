import React, { useState } from "react";
// import axios from "axios";
import "./LoginRegister.scss";
// import config from "../../util/Config";
import Login from "./Login";
import Register from "./Register";

const LoginRegister = (props) => {
  const [selectedTab, setSelectedTab] = useState(
    props.match.path.slice(1, props.match.path.length),
  );
  const setTab = (tab) => {
    props.history.push({
      pathname: `/${tab}`,
    });
    setSelectedTab(tab);
  };
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
        {selectedTab === "register" && <Register />}
        {selectedTab === "login" && <Login {...props} />}
      </div>
    </div>
  );
};

export default LoginRegister;
