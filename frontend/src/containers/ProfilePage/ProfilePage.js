import React, { useEffect, useState } from "react";
import axios from "axios";
// import Auth from "../../util/Auth";
import "./ProfilePage.scss";
import { headersToken } from "../../lib/headers";
import ChangePassword from "./ChangePassword";
import Register from "../LoginRegister/Register";
import MyBookings from "./MyBookings";

const ProfilePage = (props) => {
  const { state } = props?.location
  const { token, preSelection } = state || {}
  const [userData, setUserData] = useState();

  useEffect(() => {
    const getProfileData = async () => {
      try {
        const response = await axios.get("/api/profile/", token ? {
          headers: { Authorization: `Bearer ${token}` },
        } : headersToken);
        setUserData(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    getProfileData();
  }, []);
  
  const [selected, setSelected] = useState(preSelection || "myBookings");

  if (!userData) return null;

  return (
    <div id="ProfilePage">
      <div className="top-banner">
        <h2 className="title has-text-weight-bold is-size-2 mb-0">
          {userData.first_name}
          {"'s"} Profile
        </h2>
      </div>
      <section className="section outer-container pt-6 pr-6 pl-6 pb-6 has-background-dark">
        <div className="sidebar">
          <aside className="menu">
            <p className="menu-label">Profile Settings</p>
            <ul className="menu-list">
              <li>
                <a
                  id="contactDetails"
                  onClick={(e) => setSelected(e.target.id)}
                  className={selected === "contactDetails" ? "selected" : ""}
                >
                  Contact Details
                </a>
              </li>
              <li>
                <a
                  id="password"
                  onClick={(e) => setSelected(e.target.id)}
                  className={selected === "password" ? "selected" : ""}
                >
                  Password
                </a>
              </li>
            </ul>
            <p className="menu-label">Bookings</p>
            <ul className="menu-list">
              <li>
                <a
                  id="myBookings"
                  onClick={(e) => setSelected(e.target.id)}
                  className={selected === "myBookings" ? "selected" : ""}
                >
                  My Bookings
                </a>
              </li>
            </ul>
          </aside>
        </div>
        <div className="main-body">
          {selected === "contactDetails" && (
            <Register currentPage="ProfilePage" userData={userData} />
          )}
          {selected === "password" && <ChangePassword />}
          {selected === "myBookings" && <MyBookings userData={userData} />}
        </div>
      </section>
    </div>
  );
};

export default ProfilePage;
