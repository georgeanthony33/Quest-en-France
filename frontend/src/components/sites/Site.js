import React, { useState, useEffect } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import axios from 'axios'
import { Link, withRouter } from 'react-router-dom'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

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
    const siteData = await axios.get(`/api/sites/${id}`)
    setSite(siteData.data)
  }
    
  if (!site) return null

  console.log(site.gallery_images.map(image => (
    `../${site.name}/Gallery/${image}.jpg`)))

  return (
    
    <div className="has-navbar-fixed-top">

      <div className="site-outer-container">

        <div className="site-top-banner">
          <h2 className="title has-text-weight-bold is-size-2 column is-3">{site.name}</h2>
          <h2 className="title has-text-weight-bold is-size-4 column is-9 site-area" id="check-availability">{site.area}, {site.country}</h2>
        </div>

        <section className={`site-top-outer-container ${site.name}`}>
          <div className="homepage-top-inner-container columns">
            <div className="column is-1"></div>
            <div className="column is-8">

              <form className="sitepage-search">

                <h3 className="has-text-weight-bold is-size-5">{site.short_description}</h3>
                <br />

                <div className="columns">
                  <div className="field column is-half">
                    <label className="label">Check In</label>
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
                    <label className="label">Check Out</label>
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
                <input className="button is-danger" type="submit" value="Check Availability" id="details"/>

              </form>

            </div>
            <div className="column is-3"></div>
          </div>
        </section>

        <nav className="is-size-5 site-navbar">
          {/* <div className="container">
            <div className="navbar-brand"> */}
              <a className="site-navbar-anchor" href="#check-availability">Check Availability</a>
              <a className="site-navbar-anchor" href="#details">Details</a>
              <a className="site-navbar-anchor" href="#gallery">Gallery</a>
              <a className="site-navbar-anchor" href="#attractions">Attractions</a>
              <a className="site-navbar-anchor" href="#location">Location</a>
            {/* </div>
          </div> */}
        </nav>

        <section className="section has-background-white">
          <div className="columns">
            <div className="column is-1"></div>
            <div className="column is-6">
              {/* <h1 className="title has-text-weight-bold is-size-2">Explore our sites</h1> */}
              {site.long_description.map(paragraph => (
                <>
                  <p>{paragraph}</p>
                  <br />
                </>
              ))}
            </div>
            <div className="column is-1"></div>
            <div className="column is-3">
              <h1 className="title has-text-weight-bold is-size-2">Facilities</h1>
              {site.facilities.map(facility => (
                <p>{facility}</p>
              ))}
            </div>
          </div>
        </section>






        {/* <div className="site-content">

          <div className="columns has-background-light site-top">
            <div className="column is-third">
              <h2 className="has-text-weight-bold">{site.short_description}</h2>
            </div>
            <div className="column is-two-thirds site-carousel-container">
              <div className="site-carousel">
                <AliceCarousel
                  items={site.gallery_images.map(image => (
                    <img key={image} src={`../${site.name}/Gallery/${image}.jpg`}className="site-alice-image"/>
                  ))}
                  responsive={{ 0: { items: 1 }, 625: { items: 1 } }}
                  autoPlayInterval={2000}
                  autoPlayDirection="rtl"
                  autoPlay={true}
                  fadeOutAnimation={true}
                  mouseTrackingEnabled={true}
                  disableAutoPlayOnAction={true}
                  dotsDisabled={true}
                />
              </div>
            </div>
          </div>

        </div> */}

      </div>

    </div>

  )
}

export default Site