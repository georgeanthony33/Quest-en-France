import React from 'react'
import { Link } from 'react-router-dom'

const SiteCard = ({ name, id, main_image, short_description }) => {
  console.log(process.env.PUBLIC_URL)
  return (
    <div key={id} className="column is-one-third-desktop is-one-third-tablet is-half-mobile">
      <Link to={`/sites/${id}`} className="focus-border-is-dark">
        <div className="card card-border">
          <div className="card-header">
            <h4 className="card-header-title">{name}</h4>
          </div>
          <div className="card-image">
            <figure className="image">
              <img src={process.env.PUBLIC_URL + '/logo192.png'} alt={name} />
              <img src={process.env.staging.PUBLIC_URL + '/logo192.png'} alt={name} />
            </figure>
          </div>
          <div className="card-content">
            <h5 className="title is-6">{short_description}</h5>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default SiteCard