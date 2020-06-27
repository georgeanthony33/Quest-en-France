import React, { useState, useEffect } from 'react'
// import FranceHomesSmallImages from './HomeImages'
// import FranceHomesLargeImages from './HomeImages'
import axios from 'axios'

const HomesFrance = () => {

  const [ homeImages, setHomeImages ] = useState()
  useEffect(() => {
    getHomeImages()
  }, [])

  const getHomeImages = async () => {
    const homeImagesData = await axios.get('/api/home_images/')
    setHomeImages(homeImagesData.data)
  }

  if (!homeImages) return null

  return (
    <div className="has-navbar-fixed-top">
      <section className="section has-background-white">
        <div className="container">
          <div className="columns is-mobile is-multiline">
            {/* {homeImages.map(image => (
              <div className="column is-one-half-desktop is-full-tablet is-full-mobile">         
                <div className="homes-homecard-container">
                  <img src={image} className="homes-alice-image"/>
                  <div
                    className={`homecard-text-container columns is-vcentered`}
                  >
                    <div className="column">
                      <p className="has-text-centered has-text-white is-uppercase is-size-6">{home_type}</p>
                      <h3 className="has-text-centered has-text-white is-size-4">{room}</h3>
                    </div>
                  </div>
                </div>
              </div>
            ))} */}
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomesFrance