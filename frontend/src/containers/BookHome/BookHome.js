import React, { useState, useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import config from "../../util/Config";
import SearchForm from "../../components/SearchForm/SearchForm";
import Carousel from "../../components/Carousel/Carousel";
import HomeCard from "../../components/HomeCard/HomeCard";

import "./BookHome.scss";

const BookHome = (props) => {
  const searchParameters = props.location.state;

  const [chosenSite, setChosenSite] = useState(
    searchParameters?.chosenSite || "Choose a site",
  );
  const [checkin, setCheckin] = useState(
    searchParameters?.checkin || new Date().setDate(new Date().getDate() + 1),
  );
  const [checkout, setCheckout] = useState(
    searchParameters?.checkout || new Date().setDate(new Date().getDate() + 7),
  );
  const [adults, setAdults] = useState(searchParameters?.adults || 1);
  const [kids, setKids] = useState(searchParameters?.kids || 0);

  
  const [site, setSite] = useState("");
  const { siteSlug } = props.match.params;
  
  useEffect(() => {
    const siteId = config.siteCodes.filter((site) => site.url === siteSlug)[0].id;
    const getSiteData = async (id) => {
      const siteData = await axios.get(`/api/sites/${id}/`);
      setSite(siteData.data);
    };
    getSiteData(siteId);
  }, [siteSlug]);

  return (
    <div id="BookHome">
      <div className="top-banner">
        <h2 className="title has-text-weight-bold is-size-2 mb-0">
          Book your home
        </h2>
        <h2 className="title has-text-weight-bold is-size-4 banner-subtitle">
          {site.name}
        </h2>
      </div>
      <section className="section main-body pt-6 pr-6 pl-6 pb-0">
        <div className="booking-sidebar">
          <SearchForm
            optionsSelected={{ chosenSite, checkin, checkout, adults, kids }}
            selectOptionFunctions={{
              setChosenSite,
              setCheckin,
              setCheckout,
              setAdults,
              setKids,
            }}
            columnAdjuster="is-full"
            currentPage={"BookHome"}
          />
        </div>
        <div className="booking-info">
          <div className="carousel">
            <Carousel
              items={config.homesImages.map((image, index) => (
                <HomeCard key={index} {...image} />
              ))}
              responsive={{
                0: { items: 1 },
                // 768: { items: 2 },
                // 992: { items: 3 },
              }}
              // autoPlay
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookHome;
