import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import Details from "./Details";
import Gallery from "./Gallery";
import Location from "./Location";
import Attractions from "./Attractions";
import helperFunctions from "../../util/HelperFunctions";
import config from "../../util/Config";

import "./SitePage.scss";

const Site = (props) => {
  const [site, setSite] = useState("");
  const [siteID, setSiteID] = useState("");

  const { dateDiffInDays, defaultCheckin, weekAfterDate } = helperFunctions;
  const [checkin, setCheckin] = useState(defaultCheckin());
  const [checkout, setCheckout] = useState(weekAfterDate(defaultCheckin()));
  useEffect(() => {
    if ((new Date(checkout) - new Date(checkin)) / (1000 * 3600 * 24) < 6) {
      setCheckout(new Date(weekAfterDate(checkin)));
    }
  }, [checkin]);

  const {
    includedStartDates,
    includedEndDates,
    currentDay,
    currentMonth,
    currentYear,
  } = config;
  const validIncludedEndDates = checkin
    ? includedEndDates.filter(
        (date) => dateDiffInDays(new Date(checkin), date) >= 6,
      )
    : includedEndDates;

  const [adults, setAdults] = useState(1);
  const [kids, setKids] = useState(0);
  const [selectedTab, setSelectedTab] = useState("details");

  const [loading, setLoading] = useState(false);

  const getSiteData = async (id) => {
    setLoading(true);
    const siteData = await axios.get(`/api/sites/${id}/`);
    setSite(siteData.data);
  };

  useEffect(() => {
    setLoading(false);
  }, [site]);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
    return () => {
      window.removeEventListener("resize", () =>
        setWindowWidth(window.innerWidth),
      );
    };
  }, []);

  const { slug } = props.match.params;
  if (siteID !== slug) {
    getSiteData(slug);
    setSiteID(slug);
  }

  if (!site) return null;

  return (
    <div id="SitePage">
      <div className="top-banner">
        <h2
          className={`title has-text-weight-bold is-size-2 column mt-0 mb-0 is-${
            windowWidth >= 1145 ? 3 : 5
          }`}
        >
          {site.name}
        </h2>
        <h2
          className={`title has-text-weight-bold is-size-4 column mt-0 mb-0 is-${
            windowWidth >= 1145 ? 9 : 7
          } area`}
          id="check-availability"
        >
          {site.area}, {site.country}
        </h2>
      </div>

      <div className="outer-container">
        <section className={`top-outer-container ${site.name}`}>
          <div className="top-inner-container columns">
            <div className="column is-1" id="mobile-removed" />
            <div className="column is-8">
              <form className="sitepage-search" id={site.name.slice(0, 3)}>
                <h3 className="has-text-weight-bold is-size-5">
                  {site.short_description}
                </h3>
                <br />

                <div className="columns reduce-margin-top">
                  <div className="field column is-half">
                    <label className="label">Check In</label>
                    <div className="control">
                      <DatePicker
                        className="input date-input"
                        selected={checkin}
                        onChange={(checkin) => setCheckin(checkin)}
                        dateFormat="d MMMM yyyy"
                        name="date"
                        required
                        includeDates={includedStartDates}
                        minDate={
                          new Date(currentYear, currentMonth, currentDay + 1)
                        }
                      />
                    </div>
                  </div>
                  <div className="field column is-half">
                    <label className="label">Check Out</label>
                    <div className="control">
                      <DatePicker
                        className="input date-input"
                        selected={checkout}
                        onChange={(checkout) => setCheckout(checkout)}
                        dateFormat="d MMMM yyyy"
                        name="date"
                        required
                        includeDates={validIncludedEndDates}
                        minDate={
                          new Date(currentYear, currentMonth, currentDay + 7)
                        }
                      />
                    </div>
                  </div>
                </div>

                <div className="columns reduce-margin-top">
                  <div className="field column is-half">
                    <label className="label">Adults</label>
                    <div className="control">
                      <input
                        className="input"
                        type="number"
                        name="adults"
                        id="guests-input"
                        value={adults}
                        onChange={(e) => setAdults(e.target.value)}
                        placeholder="Choose site"
                      />
                    </div>
                  </div>
                  <div className="field column is-half">
                    <label className="label">Kids</label>
                    <div className="control">
                      <input
                        className="input"
                        type="number"
                        name="kids"
                        id="guests-input"
                        value={kids}
                        onChange={(e) => setKids(e.target.value)}
                        placeholder="Choose site"
                      />
                    </div>
                  </div>
                </div>
                <div className="check-availability">
                  <Link
                    to={{
                      pathname: "/search",
                      state: {
                        checkin,
                        checkout,
                        adults,
                        kids,
                        chosenSite: site.name,
                      },
                    }}
                  >
                    <input
                      className="button is-danger"
                      type="submit"
                      value="Check Availability"
                      id="details red-button"
                    />
                  </Link>
                </div>
              </form>
            </div>
            <div className="column is-3" id="mobile-removed" />
          </div>
        </section>

        <nav className="is-size-5 navbar">
          <button
            className={`anchor-button ${
              selectedTab === "details" && "tab-open"
            }`}
            id="details"
            onClick={(e) => setSelectedTab(e.target.id)}
          >
            Details
          </button>
          <button
            className={`anchor-button ${
              selectedTab === "gallery" && "tab-open"
            }`}
            id="gallery"
            onClick={(e) => setSelectedTab(e.target.id)}
          >
            Gallery
          </button>
          <button
            className={`anchor-button ${
              selectedTab === "attractions" && "tab-open"
            }`}
            id="attractions"
            onClick={(e) => setSelectedTab(e.target.id)}
          >
            Attractions
          </button>
          <button
            className={`anchor-button ${
              selectedTab === "location" && "tab-open"
            }`}
            id="location"
            onClick={(e) => setSelectedTab(e.target.id)}
          >
            Location
          </button>
        </nav>

        <section className="section has-background-white p-6">
          <div className="tab-container pl-6 pr-6">
            {selectedTab === "details" && <Details site={site} />}
            {selectedTab === "gallery" && (
              <Gallery site={site} loading={loading} />
            )}
            {selectedTab === "attractions" && <Attractions site={site} />}
            {selectedTab === "location" && <Location site={site} />}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Site;
