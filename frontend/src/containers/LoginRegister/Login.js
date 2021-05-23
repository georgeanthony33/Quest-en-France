import React, { useState } from "react";
import axios from "axios";
import Auth from "../../util/Auth";
import { headers } from "../../lib/headers";
import { notyf } from "../NavBar/NavBar";

const Login = (props) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const [loginError, setLoginError] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "/api/login/",
        { email: email, password: password },
        headers,
      );
      Auth.setToken(res.data.token);
      const { first_name, last_name } = res.data.user;
      notyf.open({
        type: "login",
        message: `Logged in as ${first_name} ${last_name}`,
      });
      props.history.push({
        pathname: "/myprofile",
        state: { token: res.data.token },
      });
    } catch (err) {
      console.log(err);
      setLoginError("Incorrect email or password");
    }
  };

  return (
    <form>
      {loginError && (
        <div className="notification error-message is-danger is-light">
          <button
            className="delete close-error-message"
            onClick={() => setLoginError(false)}
          ></button>
          {loginError}
        </div>
      )}
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
          <input
            className="button is-danger"
            value="Login"
            type="submit"
            onClick={handleLogin}
          />
        </div>
      </div>
    </form>
  );
};

export default Login;
