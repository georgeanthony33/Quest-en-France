import React from "react";
import { Link } from "react-router-dom";
import HomesImage6 from "../../assets/HomesImages/HomesImage6.jpg";
import HomesImage7 from "../../assets/HomesImages/HomesImage7.jpg";
import HomesImage8 from "../../assets/HomesImages/HomesImage8.jpg";
import config from "../../util/Config";

import "./SearchCard.scss";

const SearchCard = (props) => {
  const { site, plot, pull_out_bed, veranda, tv, bedrooms } = props.home;
  const {
    checkin,
    checkout,
    adults,
    kids,
    chosenSite,
    totalPrice,
    bookingId,
    home,
    currentPage,
  } = props;

  const siteName = site.name;
  const siteSlug =
    chosenSite &&
    config.siteCodes.filter((site) => site.name === chosenSite)[0].url;

  const bookingSlug = `${
    config.siteCodes.filter((site) => site.name === siteName)[0].url
  }-${plot}-${bookingId}`;

  const imageURL =
    siteName === "Calico Park"
      ? HomesImage8
      : veranda === "Semi-covered"
        ? HomesImage6
        : HomesImage7;

  return (
    <Link
      id="SearchCard"
      to={
        currentPage === "SearchPage"
          ? {
              pathname: `bookHome/${siteSlug}/${plot}`,
              state: {
              checkin,
              checkout,
              adults,
              kids,
              chosenSite,
              home,
              totalPrice,
            },
            }
          : {
              pathname: `mybooking/${bookingSlug}`,
              // state: { checkin, checkout, booking_date, home, booking_date },
            }
      }
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
            {siteName}, Plot {plot}
          </p>
          {pull_out_bed > 0 && currentPage === "SearchPage" && (
            <p>Pull out bed</p>
          )}
          {tv !== 0 && currentPage === "SearchPage" && (
            <p>Television included</p>
          )}
          {currentPage === "MyBookings" && `${checkin} to ${checkout}`}
          <p className="search-card-title">Total Price: £{totalPrice}</p>
        </div>
      </div>
    </Link>
  );
};

export default SearchCard;
