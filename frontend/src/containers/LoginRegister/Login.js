import React, { useState, useEffect } from "react";
import axios from "axios";
import Auth from "../../util/Auth";
import { headers, headersToken } from "../../lib/headers";

const Login = (props) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  // const [loginError, setLoginError] = useState();

  const [loginDetails, setLoginDetails] = useState();

  useEffect(() => {
    const getLoginDetails = async () => {
      if (headersToken.headers.Authorization === "Bearer null") {
        setLoginDetails(null);
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

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "/api/login/",
        { email: email, password: password },
        headers,
      );
      Auth.setToken(res.data.token);
      props.history.push("/myprofile");
    } catch (err) {
      console.log(err);
      // setLoginError("Incorrect Credentials");
    }
  };

  const handleLogout = () => {
    Auth.logout();
    setLoginDetails(null);
  };

  return !loginDetails ? (
    <form>
      <div className="field mb-3">
        <label className="label mb-0">Email</label>
        <p className="control is-expanded has-icons-left has-icons-right">
          <input
            // className="input is-success"
            className="input"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span className="icon is-small is-left register-icon">
            <i className="fas fa-envelope"></i>
          </span>
          {/* <span className="icon is-small is-righ register-icont">
            <i className="fas fa-check"></i>
          </span> */}
        </p>
      </div>
      <div className="field mb-3">
        <label className="label mb-0">Password</label>
        <p className="control has-icons-left">
          <input
            className="input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="icon is-small is-left register-icon">
            <i className="fas fa-lock"></i>
          </span>
        </p>
      </div>
      <div className="column is-flex is-justify-content-center">
        <div className="action-button">
          {/* <Link
          to={{
            pathname: "/search",
            state: { checkin, checkout, adults, kids, chosenSite },
          }}
        > */}
          <input
            className="button is-danger"
            value="Login"
            type="submit"
            onClick={handleLogin}
          />
          {/* </Link> */}
        </div>
      </div>
    </form>
  ) : (
    <div className="already-logged-in">
      <p>
        Logged in as{" "}
        <a href="/myprofile">
          {loginDetails.first_name} {loginDetails.last_name}
        </a>
      </p>
      <div className="column is-flex is-justify-content-center">
        <div className="action-button">
          {/* <Link
          to={{
            pathname: "/search",
            state: { checkin, checkout, adults, kids, chosenSite },
          }}
        > */}
          <input
            className="button is-danger"
            value="Logout"
            // type="submit"
            onClick={handleLogout}
          />
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Login;
