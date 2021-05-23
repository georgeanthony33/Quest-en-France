import React from "react";
import { ElementsConsumer, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";
import { headers, headersToken } from "../../lib/headers";
import Auth from "../../util/Auth";
import George from "../../components/ContactCard/George.jpg";
import helperFunctions from "../../util/HelperFunctions";

import CardSection from "./CardSection";

const CheckoutForm = (props) => {
  const { stripe, elements, home, searchParameters } = props;
  const {
    id: homeId,
    site,
    plot,
    pull_out_bed,
    veranda,
    tv,
    bedrooms,
    home_type,
  } = home;
  const {
    name: siteName,
    country: siteCountry,
    short_description: siteShort_description,
    id: siteId,
  } = site;
  const { totalPrice, checkin, checkout } = searchParameters;

  const { dateLongToShort, dateLongToISO } = helperFunctions;
  const checkinShort = dateLongToShort(checkin);
  const checkoutShort = dateLongToShort(checkout);
  const checkinISO = dateLongToISO(checkin);
  const checkoutISO = dateLongToISO(checkout);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const userPayload = Auth.getPayload();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    const { paymentMethod, error } = await stripe.createPaymentMethod({
      type: "card",
      card: card,
    });

    try {
      const stripeResponse = await axios.post(
        "/api/bookings/save-stripe-info/",
        {
          email: "test2@test.com",
          payment_method_id: paymentMethod.id,
          total_amount: totalPrice * 100,
          description: `Home ID: ${homeId}, Plot: ${plot}, Site: ${siteName}, Check-in: ${checkinShort}, Check-out: ${checkoutShort}`,
        },
      );
      const { data } = stripeResponse;
      const message = data.message;
      const stripeCustomerId = data.data.customer_id;
      if (message === "Success") {
        const bookingResponse = await axios.post("/api/bookings/", {
          start_date: checkinISO,
          end_date: checkoutISO,
          home: homeId,
          price: totalPrice,
          currency: "GBP",
          stripeCustomerId,
        });
        // props.history.push("/bookingstatus");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <section id="CheckoutForm" className="modal-card-body">
        <div>
          <h6 className="subtitle is-6 m-0">TO</h6>
          <div className="contact">
            <h5 className="title is-5 m-0 mt-1">George Anthony</h5>
            <img src={George} alt="Quest en France Host George" />
          </div>
          <h6 className="subtitle is-6 m-0 mt-3">AMOUNT</h6>
          <h5 className="title is-5 m-0 mt-2">£{totalPrice}</h5>
          <h6 className="subtitle is-6 m-0 mt-5">DESCRIPTION</h6>
          <h5 className="title is-5 mt-2">{bedrooms} Bed Mobile Home</h5>
          <h5 className="subtitle is-6 mb-1">
            <i
              className="fas fa-map-marker-alt mr-1"
              style={{ color: "darkred" }}
            ></i>
            {siteName}, {siteCountry}
          </h5>
          <h5 className="subtitle is-6">
            <i className="far fa-calendar-alt mr-1"></i>
            {checkinShort} to {checkoutShort}
          </h5>
        </div>
        <hr />
        <form className="mt-5" onSubmit={handleSubmit}>
          <CardSection />
          <button
            disabled={!props.stripe}
            className="button is-danger book-home-button stripe-button"
          >
            Pay Now
          </button>
        </form>
      </section>
    </>
  );
};

export default function InjectedCheckoutForm(props) {
  return (
    <ElementsConsumer>
      {({ stripe, elements }) => (
        <CheckoutForm stripe={stripe} elements={elements} {...props} />
      )}
    </ElementsConsumer>
  );
}
