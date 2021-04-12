import React, { useState, useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import SiteCard from "../../components/SiteCard/SiteCard";
import Carousel from "../../components/Carousel/Carousel";
import HomeCard from "../../components/HomeCard/HomeCard";
import "./LandingPage.scss";
import helperFunctions from "../../util/HelperFunctions";
import SearchForm from "../../components/SearchForm/SearchForm";
import config from "../../util/Config";

const LandingPage = () => {
  const [chosenSite, setChosenSite] = useState("Choose a site");
  const [checkin, setCheckin] = useState(
    new Date().setDate(new Date().getDate() + 1),
  );
  const [checkout, setCheckout] = useState(
    new Date().setDate(new Date().getDate() + 7),
  );
  const [adults, setAdults] = useState(1);
  const [kids, setKids] = useState(0);

  const [sites, setSites] = useState("");
  const [reviews, setReviews] = useState("");
  const [homeImages, setHomeImages] = useState();

  useEffect(() => {
    const getSiteData = async () => {
      const sites = await axios.get("/api/sites/");
      const siteData = sites.data.sort(helperFunctions.compare);
      setSites(siteData);
    };

    const getReviewData = async () => {
      const reviews = await axios.get("/api/sites/reviews/");
      const reviewData = reviews.data.sort(helperFunctions.compare);
      setReviews(reviewData);
    };

    const getHomeImages = async () => {
      const homeImagesData = await axios.get("/api/home_images/");
      setHomeImages(homeImagesData.data);
    };

    getSiteData();
    getReviewData();
    getHomeImages();
  }, []);

  if (!sites || !reviews || !homeImages) return null;

  return (
    <div id="LandingPage">
      <section className="top-outer-container">
        <div className="top-inner-container columns">
          <SearchForm
            optionsSelected={{ chosenSite, checkin, checkout, adults, kids }}
            selectOptionFunctions={{
              setChosenSite,
              setCheckin,
              setCheckout,
              setAdults,
              setKids,
            }}
            columnAdjuster="is-half"
          />
        </div>
      </section>

      <section className="section has-background-white">
        <div className="container">
          <h1 className="title has-text-weight-bold is-size-2">
            Explore our sites
          </h1>
          <div className="columns is-mobile is-multiline">
            {sites.map((site) => (
              <SiteCard key={site.id} {...site} />
            ))}
          </div>
        </div>
      </section>

      <section className="section has-background-light">
        <div className="container">
          <h2 className="has-text-weight-bold">
            We have a selection of 2 and 3 bedroomed modern cottage style mobile
            homes with either open or semi-covered verandas. The 2 bedroomed
            homes will accommodate between 4-6 people as the lounge seating area
            can convert to a bed that sleeps up to 2 people. The 3 bedroomed
            homes will accommodate 6 people.
          </h2>
          <br />
          <div className="carousel">
            <Carousel
              items={config.homesImages.map((image, index) => (
                <HomeCard key={index} {...image} />
              ))}
              responsive={{
                0: { items: 1 },
                768: { items: 2 },
                992: { items: 3 },
              }}
              autoPlay
            />
          </div>
          <br />
          <div className="container columns is-centered explore-homes-btn-wrapper">
            <a href="/homes">
              <button className="button is-danger is-medium" id="red-button">
                Explore our homes
              </button>
            </a>
          </div>
        </div>
      </section>

      <section className="section has-background-white">
        <div className="container">
          <h1 className="title has-text-weight-bold is-size-2">
            What others say...
          </h1>
          <div className="columns is-mobile is-multiline">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="column is-one-third-desktop is-one-half-tablet is-full-mobile"
              >
                <div className="card card-border has-background-light curved-corners">
                  <div className="card-content reviews">
                    <div className="quotations"></div>
                    <h5 className="title is-6">{review.text}</h5>
                  </div>
                  <div className="card-header">
                    <h4 className="card-header-title">{review.name}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
