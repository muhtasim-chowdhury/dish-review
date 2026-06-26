'use client'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"

export default function Home() {
  return (
    <div className="flex flex-row h-full" style={{border: "1px solid green"}}>
      <div className="basis-1/3">Place View</div>
      <div className="basis-2/3 h-full" style={{border: "1px solid red"}}>
        <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </MapContainer>
      </div>
    </div>
  );
}
