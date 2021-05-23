import React, { useState, useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import SearchForm from "../../components/SearchForm/SearchForm";
import SearchCard from "../../components/SearchCard/SearchCard";
import config from "../../util/Config";

import "./SearchPage.scss";

const SearchPage = (props) => {
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
    let priceInfoForAllDays = [];
    const checkinDate = new Date(checkin);
    const checkoutDate = new Date(checkout);
    const checkinYear = checkinDate.getFullYear();
    const chosenYearPrices = config.prices.map((el) => {
      const updatedDate = new Date(el.weekCommencing.setFullYear(checkinYear));
      return { ...el, weekCommencing: updatedDate };
    });

    for (
      let date = checkinDate;
      date <= checkoutDate;
      date.setDate(date.getDate() + 1)
    ) {
      const allPriceInfoForDay = chosenYearPrices
        .filter((el) => el.weekCommencing <= date)
        .slice(-1)[0];
      priceInfoForAllDays.push(allPriceInfoForDay);
    }
    priceInfoForAllDays.pop()

    const totalPrices = {
      2: priceInfoForAllDays.reduce((totalPrice, day) => totalPrice + day[2], 0),
      3: priceInfoForAllDays.reduce((totalPrice, day) => totalPrice + day[3], 0),
    }
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
              totalPrice={totalPrices[home.bedrooms]}
              currentPage="SearchPage"
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default SearchPage;
