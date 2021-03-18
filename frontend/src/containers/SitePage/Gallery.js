import React from "react";
// import Carousel from "../../components/Carousel/Carousel";

const Gallery = (props) => {
  // const site = props.site;

  return (
    <div id="Gallery" className="columns is-centered">
      <div className="column is-half-desktop is-two-thirds-tablet is-full-mobile">
        {/* <Carousel
          items={site.gallery_images.map((image, index) => (
            <img
              key={index}
              alt="site gallery"
              src={`https://res.cloudinary.com/drjzlxwhz/image/upload/v1591121702/Calico%20Park/Gallery/${image}.jpg`}
            />
          ))}
          responsive={{ 0: { items: 1 }, 768: { items: 2 }, 992: { items: 2 } }}
          autoPlay
        /> */}
      </div>
    </div>
  );
};

export default Gallery;
