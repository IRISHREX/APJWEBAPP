// import React, { useEffect, useRef } from "react";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
// import L from "leaflet";
// import "leaflet-routing-machine";

// import { Paper } from "@mui/material";

// function MapComponent({ center, zoom, waypoints }) {
//   const mapRef = useRef(null);

//   useEffect(() => {
//     if (mapRef.current) {
//       const map = mapRef.current.leafletElement;

//       L.Routing.control({
//         waypoints,
//         routeWhileDragging: true,
//       }).addTo(map);
//     }
//   }, [waypoints]);

//   const mapContainerStyle = {
//     height: "400px",
//     width: "100%",
//     marginBottom: "16px",
//     position: "relative",
//   };

//   return (
//     <Paper elevation={3} style={{ padding: "16px" }}>
//       <MapContainer
//         ref={mapRef}
//         center={center}
//         zoom={zoom}
//         style={mapContainerStyle}
//       >
//         <TileLayer
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         />
//         <Marker position={center}>
//           <Popup>
//             <div>
//               <strong>Default Location:</strong>
//               <p>
//                 City Office - H-78/17, Batla House, Jamia Nagar, New Delhi,
//                 110025
//               </p>
//             </div>
//           </Popup>
//         </Marker>
//       </MapContainer>
//     </Paper>
//   );
// }

// export default MapComponent;



import React, { useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import L from "leaflet";
import "leaflet-routing-machine";
import { Paper } from "@mui/material";
import "./MapComponent.css"; // Import the external CSS file

function MapComponent({ center, zoom, waypoints }) {
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current) {
      const map = mapRef.current.leafletElement;

      L.Routing.control({
        waypoints,
        routeWhileDragging: true,
      }).addTo(map);
    }
  }, [waypoints]);

  return (
    <Paper elevation={3} className="paper">
      <MapContainer
        ref={mapRef}
        center={center}
        zoom={zoom}
        className="map-container" // Apply the map container class
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={center}>
          <Popup>
            <div className="popup"> {/* Apply the popup class */}
              <strong>Default Location:</strong>
              <p>
                City Office - H-78/17, Batla House, Jamia Nagar, New Delhi,
                110025
              </p>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </Paper>
  );
}

export default MapComponent;
