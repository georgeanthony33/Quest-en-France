import React from "react";
import { Link } from "react-router-dom";
import "../../containers/SearchPage/SearchPage.scss";
import HomesImage7 from "../../assets/HomesImages/HomesImage7.jpg";
import config from "../../util/Config";

const SearchCard = (props) => {
  const { home_type, site, plot, pull_out_bed, veranda, tv } = props.home;
  const { checkin, checkout, adults, kids, chosenSite } = props;

  const siteSlug = config.siteCodes.filter(
    (site) => site.name === chosenSite,
  )[0].url;

  console.log(new Date(Object.keys(config.prices)[0]));
  console.log(new Date(config.pricesTwo[0].weekCommencing));

  return (
    <Link
      to={{
        pathname: `bookHome/${siteSlug}/${plot}`,
        state: { checkin, checkout, adults, kids, chosenSite },
      }}
    >
      <div id="SearchCard" className="container">
        <div className="image-container">
          <img alt="full veranda" src={HomesImage7} />
        </div>
        <div className="body">
          <h2>{home_type}</h2>
          <p>
            {site.name}, Plot {plot}
          </p>
          {pull_out_bed > 0 && <p>Pull out bed</p>}
          {tv && <p>Television included</p>}
          <p>{veranda} veranda</p>
        </div>
      </div>
    </Link>
  );
};

export default SearchCard;
