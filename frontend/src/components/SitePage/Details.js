import React from 'react'
import {Elements} from '@stripe/react-stripe-js'
import {loadStripe} from '@stripe/stripe-js'

const Details = (props) => {

  const site = props.site

  const stripePromise = loadStripe('pk_test_51HP8LdIjBNRGWKqwOJajjmBz9HbQVm1MjhtoE2DwSsiWBhFDwTKalh3XiZoRcscZgCxCDc6MBZ1TFjLXwWQfLsrt00fcgmfPkx');

  return (  
    <>
    <div className="columns">
      <div className="column is-1"></div>
      <div className="column is-6">
        <p className="has-text-weight-bold">{site.long_description_paragraphs[0].text}</p>
        <br />
        {site.long_description_paragraphs.slice(1).map((paragraph, index) => (
          <div key={index}>
            <p>{paragraph.text}</p>
            <br />
          </div>
        ))}
      </div>
      <div className="column is-5">
        <div className="facilities card has-background-light">
          <h1 className="title has-text-weight-bold is-size-2">Facilities</h1>
          {site.facilities.map((facility, index) => (
            <div key={index} className="columns">
              <span className="icon has-text-danger tick">
                <i className="fas fa-check-square"></i>
              </span>
              <p>{facility}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

    <Elements stripe={stripePromise}>
      {/* <MyCheckoutForm /> */}
    </Elements>
    </>
  )
}

export default Details