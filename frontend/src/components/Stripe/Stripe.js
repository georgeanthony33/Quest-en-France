import React, { useState } from "react";
import "./Stripe.scss";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import LoginRegister from "./../../containers/LoginRegister/LoginRegister";

const stripePromise = loadStripe(
  "pk_test_51HP8LdIjBNRGWKqwOJajjmBz9HbQVm1MjhtoE2DwSsiWBhFDwTKalh3XiZoRcscZgCxCDc6MBZ1TFjLXwWQfLsrt00fcgmfPkx",
);

const Stripe = (props) => {
  const { setShowModal, isAuthenticated: authenticated } = props;
  const [isAuthenticated, setIsAuthenticated] = useState(authenticated);
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
        {isAuthenticated ? (
          <Elements stripe={stripePromise}>
            <CheckoutForm {...props} />
          </Elements>
        ) : (
          <>
            <p className="login-message">
              In order to secure this booking, please login or register below.
            </p>
            <LoginRegister setIsAuthenticated={setIsAuthenticated} />
          </>
        )}
      </div>
    </div>
  );
};

export default Stripe;
