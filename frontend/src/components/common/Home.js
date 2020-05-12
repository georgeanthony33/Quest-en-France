import React, { useState, useEffect } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import axios from 'axios'
import { Link, withRouter } from 'react-router-dom'
import SiteCard from './SiteCard'

const Home = () => {
  const [ sites, setSites ] = useState('')
  const [ checkin, setCheckin ] = useState(new Date().setDate(new Date().getDate() + 1))
  const [ checkout, setCheckout ] = useState(new Date().setDate(new Date().getDate() + 7))
  const [ adults, setAdults ] = useState(1)
  const [ kids, setKids ] = useState(0)

  const getSiteData = async () => {
    const siteData = await axios.get('/api/sites/')
    setSites(siteData.data)
  }

  useEffect(() => {
    getSiteData()
  }, [])

  
  if (!sites) return null
  console.log(sites[0].main_image)



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
                  <div className="control">
                    <input className="input" type="text" name="site"
                    value={sites}
                    onChange={(e) => setSites(e.target.value)}
                    placeholder="Choose site" />
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

      <section className="section has-background-light">
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

      <section>
        <p>Hello</p>
        <img src="../LesGenets/les-genets-pool4.jpg" />
        {/* <img src="../" */}
      </section>
    </div>
  )
}

export default Home