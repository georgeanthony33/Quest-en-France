import React from "react";
import "./HomeCard.scss";

const HomeCard = ({ image, homeType, room, text }) => {
  return (
    <div id="HomeCard" className="homecard-container">
      <img src={image} className="alice-image" alt={room || text} />
      <div className="homecard-text-container columns is-vcentered">
        <div className="column">
          <p className="has-text-centered has-text-white is-uppercase is-size-6">
            {homeType}
          </p>
          <h3 className="has-text-centered has-text-white is-size-4">
            {room || text}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
