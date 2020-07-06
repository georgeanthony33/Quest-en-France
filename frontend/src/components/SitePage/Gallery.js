import React from 'react'
import Carousel from './../Carousel/Carousel'

const Gallery = (props) => {

  const site = props.site

  return (  
    <div className="columns is-centered">
      <div className="column is-half-desktop is-two-thirds-tablet is-full-mobile">
        <Carousel
          items={site.gallery_images.map(image => (
            <img src={`https://res.cloudinary.com/drjzlxwhz/image/upload/v1591121702/Calico%20Park/Gallery/${image}.jpg`} />
          ))}
          responsive={{ 0: { items: 1 }, 768: { items: 1 }, 992: { items: 1 } }}
          autoPlay
        />
      </div>
    </div>
  )
}

export default Gallery