import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { mapStyles } from "../data/mapStyles";
import { useSelector } from "react-redux";
import MapMarker from "./MapMarker";

const Map = () => {
  const { serviceSearchResults } = useSelector((state) => state);

  const center = {
    lat: 51.49955620887601,
    lng: -0.2000188663810555,
  };

  const containerStyle = {
    width: "100%",
    height: "900px",
  };

  const defaultMapOptions = {
    fullScreenControl: false,
    streetViewControl: false,
    mapTypeControl: false,
    styles: mapStyles,
    gestureHandling: "none",
    zoomControl: false,
    fullscreenControl: false,
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_KEY,
  });

  return (
    isLoaded && (
      <GoogleMap
        options={defaultMapOptions}
        mapContainerStyle={containerStyle}
        center={center}
        zoom={14}
      >
        {serviceSearchResults.services &&
          serviceSearchResults.services.map((service) => (
            <MapMarker service={service} />
          ))}
      </GoogleMap>
    )
  );
};

export default Map;
