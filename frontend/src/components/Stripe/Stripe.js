import React from "react";
import "./Stripe.scss";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51HP8LdIjBNRGWKqwOJajjmBz9HbQVm1MjhtoE2DwSsiWBhFDwTKalh3XiZoRcscZgCxCDc6MBZ1TFjLXwWQfLsrt00fcgmfPkx",
);

const Stripe = (props) => {
  const { setShowModal } = props;
  return (
    <div id="Stripe">
      <header className="modal-card-head">
        <p className="modal-card-title">Make payment</p>
        <button
          className="delete close-button"
          aria-label="close"
          onClick={() => setShowModal(false)}
        ></button>
      </header>
      <div className="product">
        <Elements stripe={stripePromise}>
          <CheckoutForm {...props} />
        </Elements>
      </div>
    </div>
  );
};

export default Stripe;
