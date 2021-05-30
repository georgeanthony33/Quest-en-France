import React, { useState, useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import SearchForm from "../../components/SearchForm/SearchForm";
import SearchCard from "../../components/SearchCard/SearchCard";
import config from "../../util/Config";
import helperFunctions from "../../util/HelperFunctions";

import "./SearchPage.scss";

const SearchPage = (props) => {
  const searchParameters = props.location.state;
  const [chosenSite, setChosenSite] = useState(
    searchParameters?.chosenSite || "Choose a site",
  );

  const { defaultCheckin, weekAfterDate, calculateTotalPrice } = helperFunctions;
  const [checkin, setCheckin] = useState(
    searchParameters?.checkin || defaultCheckin(),
  );
  const [checkout, setCheckout] = useState(
    searchParameters?.checkout || weekAfterDate(defaultCheckin())
  );
  useEffect(() => {
    if ((new Date(checkout) - new Date(checkin)) / (1000 * 3600 * 24) < 6) {
      setCheckout(new Date(weekAfterDate(checkin)));
    }
  }, [checkin]);
  
  const [adults, setAdults] = useState(searchParameters?.adults || 1);
  const [kids, setKids] = useState(searchParameters?.kids || 0);

  const [filteredHomesData, setFilteredHomesData] = useState();
  useEffect(() => {
    const getHomesData = async () => {
      const homesData = await axios.get("/api/homes/");
      const filteredHomesData =
        homesData.data &&
        homesData.data
          .filter((home) => home.site.name === chosenSite)
          .filter(
            (home) =>
              !home.bookings
                .map(
                  (booking) =>
                    new Date(checkin) < new Date(booking.end_date) &&
                    new Date(checkout) > new Date(booking.start_date),
                )
                .includes(true),
          );
      setFilteredHomesData(filteredHomesData);
    };
    getHomesData();
  }, [chosenSite, checkin, checkout]);

  const [totalPrices, setTotalPrices] = useState(null);
  useEffect(() => {
    const totalPrices = calculateTotalPrice(checkin, checkout)
    setTotalPrices(totalPrices)
  }, [checkin, checkout]);

  if (!filteredHomesData) return null;

  return (
    <div id="SearchPage">
      <div className="top-banner">
        <h2 className="title has-text-weight-bold is-size-2 mb-0">
          Search Results
        </h2>
        <h2 className="title has-text-weight-bold is-size-4 banner-subtitle">
          Homes available on your chosen dates
        </h2>
      </div>
      <section className="section main-body pt-6 pr-6 pl-6 pb-0">
        <div className="search-sidebar">
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
            currentPage={"SearchPage"}
          />
        </div>
        <div className="search-results">
          {filteredHomesData.map((home, index) => (
            <SearchCard
              key={index}
              home={home}
              checkin={checkin}
              checkout={checkout}
              adults={adults}
              kids={kids}
              chosenSite={chosenSite}
              totalPrice={Math.round((totalPrices[home.bedrooms] + Number.EPSILON) * 100) / 100}
              currentPage="SearchPage"
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default SearchPage;
