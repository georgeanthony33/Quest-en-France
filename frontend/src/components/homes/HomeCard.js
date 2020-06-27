import React from 'react'

const HomeCard = ({ image_location, home_type, room }) => {
  return (
    <div className="homes-homecard-container">
      <img src={`https://res.cloudinary.com/drjzlxwhz/image/upload/v1591121129/Home%20Images/${image_location}`} className="homes-alice-image"/>
      <div
        className={`homecard-text-container columns is-vcentered`}
      >
        <div className="column">
          <p className="has-text-centered has-text-white is-uppercase is-size-6">{home_type}</p>
          <h3 className="has-text-centered has-text-white is-size-4">{room}</h3>
        </div>
      </div>
    </div>
  )
}

export default HomeCard