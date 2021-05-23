import React, { useState, useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";
import Modal from "react-modal";
import axios from "axios";
import config from "../../util/Config";
import Carousel from "../../components/Carousel/Carousel";
import HomeCard from "../../components/HomeCard/HomeCard";
import Stripe from "../../components/Stripe/Stripe";
import ContactCard from "../../components/ContactCard/ContactCard";
import { Link, useParams } from "react-router-dom";

import "./BookingStatus.scss";

const BookingStatus = () => {
  const [bookingData, setBookingData] = useState(false);
  const [loading, setLoading] = useState();

  const { bookingSlug } = useParams();
  const bookingId = bookingSlug.split("-")[bookingSlug.split("-").length - 1];

  const getBookingData = async (id) => {
    const bookingData = await axios.get(`/api/bookings/${id}/`);
    setBookingData(bookingData.data);
  };

  useEffect(() => {
    setLoading(true);
    getBookingData(bookingId);
  }, []);

  useEffect(() => {
    bookingData && setLoading(false);
  }, [bookingData]);

  const {
    booking_date,
    home,
    price,
    start_date,
    end_date,
    stripeCustomerId,
    user,
  } = bookingData || {};
  const { first_name, last_name, email } = user || {};
  const { site, plot, pull_out_bed, veranda, tv, bedrooms, home_type } =
    home || {};
  const {
    name: siteName,
    country: siteCountry,
    short_description: siteShort_description,
    id: siteId,
  } = site || {};

  const [showModal, setShowModal] = useState(false);
  const openModal = (e) => {
    e.preventDefault();
    setShowModal(true);
  };
  const modalStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      border: "none",
      background: "none",
      width: "50%",
      "max-width": "500px",
      "min-width": "320px",
      overflow: "visible",
      padding: "0,",
    },
  };

  return (
    <div id="BookingStatus">
      <Modal
        isOpen={showModal}
        onRequestClose={() => setShowModal(false)}
        style={modalStyles}
      >
        <Stripe setShowModal={setShowModal} home={home} />
      </Modal>
      <div className="top-banner">
        <h2 className="title has-text-weight-bold is-size-2 mb-0">
          My Booking
        </h2>
      </div>
      <section className="section main-body pt-6 pr-6 pl-6 pb-0">
        {/* BOOKING STATUS */}
        <div className="booking-status">
          <h3 className="title is-3">Payment Details</h3>
          <p>
            Booking for{" "}
            <strong>
              {first_name} {last_name}
            </strong>
          </p>
          <h5 className="subtitle is-6">
            <i className="far fa-calendar-alt mr-1"></i>
            {start_date} to {end_date}
          </h5>
          <p>
            <strong>Total Price: </strong>£{price}
          </p>
          <p>
            <strong>Status: </strong>
            Paid
          </p>
          <div className="book-home-submit mt-5">
            {/* <div className="total-price">
            <p>
              <strong>Total</strong>
            </p>
            <p>
              <strong>£{totalPrice}</strong>
            </p>
          </div> */}
            <input
              className="button is-danger book-home-button"
              type="submit"
              value="Pay Top-up"
              onClick={(e) => openModal(e)}
            />
          </div>
        </div>

        {/* HOME INFO */}
        <div className="booking-info pl-6 pr-6">
          <h3 className="title is-3">
            {bedrooms} Bed Mobile with {veranda} Veranda
          </h3>
          <h5 className="subtitle is-5">
            {siteName}, {siteCountry}
          </h5>
          <div className="carousel">
            <Carousel
              items={config.homesImages.map((image, index) => (
                <HomeCard key={index} {...image} />
              ))}
              responsive={{
                0: { items: 1 },
              }}
              // autoPlay
            />
          </div>
          <hr />
          <div className="block">
            <h4 className="title is-4">Details</h4>
            <div className="columns">
              <div className="column is-half-desktop is-full-mobile">
                <p>
                  <strong>Home Type: </strong>
                  {home_type}
                </p>
                <p>
                  <strong>Plot:</strong> {plot}
                </p>
                <p>
                  <strong>Bedrooms:</strong> {bedrooms}
                </p>
              </div>
              <div className="column is-half-desktop is-full-mobile">
                <p>
                  <strong>Veranda:</strong> {veranda}
                </p>
                {pull_out_bed ? (
                  <p>
                    <strong>Pull out bed</strong>
                  </p>
                ) : null}
                {tv ? (
                  <p>
                    <strong>Television included</strong>
                  </p>
                ) : null}
              </div>
            </div>
            <p>
              Further details on the mobile home and its inventory can be found{" "}
              <Link
                target="_blank"
                to={{ pathname: "/homes", state: { siteCountry } }}
              >
                <strong>here</strong>
              </Link>
            </p>
          </div>
          <hr />
          <ContactCard />
        </div>
      </section>
    </div>
  );
};

export default BookingStatus;
