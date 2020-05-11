import React, { useState, useEffect } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
// import { Link, withRouter } from 'react-router-dom'

const Home = () => {
  const [ site, setSite ] = useState('')
  const [ checkin, setCheckin ] = useState(new Date().setDate(new Date().getDate() + 1))
  const [ checkout, setCheckout ] = useState(new Date().setDate(new Date().getDate() + 7))
  const [ adults, setAdults ] = useState(1)
  const [ kids, setKids ] = useState(0)

  return (
    <body className="has-navbar-fixed-top">
      
      <div className="homepage-top-outer-container">
        <div className="color-overlay"></div>
        <div className="homepage-top-inner-container columns">
          <div className="column is-1"></div>
          <div className="column is-4">

            <form className="homepage-search">

              <h2>Book your dream holiday in France or Portugal with Quest en France</h2>
              <br />

              <div className="columns">
                <div className="field column">
                  <label class="label">Where</label>
                  <div className="control">
                    <input className="input" type="text" name="site"
                    value={site}
                    onChange={(e) => setSite(e.target.value)}
                    placeholder="Choose site" />
                  </div>
                </div>
              </div>

              <div className="columns">
                <div className="field column is-half">
                  <label class="label">Check In</label>
                  <div className="control">
                    <DatePicker
                      className="input"
                      selected={checkin}
                      onChange={(checkin) => setCheckin(checkin)}
                      dateFormat="d MMMM yyyy"
                      name="date"
                      required={true}
                    />
                  </div>
                </div>
                <div className="field column is-half">
                  <label class="label">Check Out</label>
                  <div className="control">
                    <DatePicker
                      className="input"
                      selected={checkout}
                      onChange={(checkout) => setCheckout(checkout)}
                      dateFormat="d MMMM yyyy"
                      name="date"
                      required={true}
                    />
                  </div>
                </div>
              </div>

              <div className="columns">
                <div className="field column is-half">
                  <label class="label">Adults</label>
                  <div className="control">
                    <input className="input" type="number" name="adults"
                    value={adults}
                    onChange={(e) => setAdults(e.target.value)}
                    placeholder="Choose site" />
                  </div>
                </div>
                <div className="field column is-half">
                  <label class="label">Kids</label>
                  <div className="control">
                    <input className="input" type="number" name="kids"
                    value={kids}
                    onChange={(e) => setKids(e.target.value)}
                    placeholder="Choose site" />
                  </div>
                </div>
              </div>

            </form>

          </div>
          <div className="column is-7"></div>
        </div>
      </div>
    </body>
  )
}

export default Home