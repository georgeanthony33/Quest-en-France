import React, { useState, useEffect } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import axios from 'axios'
import { Link, withRouter } from 'react-router-dom'
import 'react-alice-carousel/lib/alice-carousel.css'
import HomesFrance from './HomesFrance'
import HomePortugal from './HomePortugal'

import './homes.scss'

const Site = () => {
  const [ homeImagesFrance, setHomeImagesFrance ] = useState()
  const [ homeImagesPortugal, setHomeImagesPortugal ] = useState()
  useEffect(() => {
    getHomeImagesFrance()
    getHomeImagesPortugal()
  }, [])

  const getHomeImagesFrance = async () => {
    const homeImagesFranceData = await axios.get('/api/home_images/')
    setHomeImagesFrance(homeImagesFranceData.data)
  }

  const getHomeImagesPortugal = async () => {
    const homeImagesPortugalData = await axios.get('/api/homes_portugal/')
    setHomeImagesPortugal(homeImagesPortugalData.data)
  }

  const [ selectedTab, setSelectedTab ] = useState('France')

  const [ windowWidth, setWindowWidth ] = useState(window.innerWidth)
  useEffect(() => {
    window.addEventListener('resize', () => setWindowWidth(window.innerWidth));
    return () => {
      window.removeEventListener('resize', () => setWindowWidth(window.innerWidth));
    };
  }, [])

  if (!homeImagesFrance) return null

  return (
    
    <div className="has-navbar-fixed-top">

      <div className="tabs is-fullwidth homes-top-banner is-large">
          <li className={selectedTab === 'France' && 'is-active'} onClick={() => setSelectedTab('France')}>
            <a id="homes-tabs">
              <span>Our homes in France</span>
            </a>
          </li>
          <li className={selectedTab === 'Portugal' && 'is-active'} onClick={() => setSelectedTab('Portugal')}>
            <a id="homes-tabs">
              <span>Our home in Portugal</span>
            </a>
          </li>
      </div>

      {selectedTab === 'France' && <HomesFrance images={homeImagesFrance} />}
      {selectedTab === 'Portugal' && <HomePortugal images={homeImagesPortugal} />}

    </div>

  )
}

export default Site