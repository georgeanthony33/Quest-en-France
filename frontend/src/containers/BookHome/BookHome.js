import React, { useState, useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";
import Modal from 'react-modal';
import config from "../../util/Config";
import SearchForm from "../../components/SearchForm/SearchForm";
import Carousel from "../../components/Carousel/Carousel";
import HomeCard from "../../components/HomeCard/HomeCard";
import Stripe from "../../components/Stripe/Stripe";
import ContactCard from "../../components/ContactCard/ContactCard";
import { Link } from "react-router-dom";

import "./BookHome.scss";

const BookHome = (props) => {
  const { site, plot, pull_out_bed, veranda, tv, bedrooms, home_type } = props.location.state.home;
  const { name: siteName, country: siteCountry, short_description: siteShort_description, id: siteId } = site
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

  const [showModal, setShowModal] = useState(false)

  const modalStyles = {
    content : {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      border: 'none',
      background: 'none',
      width: '50%',
      'max-width': '500px',
      'min-width': '320px',
      overflow: 'visible',
      padding: '0,'
    }
  };
  
  return (
    <div id="BookHome">
      <Modal 
        isOpen={showModal}
        onRequestClose={() => setShowModal(false)}
        style={modalStyles}
      >
        <Stripe setShowModal={setShowModal} home={props.location.state.home} searchParameters={searchParameters} {...props}/>
      </Modal>
      <div className="top-banner">
        <h2 className="title has-text-weight-bold is-size-2 mb-0">
          Book your home
        </h2>
      </div>
      <section className="section main-body pt-6 pr-6 pl-6 pb-0">
        <div className="booking-sidebar">
          <SearchForm
            optionsSelected={{ chosenSite, checkin, checkout, adults, kids }}
            totalPrice={searchParameters.totalPrice}
            selectOptionFunctions={{
              setChosenSite,
              setCheckin,
              setCheckout,
              setAdults,
              setKids,
            }}
            columnAdjuster="is-full"
            currentPage={"BookHome"}
            setShowModal={setShowModal}
          />
        </div>
        <div className="booking-info pl-6 pr-6">
          <h3 className="title is-3">{bedrooms} Bed Mobile with {veranda} Veranda</h3>
          <h5 className="subtitle is-5">{siteName}, {siteCountry}</h5>
          <div className="carousel">
            <Carousel
              items={config.homesImages.map((image, index) => (
                <HomeCard key={index} {...image} />
              ))}
              responsive={{
                0: { items: 1 },
              }}
              autoPlay
            />
          </div>
          <p className="block">This {bedrooms} bed mobile home comes with a {veranda} veranda and is set in the fantastic {siteName} campsite.</p>
          <hr />
          <div className="block content">
            <h4 className="title is-4">{siteName}</h4>
            <p>{siteShort_description}</p>
            <p>Further details on the campsite can be found <Link target="_blank" to={{ pathname: `/sites/${siteId}`}}><strong>here</strong></Link></p>
          </div>
          <hr />
          <div className="block">
            <h4 className="title is-4">Details</h4>
            <div className="columns">
              <div className="column is-half-desktop is-full-mobile">
                <p><strong>Home Type: </strong>{home_type}</p>
                <p><strong>Plot:</strong> {plot}</p>
                <p><strong>Bedrooms:</strong> {bedrooms}</p>
              </div>
              <div className="column is-half-desktop is-full-mobile">
                <p><strong>Veranda:</strong> {veranda}</p>
                {pull_out_bed ? <p><strong>Pull out bed</strong></p> : null}
                {tv ? <p><strong>Television included</strong></p> : null}
              </div>
            </div>
            <p>Further details on the mobile home and its inventory can be found <Link target="_blank" to={{ pathname: "/homes", state: { siteCountry } }}><strong>here</strong></Link></p>
          </div>
          <hr />
          <ContactCard />
        </div>
      </section>
    </div>
  );
};

export default BookHome;
