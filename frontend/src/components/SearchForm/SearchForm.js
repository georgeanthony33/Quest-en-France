import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import helperFunctions from "../../util/HelperFunctions";
import config from "../../util/Config";

const SearchForm = (props) => {
  const {
    optionsSelected,
    selectOptionFunctions,
    columnAdjuster,
    currentPage,
    setShowModal,
    totalPrice,
    excludedCheckinDates,
    excludedCheckoutDates,
    bookedDates,
    availabilityMessage
  } = props;

  const { chosenSite, checkin, checkout, adults, kids } = optionsSelected;
  const {
    setChosenSite,
    setCheckin,
    setCheckout,
    setAdults,
    setKids,
  } = selectOptionFunctions;

  const handleCheckin = (checkin) => {
    setCheckin(checkin)
  }

  const { compare, dateDiffInDays } = helperFunctions;

  const [sites, setSites] = useState("");

  useEffect(() => {
    const getSiteData = async () => {
      const sites = await axios.get("/api/sites/");
      const siteData = sites.data.sort(compare);
      setSites(siteData);
    };
    getSiteData();
  }, []);

  const [isActive, setIsActive] = useState("");

  useEffect(() => {
    const handleClickAway = (e) => {
      if (props.currentPage === "BookHome") return;
      if (dropdownNode?.current?.contains(e.target)) return;
      setIsActive("");
    };
    document.addEventListener("click", handleClickAway);
    return () => {
      document.removeEventListener("click", handleClickAway);
    };
  }, [props.currentPage]);

  const dropdownNode = useRef();

  const openModal = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const { includedStartDates, includedEndDates, currentDay, currentMonth, currentYear } = config;

  const validIncludedEndDates = checkin
    ? includedEndDates.filter(
        (date) => dateDiffInDays(new Date(checkin), date) >= 6,
      )
    : includedEndDates;

  if (!sites) return null;

  return (
    <form className="search">
      <h2 className="has-text-weight-bold search-header">
        Book your dream holiday in France or Portugal with Quest en France
      </h2>
      <br />

      {currentPage !== "BookHome" && (
        <div className="columns" id="site-picker-wrapper">
          <div className="field column">
            <label className="label">Where</label>

            <div
              className={`dropdown ${isActive}`}
              ref={dropdownNode}
              onClick={(e) => {
                e.preventDefault();
                !isActive ? setIsActive("is-active") : setIsActive("");
              }}
            >
              <div className="dropdown-trigger">
                <button
                  className="button site-picker"
                  aria-haspopup="true"
                  aria-controls="dropdown-menu"
                >
                  <span>{chosenSite}</span>
                  <span className="icon is-small">
                    <i className="fas fa-angle-down" aria-hidden="true"></i>
                  </span>
                </button>
              </div>
              <div className="dropdown-menu" id="dropdown-menu" role="menu">
                <div className="dropdown-content">
                  {sites.map((site) => (
                    <button
                      className="dropdown-item anchor-button"
                      key={site.id}
                      onClick={() => setChosenSite(site.name)}
                    >
                      {site.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="columns search-dates">
        <div className={`field column ${columnAdjuster} check-in`}>
          <label className="label">Check In</label>
          <div className="control">
            <DatePicker
              className="input"
              selected={checkin}
              onChange={(checkin) => handleCheckin(checkin)}
              dateFormat="d MMMM yyyy"
              name="date"
              required={true}
              includeDates={includedStartDates}
              excludeDates={excludedCheckinDates}
              highlightDates={bookedDates}
              minDate={new Date(currentYear, currentMonth, currentDay + 1)}
            />
          </div>
        </div>
        <div className={`field column ${columnAdjuster}`}>
          <label className="label">Check Out</label>
          <div className="control">
            <DatePicker
              className="input"
              selected={checkout}
              onChange={(checkout) => setCheckout(checkout)}
              dateFormat="d MMMM yyyy"
              name="date"
              required={true}
              includeDates={validIncludedEndDates}
              excludeDates={excludedCheckoutDates}
              highlightDates={bookedDates}
              minDate={new Date(currentYear, currentMonth, currentDay + 7)}
            />
          </div>
        </div>
      </div>

      {availabilityMessage && (
        <div className="notification error-message is-danger is-light">
          <span class="icon has-text-warning">
            <i class="fas fa-exclamation-triangle"></i>
          </span>{availabilityMessage}
        </div>
      )}

      <div className="columns guest-numbers">
        <div className={`field column ${columnAdjuster} adults`}>
          <label className="label">Adults</label>
          <div className="control">
            <input
              className="input"
              type="number"
              name="adults"
              value={adults}
              onChange={(e) => setAdults(e.target.value)}
              placeholder="Choose site"
            />
          </div>
        </div>
        <div className={`field column ${columnAdjuster}`}>
          <label className="label">Kids</label>
          <div className="control">
            <input
              className="input"
              type="number"
              name="kids"
              value={kids}
              onChange={(e) => setKids(e.target.value)}
              placeholder="Choose site"
            />
          </div>
        </div>
      </div>

      {currentPage === "SearchPage" ? null : currentPage === "BookHome" ? (
        <div className="book-home-submit">
          <div className="total-price">
            <p>
              <strong>Total</strong>
            </p>
            <p>
              <strong>£{totalPrice}</strong>
            </p>
          </div>
          <input
            className="button is-danger book-home-button"
            type="submit"
            value="Book"
            disabled={availabilityMessage}
            onClick={(e) => openModal(e)}
          />
        </div>
      ) : (
        <div className="home-submit">
          <Link
            to={{
              pathname: "/search",
              state: { checkin, checkout, adults, kids, chosenSite },
            }}
          >
            <input className="button is-danger" type="submit" value="Search" />
          </Link>
        </div>
      )}
    </form>
  );
};

export default SearchForm;
