import React from "react";
import { Link } from "react-router-dom";
import "../../containers/SearchPage/SearchPage.scss";
import HomesImage6 from "../../assets/HomesImages/HomesImage6.jpg";
import HomesImage7 from "../../assets/HomesImages/HomesImage7.jpg";
import HomesImage8 from "../../assets/HomesImages/HomesImage8.jpg";
import config from "../../util/Config";

import "./SearchCard.scss";

const SearchCard = (props) => {
  const { site, plot, pull_out_bed, veranda, tv, bedrooms } = props.home;
  const { checkin, checkout, adults, kids, chosenSite, totalPrice } = props;

  const siteSlug = config.siteCodes.filter(
    (site) => site.name === chosenSite,
  )[0].url;

  const imageURL =
    site.name === "Calico Park"
      ? HomesImage8
      : veranda === "Semi-covered"
        ? HomesImage6
        : HomesImage7;

  return (
    <Link
      id="SearchCard"
      to={{
        pathname: `bookHome/${siteSlug}/${plot}`,
        state: { checkin, checkout, adults, kids, chosenSite },
      }}
    >
      <div id="SearchCard" className="container">
        <div className="image-container mr-4">
          <img alt="full veranda" src={imageURL} />
        </div>
        <div className="body">
          <h2 className="search-card-title">
            {bedrooms} Bed Mobile with {veranda} Veranda
          </h2>
          <p>
            {site.name}, Plot {plot}
          </p>
          {pull_out_bed > 0 && <p>Pull out bed</p>}
          {tv !== 0 && <p>Television included</p>}
          <p className="search-card-title">Total Price: £ {totalPrice}</p>
        </div>
      </div>
    </Link>
  );
};

export default SearchCard;
