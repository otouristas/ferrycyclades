```tsx
import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import { Ship, Clock, AlertTriangle, CheckCircle } from 'lucide-react';
import L from 'leaflet';
import { generateCurvedPath } from '../utils/mapUtils';
import { useLiveTracking } from '../hooks/useLiveTracking';
import type { LiveTrackingData } from '../types/tracking';

interface LiveTrackingMapProps {
  routeId: string;
  from: [number, number];
  to: [number, number];
  className?: string;
}

export const LiveTrackingMap: React.FC<LiveTrackingMapProps> = ({
  routeId,
  from,
  to,
  className = ''
}) => {
  const { trackingData, isLoading, error } = useLiveTracking(routeId);
  const [progress, setProgress] = useState(0);

  const shipIcon = new L.Icon({
    iconUrl: '/ship-icon.png',
    iconSize: [32, 32],
    iconAnchor: [16, 16],
    popupAnchor: [0, -16],
    className: 'animate-pulse'
  });

  const routePath = generateCurvedPath(from, to);
  const currentPosition = trackingData?.position || from;

  useEffect(() => {
    if (trackingData?.progress) {
      setProgress(trackingData.progress);
    }
  }, [trackingData]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'on-time':
        return 'text-green-500';
      case 'delayed':
        return 'text-yellow-500';
      case 'cancelled':
        return 'text-red-500';
      default:
        return 'text-gray-500';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'on-time':
        return <CheckCircle className="text-green-500" size={20} />;
      case 'delayed':
        return <Clock className="text-yellow-500" size={20} />;
      case 'cancelled':
        return <AlertTriangle className="text-red-500" size={20} />;
      default:
        return <Ship className="text-gray-500" size={20} />;
    }
  };

  return (
    <div className={`relative ${className}`}>
      <div className="absolute top-4 right-4 z-10 bg-white rounded-lg shadow-lg p-4 space-y-2">
        <div className="flex items-center space-x-2">
          {getStatusIcon(trackingData?.status || 'unknown')}
          <span className={`font-medium ${getStatusColor(trackingData?.status || 'unknown')}`}>
            {trackingData?.status === 'delayed' 
              ? `Delayed by ${trackingData?.delay} minutes`
              : trackingData?.status?.charAt(0).toUpperCase() + trackingData?.status?.slice(1)}
          </span>
        </div>
        <div className="text-sm text-gray-600">
          <p>ETA: {trackingData?.eta || 'Calculating...'}</p>
          <p>Speed: {trackingData?.speed || '0'} knots</p>
        </div>
      </div>

      <MapContainer
        center={[(from[0] + to[0]) / 2, (from[1] + to[1]) / 2]}
        zoom={10}
        className="h-[400px] w-full rounded-lg"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        />

        <Polyline
          positions={routePath}
          color="#2563eb"
          weight={3}
          opacity={0.6}
          dashArray="10, 10"
        />

        <Marker position={currentPosition} icon={shipIcon}>
          <Popup>
            <div className="p-2">
              <h3 className="font-bold mb-1">Current Position</h3>
              <p className="text-sm text-gray-600">
                {Math.round(progress * 100)}% of journey complete
              </p>
            </div>
          </Popup>
        </Marker>
      </MapContainer>

      {/* Progress Bar */}
      <div className="mt-4 bg-gray-200 rounded-full h-2">
        <div
          className="bg-blue-600 h-2 rounded-full transition-all duration-500"
          style={{ width: `${progress * 100}%` }}
        />
      </div>
    </div>
  );
};
```