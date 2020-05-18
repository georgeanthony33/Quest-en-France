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

  return (
    
    <div className="has-navbar-fixed-top">

      <div className="site-outer-container">

        <div className="site-top-banner">
          <h1 className="title has-text-weight-bold is-size-2">{site.name}</h1>
          <h2 className="subtitle has-text-weight-bold">{site.area}, {site.country}</h2>
        </div>

        <div className="site-content">

          <div className="columns">
            <div className="column is-third">
              <h2 className="has-text-weight-bold">{site.short_description}</h2>
            </div>
            <div className="column is-two-thirds">
            <div className="homepage-carousel">
              {/* <AliceCarousel
                items={site.gallery_images.map(image => (
                  <img key={image} src={image} className="homepage-alice-image"/>
                ))}
                responsive={{ 0: { items: 1 }, 625: { items: 1 } }}
                autoPlayInterval={2000}
                autoPlayDirection="rtl"
                autoPlay={true}
                fadeOutAnimation={true}
                mouseTrackingEnabled={true}
                disableAutoPlayOnAction={true}
                dotsDisabled={true}
              /> */}
            </div>
            </div>
          </div>

        </div>

      </div>

    </div>

  )
}

export default Site