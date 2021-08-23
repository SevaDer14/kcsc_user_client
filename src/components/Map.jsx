import React from "react";
import {
  GoogleMap,
  useJsApiLoader,
  OverlayView,
  Polygon,
} from "@react-google-maps/api";
import { mapStyles } from "../data/mapStyles";
import MapMarker from "./MapMarker";

// const coords = [
//   { lat: 51.50876849458919, lng: -0.20673863392606953 },
//   { lat: 51.50689873598473, lng: -0.1901733125656969 },
//   { lat: 51.49597246961527, lng: -0.20115963968552955 },
//   { lat: 51.50876849458919, lng: -0.20673863392606953 },

// ];

const coords = [
  [-0.1886459454865309, 51.49634938967969],
  [-0.18897661678041822, 51.49549611677702],
  [-0.1899292650318554, 51.49473824084483],
  [-0.19032292133410217, 51.494743540676524],
  [-0.19104724893023622, 51.494759440171606],
  [-0.19112598019068555, 51.494759440171606],
  [-0.19183456153472975, 51.49475414033991],
  [-0.19312575420609915, 51.49473824084483],
  [-0.19317299296236878, 51.49537422064807],
  [-0.1932910898530428, 51.495363620984676],
  [-0.19341705986976176, 51.49582470634202],
  [-0.193755604289694, 51.495803507015246],
  [-0.19385795492827815, 51.49608439809501],
  [-0.19273997102989732, 51.49614269624364],
  [-0.19273209790385237, 51.49586180516388],
  [-0.19230694909742588, 51.49589360415404],
  [-0.19240929973601004, 51.49669917857147],
  [-0.19233056847556068, 51.49670447840317],
  [-0.19248015787041445, 51.49761604945447],
  [-0.19187392716495444, 51.49781214322713],
  [-0.19110236081255078, 51.49814073279214],
  [-0.18942538496497952, 51.49816193211891],
  [-0.18932303432639536, 51.49708606628511],
  [-0.18913407930131693, 51.496619681096064],
  [-0.18903960178877768, 51.496296391362755],
  [-0.1886459454865309, 51.49634938967969]
];

const convertToGMapObject = (coords) => {
  return coords.map((point) => ({lng: point[0], lat: point[1]}))
}

const Map = ({ coordinates }) => {
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
          <Polygon
            paths={convertToGMapObject(coords)}
            key={1}
            options={{
              fillColor: "#000",
              fillOpacity: 0.4,
              strokeColor: "#000",
              strokeOpacity: 1,
              strokeWeight: 1,
            }}
          />
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
