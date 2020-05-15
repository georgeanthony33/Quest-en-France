import React, { useState, useEffect } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import axios from 'axios'
import { Link, withRouter } from 'react-router-dom'
import SiteCard from './SiteCard'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

// import bulmaCarousel from 'bulma-carousel/dist/js/bulma-carousel.min.js';

const Home = () => {
  const [ sites, setSites ] = useState('')
  const [ reviews, setReviews ] = useState('')
  const [ chosenSite, setChosenSite ] = useState('Choose a site')
  const [ checkin, setCheckin ] = useState(new Date().setDate(new Date().getDate() + 1))
  const [ checkout, setCheckout ] = useState(new Date().setDate(new Date().getDate() + 7))
  const [ adults, setAdults ] = useState(1)
  const [ kids, setKids ] = useState(0)
  const [ isActive, setIsActive ] = useState('')
  const [ homeImages, setHomeImages ] = useState()

  useEffect(() => {
    getSiteData()
    getReviewData()
    // buildCarousel()
    setHomeImages([1, 2, 3].map((i) => <h2 key={i}>{i}</h2>))
  }, [])
 
  const responsive = {
    0: { items: 1 },
    1024: { items: 2 },
  }

  const onSlideChange = (e) => {
    console.debug('Item`s position during a change: ', e.item)
    console.debug('Slide`s position during a change: ', e.slide)
  }
 
  const onSlideChanged = (e) => {
    console.debug('Item`s position after changes: ', e.item)
    console.debug('Slide`s position after changes: ', e.slide)
  }

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

  // Initialize all elements with carousel class.
  // const buildCarousel = () => {
  //   bulmaCarousel.attach('#carousel-demo', { slidesToScroll: 1, slidesToShow: 3 })
  // }
  
  // bulmaCarousel.attach('#carousel-demo', { slidesToScroll: 1, slidesToShow: 3 })

  // To access to bulmaCarousel instance of an element
  // const element = document.querySelector('#my-element');
  // if (element && element.bulmaCarousel) {
  //   // bulmaCarousel instance is available as element.bulmaCarousel
  // }

  if (!sites) return null

  return (
    
    <div className="has-navbar-fixed-top">

      
      <section className="homepage-top-outer-container">
        <div className="color-overlay"></div>
        <div className="homepage-top-inner-container columns">
          <div className="column is-1"></div>
          <div className="column is-4">

            <form className="homepage-search">

              <h2 className="has-text-weight-bold">Book your dream holiday in France or Portugal with Quest en France</h2>
              <br />

              {/* <div className="columns">
                <div className="field column">
                  <label className="label">Where</label>
                  <div className="select control">
                    <select
                      name="site"
                      onChange={(e) => setChosenSite(e.target.value)}
                      value={chosenSite}
                    >
                      <option disabled value="">Choose a site</option>
                      {sites.map(site => (
                        <option key={site.id} value={site.name}>{site.name}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div> */}

              <div className="columns">
                <div className="field column">
                  <label className="label">Where</label>

                  <div
                    className={`dropdown ${isActive}`}
                    onClick={ (e) => {
                      e.preventDefault()
                      isActive === '' ? setIsActive("is-active") : setIsActive("")
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
              <input className="button is-danger" type="submit" value="Search" />

            </form>

          </div>
          <div className="column is-7"></div>
        </div>
      </section>

      <section className="section has-background-white">
        <div className="container">
          <h1 className="title has-text-weight-bold is-size-2">Explore our sites</h1>
          <div className="columns is-mobile is-multiline">
            {sites.map(site => ( 
              <SiteCard key={site.id} {...site}/>
            ))
            }
          </div>
        </div>
      </section>


      <section className="section has-background-light">
        <div className="container">
          <h2 className="has-text-weight-bold">We have a selection of 2 and 3 bedroomed modern cottage style mobile homes with either open or semi-covered verandas. The 2 bedroomed homes will accommodate between 4-6 people as the lounge seating area can convert to a bed that sleeps up to 2 people. The 3 bedroomed homes will accommodate 6 people.</h2>
          <br />
          <AliceCarousel
            items={homeImages}
            responsive={responsive}
            autoPlayInterval={2000}
            autoPlayDirection="rtl"
            autoPlay={true}
            fadeOutAnimation={true}
            mouseTrackingEnabled={true}
            // playButtonEnabled={true}
            disableAutoPlayOnAction={true}
            onSlideChange={onSlideChange}
            onSlideChanged={onSlideChanged}
          />
          {/* <div className="columns is-mobile is-multiline">
            {sites.map(site => ( 
              <SiteCard key={site.id} {...site}/>
              ))
            }
          </div> */}
          {/* <div className="carousel" id="carousel-demo">
            <div className="item-1"></div>
            <div className="item-1"></div>
            <div className="item-1"></div>
          </div> */}
          <br />
          <div className="container columns is-centered">
            <button className="button is-danger is-medium">Explore our homes</button>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
    
          <div id="carousel-demo" className="carousel">
            <div className="item-1">
              <img src="https://www.w3schools.com/w3css/img_lights.jpg"></img>
            </div>
            <div className="item-1">
              <img src="https://www.w3schools.com/w3css/img_lights.jpg"></img>
            </div>
            <div className="item-1">
              <img src="https://www.w3schools.com/w3css/img_lights.jpg"></img>
            </div>
          </div>
    
        </div>
      </section>

      <section className="section has-background-white">
        <div className="container">
          <h1 className="title has-text-weight-bold is-size-2">What others say...</h1>
          <div className="columns is-mobile is-multiline">
            {reviews.map(review => ( 
              <div key={review.id} className="column is-one-third-desktop is-one-third-tablet is-half-mobile">         
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
            ))
            }
          </div>
        </div>
      </section>

    </div>
  )
}

export default Home