import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import "react-alice-carousel/lib/alice-carousel.css";
import HomesFrance from "./HomesFrance";
import HomePortugal from "./HomePortugal";
import config from "../../util/Config";

import "./Homes.scss";

const Homes = (props) => {
  const siteCountry = props?.location?.state?.siteCountry && props.location.state.siteCountry;
  const [selectedTab, setSelectedTab] = useState(siteCountry || "France");

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

      {selectedTab === "France" && <HomesFrance images={config.homesImages} />}
      {selectedTab === "Portugal" && (
        <HomePortugal images={config.homesPortugal} />
      )}
    </div>
  );
};

export default Homes;
