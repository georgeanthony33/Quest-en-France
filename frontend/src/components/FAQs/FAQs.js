import React, { useState, useEffect } from 'react'

const FAQs = (props) => {

  const [ windowWidth, setWindowWidth ] = useState(window.innerWidth)
  useEffect(() => {
    window.addEventListener('resize', () => setWindowWidth(window.innerWidth));
    return () => {
      window.removeEventListener('resize', () => setWindowWidth(window.innerWidth));
    };
  }, [])

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

      <section className="section has-background-white">
        <div className="container">

          <article className="panel is-danger has-background-light">
            <p className="panel-heading">
              <h3 className="title has-text-weight-bold is-size-3 has-text-white">Frequently Asked Questions</h3>
            </p>
            {questionsAnswers.map(item => (
              <a className="panel-block columns">
                <div className="column is-11">
                  {Object.keys(item)}
                </div>
                <div className="column is-1">
                  <span className="panel-icon">
                    <i className="fas fa-check-square" aria-hidden="true"></i>
                  </span>
                </div>
              </a>
            ))}
          </article>
          
        </div>
      </section>
    </div>
  )
}

export default FAQs