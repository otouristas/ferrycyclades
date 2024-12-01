import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import { Ship, Clock, AlertTriangle, CheckCircle } from 'lucide-react';
import L from 'leaflet';
import { generateCurvedPath } from '../../utils/mapUtils';
import { useLiveTracking } from '../../hooks/useLiveTracking';
import type { LiveTrackingData } from '../../types/tracking';
import { TrackingStatus } from './TrackingStatus';
import { TrackingProgress } from './TrackingProgress';

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

  return (
    <div className={`relative ${className}`}>
      <TrackingStatus trackingData={trackingData} />

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

      <TrackingProgress progress={progress} />
    </div>
  );
};