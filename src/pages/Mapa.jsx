import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// --- Bloco de correção do ícone ---
import L from "leaflet";
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});
L.Marker.prototype.options.icon = DefaultIcon;
// --- Fim do bloco de correção ---


const Mapa = () => {
  const position = [-30.1559, -51.1528];

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <MapContainer 
        center={position} 
        zoom={15} 
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>
            AParece pelo amor de deus
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Mapa;