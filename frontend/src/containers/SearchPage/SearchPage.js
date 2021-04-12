import React, { useState, useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import SearchForm from "../../components/SearchForm/SearchForm";
import SearchCard from "../../components/SearchCard/SearchCard";
import "./SearchPage.scss";

const SearchPage = (props) => {
  const searchParameters = props.location.state;
  const [chosenSite, setChosenSite] = useState(
    searchParameters.chosenSite || "Choose a site",
  );
  const [checkin, setCheckin] = useState(
    searchParameters.checkin || new Date().setDate(new Date().getDate() + 1),
  );
  const [checkout, setCheckout] = useState(
    searchParameters.checkout || new Date().setDate(new Date().getDate() + 7),
  );
  const [adults, setAdults] = useState(searchParameters.adults || 1);
  const [kids, setKids] = useState(searchParameters.kids || 0);

  // const [homesData, setHomesData] = useState();
  const [filteredHomesData, setFilteredHomesData] = useState();

  useEffect(() => {
    const getHomesData = async () => {
      const homesData = await axios.get("/api/homes/");
      // setHomesData(homesData.data);
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
      console.log(filteredHomesData);
      setFilteredHomesData(filteredHomesData);
    };
    getHomesData();
  }, [chosenSite, checkin, checkout]);

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
      <section className="section main-body p-6">
        {/* <div className="container"> */}
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
            />
          ))}
        </div>
        {/* <h1 className="title has-text-weight-bold is-size-2">Hello</h1>
          <div className="columns is-mobile is-multiline"></div> */}
        {/* </div> */}
      </section>
    </div>
  );
};

export default SearchPage;
