import React, { useState } from "react";
// import axios from "axios";
// import Auth from "../../util/Auth";
// import { headers } from "../../lib/headers";

const ChangePassword = (props) => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleChangePassword = async () => {
    // try {
    //   await axios.post("/api/register/", registerData);
    //   handleLogin();
    // } catch (err) {
    //   // setRegisterError("Incorrect Credentials");
    //   console.log("Incorrect Credentials");
    // }
    return;
  };

  return (
    <form id="ChangePassword">
      <h3 className="title is-3">Update Password</h3>
      <div className="outer-container">
        <div className="field mb-4">
          <label className="label mb-1">Old Password</label>
          <p className="control has-icons-left">
            <input
              className="input"
              type="password"
              placeholder="Password"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
            />
            <span className="icon is-small is-left register-icon">
              <i className="fas fa-lock"></i>
            </span>
          </p>
        </div>
        <div className="field mb-4">
          <label className="label mb-1">New Password</label>
          <p className="control has-icons-left">
            <input
              className="input"
              type="password"
              placeholder="Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <span className="icon is-small is-left register-icon">
              <i className="fas fa-lock"></i>
            </span>
          </p>
        </div>
        <div className="field mb-4">
          <label className="label mb-1">Confirm Password</label>
          <p className="control has-icons-left">
            <input
              className="input"
              type="password"
              placeholder="Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
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
              value="Update password"
              type="submit"
              onClick={handleChangePassword}
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default ChangePassword;
