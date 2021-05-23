import React, { useEffect, useState } from "react";
import Carousel from "../../components/Carousel/Carousel";
import config from "../../util/Config";
import HomeCard from "../../components/HomeCard/HomeCard";

const Gallery = ({ site, loading }) => {
  const siteCode = config.siteCodes.filter((el) => el.name === site.name)[0]
    .key;

  const [carouselItems, setCarouselItems] = useState(
    config.siteGallery[siteCode],
  );
  useEffect(() => {
    setCarouselItems(config.siteGallery[siteCode]);
  }, [siteCode]);

  return (
    <div id="Gallery">
      <h3 className="title is-3">Campsite Gallery</h3>
      <div className="carousel">
        {loading ? (
          <div className="loader">Loading...</div>
        ) : (
          <Carousel
            siteCode={siteCode}
            items={carouselItems.map((image, index) => (
              <HomeCard key={index} {...image} />
            ))}
            responsive={{
              0: { items: 1 },
              768: { items: 2 },
              992: { items: 3 },
            }}
            autoPlay
          />
        )}
      </div>
    </div>
  );
};

export default Gallery;
