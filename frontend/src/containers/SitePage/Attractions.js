import React from "react";
import config from "../../util/Config";

import attraction1LODO from "../../assets/SiteAttractions/LODO/attraction1.jpg";
import attraction2LODO from "../../assets/SiteAttractions/LODO/attraction2.jpg";
import attraction3LODO from "../../assets/SiteAttractions/LODO/attraction3.jpg";
import attraction4LODO from "../../assets/SiteAttractions/LODO/attraction4.jpg";
import attraction5LODO from "../../assets/SiteAttractions/LODO/attraction5.jpg";
import attraction6LODO from "../../assets/SiteAttractions/LODO/attraction6.jpg";

import attraction1LG from "../../assets/SiteAttractions/LG/attraction1.jpg";
import attraction2LG from "../../assets/SiteAttractions/LG/attraction2.jpg";
import attraction3LG from "../../assets/SiteAttractions/LG/attraction3.jpg";
import attraction4LG from "../../assets/SiteAttractions/LG/attraction4.jpg";
import attraction5LG from "../../assets/SiteAttractions/LG/attraction5.jpg";
import attraction6LG from "../../assets/SiteAttractions/LG/attraction6.jpg";

import attraction1CP from "../../assets/SiteAttractions/CP/attraction1.jpg";
import attraction2CP from "../../assets/SiteAttractions/CP/attraction2.jpg";
import attraction3CP from "../../assets/SiteAttractions/CP/attraction3.jpg";
import attraction4CP from "../../assets/SiteAttractions/CP/attraction4.jpg";
import attraction5CP from "../../assets/SiteAttractions/CP/attraction5.jpg";
import attraction6CP from "../../assets/SiteAttractions/CP/attraction6.jpg";

const imageKeys = {
  attraction1LODO: attraction1LODO,
  attraction2LODO: attraction2LODO,
  attraction3LODO: attraction3LODO,
  attraction4LODO: attraction4LODO,
  attraction5LODO: attraction5LODO,
  attraction6LODO: attraction6LODO,
  attraction1LG: attraction1LG,
  attraction2LG: attraction2LG,
  attraction3LG: attraction3LG,
  attraction4LG: attraction4LG,
  attraction5LG: attraction5LG,
  attraction6LG: attraction6LG,
  attraction1CP: attraction1CP,
  attraction2CP: attraction2CP,
  attraction3CP: attraction3CP,
  attraction4CP: attraction4CP,
  attraction5CP: attraction5CP,
  attraction6CP: attraction6CP,
};

const Attractions = (props) => {
  const site = props.site;
  const siteCode = config.siteCodes.filter((el) => el.name === site.name)[0]
    .key;

  return (
    <div id="Attractions" className="columns">
      <div className="container">
        <div className="columns is-mobile is-multiline is-centered">
          {site.attractions.map((attraction, index) => (
            <div
              key={index}
              className="column is-one-third-desktop is-half-tablet is-full-mobile"
            >
              <div className="card card-border">
                <div className="card-header">
                  <h4 className="card-header-title">{attraction.name}</h4>
                </div>
                <div className="card-image">
                  <figure className="image">
                    <img
                      src={imageKeys[`${attraction.image}${siteCode}`]}
                      alt={attraction.name}
                    />
                  </figure>
                </div>
                <div className="card-content">
                  <h5 className="title is-6">{attraction.description}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Attractions;
