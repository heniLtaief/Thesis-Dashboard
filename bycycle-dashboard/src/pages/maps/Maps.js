import React from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
} from "react-google-maps";

// styles
import useStyles from "./styles";

const BasicMap = withScriptjs(
  withGoogleMap(() => (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{
        lat: parseFloat(36.78825),
        lng: parseFloat(10),
      }}
    >
      <Marker position={{ lat: 36.78825, lng: 10 }} />
      <Marker position={{ lat: 34.70075, lng: 9.1 }} />
      <Marker position={{ lat: 36.78825, lng: 10.2324 }} />
      <Marker position={{ lat: 36.77725, lng: 10.2324 }} />
      <Marker position={{ lat: 36.64725, lng: 10.2324 }} />
      <Marker position={{ lat: 36.86625, lng: 10.2324 }} />
      <Marker position={{ lat: 36.06555, lng: 10.2324 }} />
    </GoogleMap>
  )),
);

export default function Maps() {
  var classes = useStyles();

  return (
    <div className={classes.mapContainer}>
      <BasicMap
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyB7OXmzfQYua_1LEhRdqsoYzyJOPh9hGLg"
        loadingElement={<div style={{ height: "inherit", width: "inherit" }} />}
        containerElement={<div style={{ height: "100%" }} />}
        mapElement={<div style={{ height: "100%" }} />}
      />
    </div>
  );
}
