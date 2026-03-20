import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

type MapProps = {
  lat: number;
  lng: number;
  zoom?: number;
};

const Map = ({ lat, lng, zoom = 13 }: MapProps): React.JSX.Element => {
  const center: [number, number] = [lat, lng];
  return (
    <MapContainer
      center={center}
      zoom={zoom}
      scrollWheelZoom={false}
      className="w-full h-screen z-0">
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={center}>
        <Popup>Current Location</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
