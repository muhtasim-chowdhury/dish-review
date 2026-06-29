'use client'

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import L from 'leaflet';


const customIcon = new L.Icon({
  iconUrl: '/marker-icon-2x.png',
  iconSize: [25, 41], 
});

export default function Map({ setSelectedPlace }: { setSelectedPlace: (selected: any) => void }) {
    return (
        <MapContainer center={[40.75, -73.88]} zoom={12} scrollWheelZoom={false} className="h-full">
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
            <Marker position={[40.7484, -73.8769]} icon={customIcon}
              eventHandlers={{
                click: () => {
                  setSelectedPlace(prev => !prev)
                },
              }}
            ></Marker>
        </MapContainer>
    )
}