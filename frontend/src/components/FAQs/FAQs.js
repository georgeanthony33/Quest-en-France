import React, { useState, useEffect } from 'react'
import './FAQs.scss'

const FAQs = () => {

  const [ windowWidth, setWindowWidth ] = useState(window.innerWidth)
  useEffect(() => {
    window.addEventListener('resize', () => setWindowWidth(window.innerWidth));
    return () => {
      window.removeEventListener('resize', () => setWindowWidth(window.innerWidth));
    };
  }, [])

  const [ faqIndex, setFaqIndex ] = useState('')
  const handleClick = (index) => {
    index === faqIndex ? setFaqIndex('') : setFaqIndex(index)
  }

  const questionsAnswers = [
    { 'What are your arrival times?': 'Arrival times are strictly from 4pm onwards.'},
    { 'What are your departure times?': 'Clients must leave the home before 10am.'},
    { 'Should I book linen in advance?': 'Linen must be booked at least 6 weeks before the start of your holiday. Please see Prices Page for details and prices.'},
    { 'Are pets allowed?': 'We do allow a well behaved pet in designated homes. Your dog must be kept on a lead at all times within the campsite, and must not be left unattended in the home. This is a strict campsite policy.'},
    { 'Is Satellite TV available?': 'We do have a limited number of homes where you can hire Satellite TV with English channels. Please ask at time of booking.'},
    { 'Are deposits refundable?': 'Your deposit is non-refundable should you cancel your holiday.'},
    { 'When is balance due?': 'The balance of your holiday payment is due 10 weeks before the holiday start date. We accept all major credit and debit card payments. You can also arrange to pay for your holiday in instalments.'},
    { 'What is your cancellation policy?': 'In the event of a cancellation, refunds of amounts paid (less the deposit) will be made if Quest en France Holidays are able to re-let the \"Mobile Home\", and any expenses or losses incurred in so doing will be deducted from the refundable amount. The Client is strongly recommended to arrange a comprehensive travel insurance policy (including cancellation cover) and to have full cover for the party’s personal belongings, public liability etc, since these are not covered by the Owner\'s insurance.'}
  ]

  return (
    <div className="has-navbar-fixed-top">

      <div className="faqs-top-banner">
        <h2 className="title has-text-weight-bold is-size-3" id="site-title">Your Questions Answered</h2>
        <h2 className="title has-text-weight-bold is-size-5 is-marginless" id="check-availability">We have put together a collection of frequently asked questions. If there is any other topic you would like to discuss please give us a call on 01204 415425 or 07985 093397, email us at sales@questenfrance.com or use our 'get in touch' form.</h2>
      </div>

      <section className="section has-background-dark">
        <div className="container">

          <article className="panel is-danger has-background-light">
            <p className="panel-heading" id="faqs-heading">
              <h3 className="title has-text-weight-bold is-size-3 has-text-white">Frequently Asked Questions (FAQs)</h3>
            </p>

            {questionsAnswers.map((item, index) => (
              <div className="faq-outer-wrapper">
                <a className="faq-inner-wrapper" key={index} onClick={() => handleClick(index)}>
                  <div class="faqs-question">
                    {Object.keys(item)}
                  </div>
                  {index === faqIndex ? <i class="icon-minus"></i> : <i class="icon-plus"></i>}
                </a>
                <div className={index === faqIndex ? 'faqs-answer-visible' : 'faqs-answer-invisible'}>
                  <p className="faq-answer-text">{Object.values(item)}</p>
                </div>
              </div>
            ))}
            
          </article>
          
        </div>
      </section>
    </div>
  )
}

export default FAQs