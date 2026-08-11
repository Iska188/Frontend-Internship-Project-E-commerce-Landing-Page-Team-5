import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; 
import './locationMap.css';

interface LocationMapProps {
  center?: [number, number];
  zoom?: number;
  className?: string;
}

export const LocationMap: React.FC<LocationMapProps> = ({ 
  center = [48.0, 14.0], 
  zoom = 4,
  className = ''
}) => {
  return (
    <div className={`m-location-map ${className}`}>
      <MapContainer 
        center={center} 
        zoom={zoom} 
        scrollWheelZoom={false}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />
      </MapContainer>
    </div>
  );
};