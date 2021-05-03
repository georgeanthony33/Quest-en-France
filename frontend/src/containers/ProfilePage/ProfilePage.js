import React, { useEffect, useState } from "react";
import axios from "axios";
// import Auth from "../../util/Auth";
import "./ProfilePage.scss";
import { headersToken } from "../../lib/headers";
import ChangePassword from "./ChangePassword";

const ProfilePage = () => {
  const [userData, setUserData] = useState();

  useEffect(() => {
    const getProfileData = async () => {
      try {
        const response = await axios.get("/api/profile/", headersToken);
        setUserData(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    getProfileData();
  }, []);

  const [selected, setSelected] = useState("contact_details");

  return (
    <div id="ProfilePage">
      <div className="top-banner">
        <h2 className="title has-text-weight-bold is-size-2 mb-0">
          {userData && userData.first_name}
          {"'s"} Profile
        </h2>
      </div>
      <section className="section outer-container pt-6 pr-6 pl-6 pb-0 has-background-dark">
        <div className="sidebar">
          <aside className="menu">
            <p className="menu-label">Profile Settings</p>
            <ul className="menu-list">
              <li>
                <a
                  id="contact_details"
                  onClick={(e) => setSelected(e.target.id)}
                  className={selected === "contact_details" ? "selected" : ""}
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
                  id="my_bookings"
                  onClick={(e) => setSelected(e.target.id)}
                  className={selected === "my_bookings" ? "selected" : ""}
                >
                  My Bookings
                </a>
              </li>
            </ul>
          </aside>
        </div>
        <div className="main-body">
          {selected === "contact_details" && <div></div>}
          {selected === "password" && <ChangePassword />}
        </div>
      </section>
    </div>
  );
};

export default ProfilePage;
