import React from "react";
import { GoogleMap, useJsApiLoader, Polygon } from "@react-google-maps/api";
import { mapStyles } from "../data/mapStyles";
import MapMarker from "./MapMarker";
import pcnAreas from "../data/pcn_areas";

const convertToGMapObject = (path) => {
  return path.map((point) => ({ lng: point[0], lat: point[1] }));
};

const Map = ({ coordinates, displayPcnBoundaries }) => {
  const center = {
    lat: coordinates.latitude,
    lng: coordinates.longitude,
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

  const pcnBoundaries = pcnAreas.areas.map((area) => (
    <Polygon
      paths={convertToGMapObject(area.geometry.path[0])}
      key={area.id}
      options={{
        fillColor: area.properties.color ? area.properties.color : '#ACDF87',
        fillOpacity: 0.7,
        strokeOpacity: 0,
      }}
    />
  ));

  return (
    isLoaded && (
      <div data-cy="map" style={{ width: "100%", height: "100%" }}>
        <GoogleMap
          options={defaultMapOptions}
          mapContainerStyle={containerStyle}
          center={center}
          zoom={14}
          on
        >
          {displayPcnBoundaries && pcnBoundaries}
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
