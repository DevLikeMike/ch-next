// Package import
import GoogleMapReact from "google-map-react";

export default function Map() {
  const MapContainer = ({ text }) => {
    return <div>{text}</div>;
  };

  const defaultProps = {
    center: {
      lat: 37.19177,
      lng: -82.71327,
    },
    zoom: 17,
  };
  return (
    <div style={{ height: "40vh", width: "100%" }} className='map'>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLEMAP_API }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <MapContainer lat={37.19177} lng={-82.71327} text='Casey Hall law' />
      </GoogleMapReact>
    </div>
  );
}
