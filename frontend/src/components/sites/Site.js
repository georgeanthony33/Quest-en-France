import React, { useState, useEffect } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import axios from 'axios'
import { Link, withRouter } from 'react-router-dom'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import Carousel from './../common/Carousel'

const Site = () => {
  const [ site, setSite ] = useState('')
  const [ checkin, setCheckin ] = useState(new Date().setDate(new Date().getDate() + 1))
  const [ checkout, setCheckout ] = useState(new Date().setDate(new Date().getDate() + 7))
  const [ adults, setAdults ] = useState(1)
  const [ kids, setKids ] = useState(0)
  const [ isActive, setIsActive ] = useState('')

  useEffect(() => {
    const sitePK = window.location.pathname.replace(/\D/g,'')
    getSiteData(sitePK)
  }, [])

  const getSiteData = async (id) => {
    const siteData = await axios.get(`/api/sites/${id}/`)
    setSite(siteData.data)
  }

  const [ windowWidth, setWindowWidth ] = useState(window.innerWidth)
  useEffect(() => {
    window.addEventListener('resize', () => setWindowWidth(window.innerWidth));
    return () => {
      window.removeEventListener('resize', () => setWindowWidth(window.innerWidth));
    };
  }, [])
    
  if (!site) return null

  return (
    
    <div className="has-navbar-fixed-top">

    <div className="site-top-banner">
      <h2 className={`title has-text-weight-bold is-size-2 column is-${windowWidth >= 1145 ? 3 : 5}`} id="site-title">{site.name}</h2>
      <h2 className={`title has-text-weight-bold is-size-4 column is-${windowWidth >= 1145 ? 9 : 7} site-area`} id="check-availability">{site.area}, {site.country}</h2>
    </div>

      <div className="site-outer-container">

        <section className={`site-top-outer-container ${site.name}`}>
          <div className="homepage-top-inner-container columns">
            <div className="column is-1" id="mobile-removed"></div>
            <div className="column is-8">

              <form className="sitepage-search" id={site.name.slice(0,3)}>

                <h3 className="has-text-weight-bold is-size-5">{site.short_description}</h3>
                <br />

                <div className="columns reduce-margin-top">
                  <div className="field column is-half">
                    <label className="label">Check In</label>
                    <div className="control">
                      <DatePicker
                        className="input site-date-input"
                        selected={checkin}
                        onChange={(checkin) => setCheckin(checkin)}
                        dateFormat="d MMMM yyyy"
                        name="date"
                        required={true}
                      />
                    </div>
                  </div>
                  <div className="field column is-half">
                    <label className="label">Check Out</label>
                    <div className="control">
                      <DatePicker
                        className="input site-date-input"
                        selected={checkout}
                        onChange={(checkout) => setCheckout(checkout)}
                        dateFormat="d MMMM yyyy"
                        name="date"
                        required={true}
                      />
                    </div>
                  </div>
                </div>

                <div className="columns reduce-margin-top">
                  <div className="field column is-half">
                    <label className="label">Adults</label>
                    <div className="control">
                      <input className="input" type="number" name="adults"
                      id="guests-input"
                      value={adults}
                      onChange={(e) => setAdults(e.target.value)}
                      placeholder="Choose site" />
                    </div>
                  </div>
                  <div className="field column is-half">
                    <label className="label">Kids</label>
                    <div className="control">
                      <input className="input" type="number" name="kids"
                      id="guests-input"
                      value={kids}
                      onChange={(e) => setKids(e.target.value)}
                      placeholder="Choose site" />
                    </div>
                  </div>
                </div>
                <div className="site-check-availability">
                  <input className="button is-danger" type="submit" value="Check Availability" id="details"/>
                </div>
 
              </form>

            </div>
            <div className="column is-3" id="mobile-removed"></div>
          </div>
        </section>

        <nav className="is-size-5 site-navbar">
          <a className="site-navbar-anchor" href="#check-availability">Check Availability</a>
          <a className="site-navbar-anchor" href="#details">Details</a>
          <a className="site-navbar-anchor" href="#gallery">Gallery</a>
          <a className="site-navbar-anchor" href="#attractions">Attractions</a>
          <a className="site-navbar-anchor" href="#location">Location</a>
        </nav>

        {/* <div className="tabs is-centered has-background-light">
          <ul>
            <li className="is-active"><a>Details</a></li>
            <li><a>Facilities</a></li>
            <li><a>Gallery</a></li>
            <li><a>Attractions</a></li>
            <li><a>Location</a></li>
          </ul>
        </div> */}

        <section className="section has-background-white">
          <div className="columns">
            <div className="column is-1"></div>
            <div className="column is-6">
              <p className="has-text-weight-bold">{site.long_description[0]}</p>
              <br />
              {site.long_description.slice(1).map(paragraph => (
                <>
                  <p>{paragraph}</p>
                  <br />
                </>
              ))}
            </div>
            <div className="column is-5">
              <div className="facilities card has-background-light">
                <h1 className="title has-text-weight-bold is-size-2">Facilities</h1>
                {site.facilities.map(facility => (
                  <div className="columns">
                    <span className="icon has-text-danger tick">
                      <i className="fas fa-check-square"></i>
                    </span>
                    <p>{facility}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section has-background-light">
          <div className="site-page-carousel">
            <Carousel
              items={site.gallery_images.map(image => (
                <img key={image} src={`../${site.name}/Gallery/${image}.jpg`}></img>
              ))}
              responsive={{ 0: { items: 1 }, 625: { items: 1 } }}
            />
          </div>
        </section>

      </div>

    </div>

  )
}

export default Site