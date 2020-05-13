import React, { useState, useEffect } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import axios from 'axios'
import { Link, withRouter } from 'react-router-dom'
import SiteCard from './SiteCard'

const Home = () => {
  const [ sites, setSites ] = useState('')
  const [ chosenSite, setChosenSite ] = useState('')
  const [ checkin, setCheckin ] = useState(new Date().setDate(new Date().getDate() + 1))
  const [ checkout, setCheckout ] = useState(new Date().setDate(new Date().getDate() + 7))
  const [ adults, setAdults ] = useState(1)
  const [ kids, setKids ] = useState(0)

  const getSiteData = async () => {
    const sites = await axios.get('/api/sites/')
    const siteData = sites.data.sort(compare)
    setSites(siteData)
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

  useEffect(() => {
    getSiteData()
  }, [])


  if (!sites) return null
  console.log(chosenSite)

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

              <div className="columns">
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
          <h1 className="title has-text-weight-bold">Explore our sites</h1>
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
          <div className="columns is-mobile is-multiline">
            {sites.map(site => ( 
              <SiteCard key={site.id} {...site}/>
              ))
            }
          </div>
          <br />
          <div className="container columns is-centered">
            <button className="button is-danger is-medium">Explore our homes</button>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Home