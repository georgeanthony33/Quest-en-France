import React, { useState } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import config from "../../util/Config";

const Location = (props) => {
  const { site } = props;
  const { latitude, longitude } = site;

  const [showingInfoWindow, setShowingInfoWindow] = useState(false);
  const [activeMarker, setActiveMarker] = useState({});
  const [selectedPlace, setSelectedPlace] = useState({});

  const onMarkerClick = (props, marker) => {
    setSelectedPlace(props);
    setActiveMarker(marker);
    setShowingInfoWindow(true);
  };

  const onMapClicked = () => {
    if (showingInfoWindow) {
      setShowingInfoWindow(false);
      setActiveMarker(null);
    }
  };

  const containerStyle = {
    position: "relative",
    width: "100%",
    height: "calc(480px + 1rem)",
  };

  const mapStyles = {
    height: "480px",
  };

  const siteConfig = config.sites.filter(
    (site) => site.label === props.site.name,
  )[0];

  const address = siteConfig.address;

  return (
    <div id="Location">
      <h3 className="title is-3">Location</h3>
      <h5 className="title is-5 mb-2">
        {site.name}, {address}
      </h5>
      <p>Latitude: {site.latitude} north</p>
      <p className="mb-4">Longitude: {site.longitude} west</p>
      <Map
        google={props.google}
        initialCenter={{
          lat: latitude,
          lng: longitude,
        }}
        containerStyle={containerStyle}
        style={mapStyles}
        onClick={onMapClicked}
      >
        <Marker
          title={address}
          name={address}
          position={{ lat: latitude, lng: longitude }}
          onClick={onMarkerClick}
        />
        <InfoWindow marker={activeMarker} visible={showingInfoWindow}>
          <div>
            <h1>{selectedPlace.name}</h1>
          </div>
        </InfoWindow>
      </Map>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
})(Location);
