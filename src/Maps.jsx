import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const WorldMap = ({ city, country }) => {
  const [position, setPosition] = useState([0, 0]);

  useEffect(() => {
    // Fetch coordinates for the city and country using a geocoding service
    // For simplicity, you can hardcode the coordinates or use a geocoding API

    // Example using OpenStreetMap Nominatim (requires an API key for heavy usage)
    fetch(
      `https://nominatim.openstreetmap.org/search?city=${city}&country=${country}&format=json`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          const { lat, lon } = data[0];
          setPosition([parseFloat(lat), parseFloat(lon)]);
        }
      })
      .catch((error) => console.error("Error fetching coordinates:", error));
  }, [city, country]);

  console.log(position);
  return (
    <MapContainer
      center={position}
      zoom={1.75}
      style={{ height: "500px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          {city}, {country}
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default WorldMap;
