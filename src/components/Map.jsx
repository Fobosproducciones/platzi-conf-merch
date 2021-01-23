import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const Map = ({ data }) => {
  const mapStyles = {
    height: "50vh",
    width: "100%",
  };

  const defaultCenter = {
    lat: data.lat,
    lng: data.lng,
  };
  return (
    <LoadScript googleMapsApiKey="AIzaSyD3vFhOE6RVaG45t2MonlyBn0NkATKnjIk">
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={9}
        setCenter={defaultCenter}
      >
        <Marker setPosition={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
