import React, { useState, useEffect } from "react";
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import "react-alice-carousel/lib/alice-carousel.css";
import HomesFrance from "./HomesFrance";
import HomePortugal from "./HomePortugal";

import "./Homes.scss";

const Site = () => {
  const [homeImagesFrance, setHomeImagesFrance] = useState();
  const [homeImagesPortugal, setHomeImagesPortugal] = useState();
  useEffect(() => {
    getHomeImagesFrance();
    getHomeImagesPortugal();
  }, []);

  const getHomeImagesFrance = async () => {
    const homeImagesFranceData = await axios.get("/api/home_images/");
    setHomeImagesFrance(homeImagesFranceData.data);
  };

  const getHomeImagesPortugal = async () => {
    const homeImagesPortugalData = await axios.get("/api/homes_portugal/");
    setHomeImagesPortugal(homeImagesPortugalData.data);
  };

  const [selectedTab, setSelectedTab] = useState("France");

  if (!homeImagesFrance) return null;

  return (
    <div id="Homes" className="">
      <div className="tabs is-fullwidth homes-top-banner is-large">
        <li
          className={selectedTab === "France" && "is-active"}
          onClick={() => setSelectedTab("France")}
        >
          <button className="homes-tabs anchor-button">
            <span>Our homes in France</span>
          </button>
        </li>
        <li
          className={selectedTab === "Portugal" && "is-active"}
          onClick={() => setSelectedTab("Portugal")}
        >
          <button className="homes-tabs anchor-button">
            <span>Our home in Portugal</span>
          </button>
        </li>
      </div>

      {selectedTab === "France" && <HomesFrance images={homeImagesFrance} />}
      {selectedTab === "Portugal" && (
        <HomePortugal images={homeImagesPortugal} />
      )}
    </div>
  );
};

export default Site;
