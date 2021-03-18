import React from "react";

const Attractions = (props) => {
  const cloudinaryURL = {
    "L’Oceano d’Or":
      "https://res.cloudinary.com/drjzlxwhz/image/upload/v1595071860/L%27Oceano%20d%27Or",
    "Les Genets":
      "https://res.cloudinary.com/drjzlxwhz/image/upload/v1591123042/Les%20Genets",
    "Calico Park":
      "https://res.cloudinary.com/drjzlxwhz/image/upload/v1594058094/Calico%20Park",
  };

  const site = props.site;

  return (
    <div id="Attractions" className="columns">
      <div className="container">
        <div className="columns is-mobile is-multiline is-centered">
          {site.attractions.map((attraction, index) => (
            <div
              key={index}
              className="column is-one-third-desktop is-half-tablet is-full-mobile"
            >
              <div className="card card-border">
                <div className="card-header">
                  <h4 className="card-header-title">{attraction.name}</h4>
                </div>
                <div className="card-image">
                  <figure className="image">
                    <img
                      src={`${cloudinaryURL[site.name]}/Attractions/${
                        attraction.image
                      }.jpg`}
                      alt={attraction.name}
                    />
                  </figure>
                </div>
                <div className="card-content">
                  <h5 className="title is-6">{attraction.description}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Attractions;
