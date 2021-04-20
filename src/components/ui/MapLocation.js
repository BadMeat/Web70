import React from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import 'mapbox-gl/dist/mapbox-gl.css'

// -6.2415983692887105, 106.79680146908244

function mapLocation() {
  const [viewport, setViewport] = React.useState({
    latitude: -6.2415983692887105,
    longitude: 106.79680146908244,
    zoom: 16,
  });

  return (
    <ReactMapGL
      {...viewport}
      width="100%"
      height="100%"
      onViewportChange={(viewport) => setViewport(viewport)}
    >
      <Marker
        latitude={-6.241438390686289}
        longitude={106.79680146908244}
        offsetTop={-70}
      >
        <div>
          <div
            style={{
              justifyContent: "center",
              display: "flex",
            }}
          >
            <p>SMAN 70</p>
          </div>
          <div
            style={{
              justifyContent: "center",
              display: "flex",
            }}
          >
            <img
              src={require("../../img/pin.png")}
              alt="My Pin"
              style={{ width: "50px", height: "50px" }}
            />
          </div>
        </div>
      </Marker>
    </ReactMapGL>
  );
}

export default mapLocation;
