import React, { useEffect, useMemo, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Ship } from 'lucide-react';
import { islands } from '../data/islands';
import { generateCurvedPath, mapStyles } from '../utils/mapUtils';

// Fix for default marker icons
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const islandCoordinates: { [key: string]: [number, number] } = {
  'amorgos': [36.8333, 25.8833],
  'anafi': [36.3667, 25.7667],
  'andros': [37.8833, 24.8167],
  'antiparos': [37.0333, 25.0833],
  'delos': [37.3964, 25.2674],
  'donousa': [37.0833, 25.8000],
  'folegandros': [36.6167, 24.9167],
  'ios': [36.7167, 25.3333],
  'kea': [37.6167, 24.3333],
  'kimolos': [36.7833, 24.5667],
  'koufonisia': [36.9333, 25.6000],
  'kythnos': [37.3833, 24.4167],
  'milos': [36.7167, 24.4167],
  'mykonos': [37.4500, 25.3333],
  'naxos': [37.1000, 25.3667],
  'paros': [37.0833, 25.1333],
  'santorini': [36.3833, 25.4617],
  'serifos': [37.1500, 24.4833],
  'sifnos': [36.9667, 24.7000],
  'sikinos': [36.6833, 25.1167],
  'syros': [37.4500, 24.9167],
  'tinos': [37.5333, 25.1667]
};

interface InteractiveMapProps {
  selectedIsland?: string;
  destinationIsland?: string;
  onIslandSelect?: (islandId: string) => void;
  className?: string;
  height?: string;
}

// Custom hook for map animations
const MapEffect = ({ selectedIsland, destinationIsland }: { selectedIsland?: string; destinationIsland?: string }) => {
  const map = useMap();

  useEffect(() => {
    if (selectedIsland && destinationIsland) {
      const start = islandCoordinates[selectedIsland];
      const end = islandCoordinates[destinationIsland];
      if (start && end) {
        const bounds = L.latLngBounds([start, end]);
        map.fitBounds(bounds, { padding: [50, 50], animate: true });
      }
    } else if (selectedIsland) {
      const coords = islandCoordinates[selectedIsland];
      if (coords) {
        map.setView(coords, 9, { animate: true });
      }
    }
  }, [map, selectedIsland, destinationIsland]);

  return null;
};

export const InteractiveMap: React.FC<InteractiveMapProps> = ({
  selectedIsland,
  destinationIsland,
  onIslandSelect,
  className = '',
  height = 'h-[400px]'
}) => {
  const customIcon = new L.Icon({
    iconUrl: 'https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png',
    iconSize: [35, 35],
    iconAnchor: [17, 35],
    popupAnchor: [0, -35],
    className: 'transition-all duration-300 hover:scale-110'
  });

  const selectedIcon = new L.Icon({
    iconUrl: 'https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png',
    iconSize: [45, 45],
    iconAnchor: [22, 45],
    popupAnchor: [0, -45],
    className: 'selected-marker transition-all duration-300'
  });

  const routePath = useMemo(() => {
    if (selectedIsland && destinationIsland) {
      const start = islandCoordinates[selectedIsland];
      const end = islandCoordinates[destinationIsland];
      if (start && end) {
        return generateCurvedPath(start, end);
      }
    }
    return null;
  }, [selectedIsland, destinationIsland]);

  const mapCenter = useMemo(() => {
    if (selectedIsland && destinationIsland) {
      const start = islandCoordinates[selectedIsland];
      const end = islandCoordinates[destinationIsland];
      if (start && end) {
        return [(start[0] + end[0]) / 2, (start[1] + end[1]) / 2];
      }
    }
    return [37.0, 25.0];
  }, [selectedIsland, destinationIsland]);

  return (
    <div className={`relative ${height} rounded-xl overflow-hidden shadow-lg ${className}`}>
      <MapContainer
        center={mapCenter}
        zoom={8}
        className="h-full w-full"
        scrollWheelZoom={false}
        style={{ background: '#e8f0f7' }}
      >
        <TileLayer
          attribution={mapStyles.attribution}
          url={mapStyles.defaultStyle}
          className="transition-opacity duration-500"
        />
        
        <MapEffect selectedIsland={selectedIsland} destinationIsland={destinationIsland} />

        {routePath && (
          <Polyline
            positions={routePath}
            pathOptions={{
              color: '#2563eb',
              weight: 3,
              opacity: 0.8,
              dashArray: '10, 10',
              lineCap: 'round',
              className: 'animate-dash'
            }}
          />
        )}

        {islands.map((island) => {
          const coords = islandCoordinates[island.id];
          if (!coords) return null;

          const isSelected = island.id === selectedIsland || island.id === destinationIsland;
          const shouldShow = !selectedIsland || !destinationIsland || isSelected;

          if (!shouldShow) return null;

          return (
            <Marker
              key={island.id}
              position={coords}
              icon={isSelected ? selectedIcon : customIcon}
              eventHandlers={{
                click: () => onIslandSelect?.(island.id)
              }}
            >
              <Popup className="custom-popup">
                <div className="p-2">
                  <h3 className="font-bold text-lg mb-2">{island.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{island.description}</p>
                  <button
                    onClick={() => onIslandSelect?.(island.id)}
                    className="flex items-center space-x-2 text-sm text-blue-600 hover:text-blue-700"
                  >
                    <Ship size={16} />
                    <span>View Routes</span>
                  </button>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
};