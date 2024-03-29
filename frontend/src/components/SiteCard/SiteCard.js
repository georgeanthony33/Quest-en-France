import React from "react";
import { Link } from "react-router-dom";

const SiteCard = ({ name, id, main_image, short_description }) => (
  <div
    id="SiteCard"
    key={id}
    className="column is-one-third-desktop is-full-mobile"
  >
    <Link to={`/sites/${id}`} className="focus-border-is-dark">
      <div className="card card-border">
        <div className="card-header">
          <h4 className="card-header-title">{name}</h4>
        </div>
        <div className="card-image">
          <figure className="image">
            <img
              src={`https://res.cloudinary.com/drjzlxwhz/image/upload/v1591123523/${main_image}`}
              alt={name}
            />
          </figure>
        </div>
        <div className="card-content">
          <h5 className="title is-6">{short_description}</h5>
        </div>
      </div>
    </Link>
  </div>
);

export default SiteCard;
