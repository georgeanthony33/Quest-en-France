import React from "react";
import "../../containers/SearchPage/SearchPage.scss";
import FullVeranda from "../../assets/FranceHomes/FranceHomes8.jpg";

const SearchCard = () => (
  <div id="SearchCard" className="container">
    <div className="image-container">
      <img alt="full veranda" src={FullVeranda} />
    </div>
    <div className="body">
      <h2>Home name</h2>
      <p>Site Plot</p>
      <p>Site description</p>
    </div>
  </div>
);

export default SearchCard;
