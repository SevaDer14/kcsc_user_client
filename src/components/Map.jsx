import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { mapStyles } from "../data/mapStyles";
import MapMarker from "./MapMarker";

const Map = ({ coordinates }) => {
  const center = {
    lat: 51.49955620887601,
    lng: -0.2000188663810555,
  };

  const containerStyle = {
    width: "100%",
    height: "100%",
  };

  const defaultMapOptions = {
    fullScreenControl: false,
    streetViewControl: false,
    mapTypeControl: false,
    styles: mapStyles,
    fullscreenControl: false,
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_KEY,
  });

  return (
    isLoaded && (
      <div data-cy="map" style={{width: "100%", height: "100%"}}>
        <GoogleMap
          options={defaultMapOptions}
          mapContainerStyle={containerStyle}
          center={center}
          zoom={14}
        >
          <MapMarker
            key={coordinates.latitude + coordinates.longitude}
            coordinates={coordinates}
          />
        </GoogleMap>
      </div>
    )
  );
};

export default Map;
