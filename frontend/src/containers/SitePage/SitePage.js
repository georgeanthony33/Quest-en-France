import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
// import { Link, withRouter } from "react-router-dom";
// import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Details from "./Details";
import Gallery from "./Gallery";
import Location from "./Location";
import Attractions from "./Attractions";

import "./SitePage.scss";

const Site = (props) => {
  const [site, setSite] = useState("");
  const [siteID, setSiteID] = useState("");
  const [checkin, setCheckin] = useState(
    new Date().setDate(new Date().getDate() + 1),
  );
  const [checkout, setCheckout] = useState(
    new Date().setDate(new Date().getDate() + 7),
  );
  const [adults, setAdults] = useState(1);
  const [kids, setKids] = useState(0);
  const [selectedTab, setSelectedTab] = useState("details");
  console.log(selectedTab);

  const getSiteData = async (id) => {
    const siteData = await axios.get(`/api/sites/${id}/`);
    setSite(siteData.data);
  };

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
                  <input
                    className="button is-danger"
                    type="submit"
                    value="Check Availability"
                    id="details red-button"
                  />
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

        <section className="section has-background-white">
          {selectedTab === "details" && <Details site={site} />}
          {selectedTab === "gallery" && <Gallery site={site} />}
          {selectedTab === "attractions" && <Attractions site={site} />}
          {selectedTab === "location" && <Location site={site} />}
        </section>
      </div>
    </div>
  );
};

export default Site;
