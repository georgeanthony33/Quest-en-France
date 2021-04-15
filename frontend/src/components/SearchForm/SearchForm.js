import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import helperFunctions from "../../util/HelperFunctions";

const SearchForm = (props) => {
  const { optionsSelected, selectOptionFunctions, columnAdjuster } = props;
  const { chosenSite, checkin, checkout, adults, kids } = optionsSelected;
  const {
    setChosenSite,
    setCheckin,
    setCheckout,
    setAdults,
    setKids,
  } = selectOptionFunctions;

  const [sites, setSites] = useState("");

  useEffect(() => {
    const getSiteData = async () => {
      const sites = await axios.get("/api/sites/");
      const siteData = sites.data.sort(helperFunctions.compare);
      setSites(siteData);
    };
    getSiteData();
  }, []);

  const [isActive, setIsActive] = useState("");

  useEffect(() => {
    document.addEventListener("click", handleClickAway);
    return () => {
      document.removeEventListener("click", handleClickAway);
    };
  }, []);

  const handleClickAway = (e) => {
    if (dropdownNode.current.contains(e.target)) return;
    setIsActive("");
  };

  const dropdownNode = useRef();

  const getDaysArray = function (start, end) {
    const endDate = new Date(end);
    var currentDate = new Date(start);
    var arr = [];
    while (currentDate <= endDate) {
      arr.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }
    return arr;
  };

  const currentYear = new Date().getFullYear();

  const includedStartDates = [
    ...getDaysArray(new Date(currentYear, 4, 2), new Date(currentYear, 8, 7)),
    ...getDaysArray(
      new Date(currentYear + 1, 4, 2),
      new Date(currentYear + 1, 8, 7),
    ),
  ];

  const includedEndDates = [
    ...getDaysArray(new Date(currentYear, 4, 6), new Date(currentYear, 8, 11)),
    ...getDaysArray(
      new Date(currentYear + 1, 4, 2),
      new Date(currentYear + 1, 8, 12),
    ),
  ];

  if (!sites) return null;

  return (
    <form className="search">
      <h2 className="has-text-weight-bold search-header">
        Book your dream holiday in France or Portugal with Quest en France
      </h2>
      <br />

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

      <div className="columns search-dates">
        <div className={`field column ${columnAdjuster} check-in`}>
          <label className="label">Check In</label>
          <div className="control">
            <DatePicker
              className="input"
              selected={checkin}
              onChange={(checkin) => setCheckin(checkin, "checkin")}
              dateFormat="d MMMM yyyy"
              name="date"
              required={true}
              includeDates={includedStartDates}
            />
          </div>
        </div>
        <div className={`field column ${columnAdjuster}`}>
          <label className="label">Check Out</label>
          <div className="control">
            <DatePicker
              className="input"
              selected={checkout}
              onChange={(checkout) => setCheckout(checkout, "checkout")}
              dateFormat="d MMMM yyyy"
              name="date"
              required={true}
              includeDates={includedEndDates}
            />
          </div>
        </div>
      </div>

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
    </form>
  );
};

export default SearchForm;
