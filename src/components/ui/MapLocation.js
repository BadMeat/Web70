// import React from "react";
// import ReactMapGL, { Marker } from "react-map-gl";

// const REACT_APP_MAPBOX_ACCESS_TOKEN =
//   "pk.eyJ1IjoiYXJpZmtlYnVtZW4iLCJhIjoiY2p3MnlhN29vMDdrMTN6cDlrbDZsbzY5aSJ9.YfLFXdWgLc4B6rCw5nJiCQ";

// function MapLocation(props) {
//   const [viewport, setViewport] = React.useState({
//     latitude: -6.2415983692887105,
//     longitude: 106.79680146908244,
//     zoom: 16,
//   });

//   return (
//     <ReactMapGL
//       {...viewport}
//       width="100%"
//       height="100%"
//       onViewportChange={(viewport) => setViewport(viewport)}
//       mapboxApiAccessToken={REACT_APP_MAPBOX_ACCESS_TOKEN}
//     >
//       <Marker
//         latitude={-6.241438390686289}
//         longitude={106.79680146908244}
//         offsetTop={-70}
//       >
//         <div>
//           <div
//             style={{
//               justifyContent: "center",
//               display: "flex",
//             }}
//           >
//             <p>SMAN 70</p>
//           </div>
//           <div
//             style={{
//               justifyContent: "center",
//               display: "flex",
//             }}
//           >
//             <img
//               src={require("../../img/pin.png")}
//               alt="My Pin"
//               style={{ width: "50px", height: "50px" }}
//             />
//           </div>
//         </div>
//       </Marker>
//     </ReactMapGL>
//   );
// }

// export default MapLocation;

import React, { Component } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

class MapLocation extends Component {
  render() {
    return (
      <div id="mapid">
        <MapContainer
          center={[-6.2415983692887105, 106.79680146908244]}
          zoom={17}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[-6.2415983692887105, 106.79680146908244]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    );
  }
}
export default MapLocation;
