import React, { useState, useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import SiteCard from "../../components/SiteCard/SiteCard";
import "./AllSitesPage.scss";
import helperFunctions from "../../util/HelperFunctions";

const AllSitesPage = () => {
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
    <div id="AllSitesPage">
      <div className="top-banner">
        <h2 className="title has-text-weight-bold is-size-2 mt-4 mb-4">
          Explore our sites
        </h2>
        <h3 className="has-text-weight-bold mb-2">
          Book your dream holiday in one of our 3 prestigious mobile sites in
          France or Portugal.
        </h3>
      </div>

      <section className="section main-section">
        <div className="container">
          {/* <h1 className="title has-text-weight-bold is-size-2">Explore our sites</h1>
        <h2 className="has-text-weight-bold AllSitesPage">Book your dream holiday in one of our 3 prestigious mobile sites in France or Portugal.</h2> */}
          <div className="columns is-mobile is-multiline">
            {sites.map((site) => (
              <SiteCard key={site.id} {...site} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllSitesPage;
