import React, { useState, useEffect, useRef } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import axios from 'axios'
import { Link, withRouter } from 'react-router-dom'
import SiteCard from './SiteCard'
import Carousel from '../Carousel/Carousel'
import HomeCard from './HomeCard'
import './home.scss'

const Home = () => {
  
  const [ chosenSite, setChosenSite ] = useState('Choose a site')
  const [ checkin, setCheckin ] = useState(new Date().setDate(new Date().getDate() + 1))
  const [ checkout, setCheckout ] = useState(new Date().setDate(new Date().getDate() + 7))
  const [ adults, setAdults ] = useState(1)
  const [ kids, setKids ] = useState(0)

  const [ sites, setSites ] = useState('')
  const [ reviews, setReviews ] = useState('')
  const [ homeImages, setHomeImages ] = useState()
  useEffect(() => {
    getSiteData()
    getReviewData()
    getHomeImages()
  }, [])

  const getSiteData = async () => {
    const sites = await axios.get('/api/sites/')
    const siteData = sites.data.sort(compare)
    setSites(siteData)
  }

  const getReviewData = async () => {
    const reviews = await axios.get('/api/sites/reviews/')
    const reviewData = reviews.data.sort(compare)
    setReviews(reviewData)
  }

  const compare = (a, b) => {
    const siteA = a.id
    const siteB = b.id
  
    let comparison = 0
    if (siteA > siteB) {
      comparison = 1
    } else if (siteA < siteB) {
      comparison = -1
    }
    return comparison
  }

  const getHomeImages = async () => {
    const homeImagesData = await axios.get('/api/home_images/')
    setHomeImages(homeImagesData.data)
  }

  // const [ windowWidth, setWindowWidth ] = useState(window.innerWidth)
  // useEffect(() => {
  //   window.addEventListener('resize', () => setWindowWidth(window.innerWidth));
  //   return () => {
  //     window.removeEventListener('resize', () => setWindowWidth(window.innerWidth));
  //   };
  // }, [])

  const [ isActive, setIsActive ] = useState('')
  useEffect(() => {
    document.addEventListener('click', handleClickAway);
    return () => {
      document.removeEventListener('click', handleClickAway);
    };
  }, [])
  const handleClickAway = e => {
    if (dropdownNode.current.contains(e.target)) return
    setIsActive('')
  }

  const dropdownNode = useRef()

  if (!sites || !reviews || !homeImages) return null

  return (
    
    <div className="has-navbar-fixed-top">

      <section className="homepage-top-outer-container">
        {/* <div className="color-overlay"></div> */}
        <div className="homepage-top-inner-container columns">
          <div className="column is-1" id="mobile-removed"></div>
          <div className="column is-4">

            <form className="homepage-search">

              <h2 className="has-text-weight-bold">Book your dream holiday in France or Portugal with Quest en France</h2>
              <br />

              <div className="columns reduce-margin-top">
                <div className="field column">
                  <label className="label">Where</label>

                  <div
                    className={`dropdown ${isActive}`}
                    ref={dropdownNode}
                    onClick={ (e) => {
                      e.preventDefault()
                      !isActive ? setIsActive("is-active") : setIsActive("")
                    }}
                  >
                    <div className="dropdown-trigger">
                      <button className="button" aria-haspopup="true" aria-controls="dropdown-menu">
                        <span>{chosenSite}</span>
                        <span className="icon is-small">
                          <i className="fas fa-angle-down" aria-hidden="true"></i>
                        </span>
                      </button>
                    </div>
                    <div className="dropdown-menu" id="dropdown-menu" role="menu">
                      <div className="dropdown-content">
                        {sites.map(site => (
                          <a className="dropdown-item" key={site.id} onClick={() => setChosenSite(site.name)}>{site.name}</a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="columns search-dates">
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

              <div className="columns guest-numbers">
                <div className="field column is-half">
                  <label className="label">Adults</label>
                  <div className="control">
                    <input className="input" type="number" name="adults"
                    value={adults}
                    onChange={(e) => setAdults(e.target.value)}
                    placeholder="Choose site" />
                  </div>
                </div>
                <div className="field column is-half">
                  <label className="label">Kids</label>
                  <div className="control">
                    <input className="input" type="number" name="kids"
                    value={kids}
                    onChange={(e) => setKids(e.target.value)}
                    placeholder="Choose site" />
                  </div>
                </div>
              </div>
              <div className="home-submit">
                <input className="button is-danger" type="submit" value="Search" />
              </div>
            </form>

          </div>
          <div className="column is-7" id="mobile-removed"></div>
        </div>
      </section>

      <section className="section has-background-white">
        <div className="container">
          <h1 className="title has-text-weight-bold is-size-2">Explore our sites</h1>
          <div className="columns is-mobile is-multiline">
            {sites.map(site => (
              <SiteCard key={site.id} {...site}/>
            ))}
          </div>
        </div>
      </section>

      <section className="section has-background-light">
        <div className="container">
          <h2 className="has-text-weight-bold">We have a selection of 2 and 3 bedroomed modern cottage style mobile homes with either open or semi-covered verandas. The 2 bedroomed homes will accommodate between 4-6 people as the lounge seating area can convert to a bed that sleeps up to 2 people. The 3 bedroomed homes will accommodate 6 people.</h2>
          <br />
          <div className="homepage-carousel">
            <Carousel
              items={homeImages.map(image => (
                <HomeCard key={image.id} {...image}/>
              ))}
              responsive={{ 0: { items: 1 }, 768: { items: 2 }, 992: { items: 3 } }}
            />
          </div>
          <br />
          <div className="container columns is-centered explore-homes-btn-wrapper">
            <button className="button is-danger is-medium">Explore our homes</button>
          </div>
        </div>
      </section>

      <section className="section has-background-white">
        <div className="container">
          <h1 className="title has-text-weight-bold is-size-2">What others say...</h1>
          <div className="columns is-mobile is-multiline">
            {reviews.map(review => ( 
              <div key={review.id} className="column is-one-third-desktop is-one-half-tablet is-full-mobile">         
                <div className="card card-border has-background-light curved-corners">
                  <div className="card-content homepage-reviews">
                    <div className="quotations"></div>
                    <h5 className="title is-6">{review.text}</h5>
                  </div>
                  <div className="card-header">
                    <h4 className="card-header-title">{review.name}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}

export default Home