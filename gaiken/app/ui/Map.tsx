'use client'

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"


export default function Map() {
    return (
        <MapContainer center={[40.75, -73.88]} zoom={12} scrollWheelZoom={false} className="h-full">
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </MapContainer>
    )
}