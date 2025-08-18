import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// Fix default marker icons in Leaflet
import L from "leaflet";
import type { LatLngExpression } from "leaflet"; // ✅ type-only import

import iconUrl from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl,
  shadowUrl: iconShadow,
  iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

function MyMap() {
  const [position, setPosition] = useState<LatLngExpression>([
    37.7749, -122.4194,
  ]);
  const [locationName, setLocationName] = useState("Sphere Construction");

  return (
    <div className="flex items-center justify-center h-auto px-10">
      <div className="shadow-lg rounded-lg overflow-hidden">
        <MapContainer
          center={position}
          zoom={40}
          style={{ height: "400px", width: "900px" }} // fixed size
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              <b>{locationName}</b>
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}
export default MyMap;
