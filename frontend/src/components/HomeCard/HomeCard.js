import React from "react";
import "../../containers/Homes/Homes.scss";

const HomeCard = ({ image, homeType, room }) => (
  <div id="HomeCard" className="homecard-container">
    <img src={image} className="alice-image" alt={room} />
    <div className="homecard-text-container columns is-vcentered">
      <div className="column">
        <p className="has-text-centered has-text-white is-uppercase is-size-6">
          {homeType}
        </p>
        <h3 className="has-text-centered has-text-white is-size-4">{room}</h3>
      </div>
    </div>
  </div>
);

export default HomeCard;
