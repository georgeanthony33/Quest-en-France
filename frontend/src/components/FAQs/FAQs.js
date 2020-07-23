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
    setFaqIndex(index)
  }

  const questionsAnswers = [
    { 'What are your arrival times?': 'Arrival times are strictly from 4pm onwards.'},
    { 'What are your arrival times?': 'Arrival times are strictly from 4pm onwards.'},
    { 'What are your arrival times?': 'Arrival times are strictly from 4pm onwards.'},
    { 'What are your arrival times?': 'Arrival times are strictly from 4pm onwards.'},
    { 'What are your arrival times?': 'Arrival times are strictly from 4pm onwards.'},
    { 'What are your arrival times?': 'Arrival times are strictly from 4pm onwards.'},
    { 'What are your arrival times?': 'Arrival times are strictly from 4pm onwards.'},
    { 'What are your arrival times?': 'Arrival times are strictly from 4pm onwards.'},
    { 'What are your arrival times?': 'Arrival times are strictly from 4pm onwards.'},
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
            <p className="panel-heading">
              <h3 className="title has-text-weight-bold is-size-3 has-text-white">Frequently Asked Questions (FAQs)</h3>
            </p>

            {questionsAnswers.map((item, index) => (
              <>
                <a className="faq" key={index} onClick={() => handleClick(index)}>
                  <div class="faqs-question">
                    {Object.keys(item)}
                  </div>
                  <span className="panel-icon">
                    <i className="fas fa-check-square" aria-hidden="true"></i>
                  </span>
                </a>
                <div className={index === faqIndex ? 'faqs-answer-visible' : 'faqs-answer-invisible'}>
                  {Object.values(item)}
                </div>
              </>
            ))}
            
          </article>
          
        </div>
      </section>
    </div>
  )
}

export default FAQs