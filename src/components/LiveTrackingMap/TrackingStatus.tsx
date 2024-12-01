import React from 'react';
import { Clock, AlertTriangle, CheckCircle } from 'lucide-react';
import type { LiveTrackingData } from '../../types/tracking';

interface TrackingStatusProps {
  trackingData: LiveTrackingData | null;
}

export const TrackingStatus: React.FC<TrackingStatusProps> = ({ trackingData }) => {
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
        return null;
    }
  };

  if (!trackingData) return null;

  return (
    <div className="absolute top-4 right-4 z-10 bg-white rounded-lg shadow-lg p-4 space-y-2">
      <div className="flex items-center space-x-2">
        {getStatusIcon(trackingData.status)}
        <span className={`font-medium ${getStatusColor(trackingData.status)}`}>
          {trackingData.status === 'delayed' 
            ? `Delayed by ${trackingData.delay} minutes`
            : trackingData.status.charAt(0).toUpperCase() + trackingData.status.slice(1)}
        </span>
      </div>
      <div className="text-sm text-gray-600">
        <p>ETA: {trackingData.eta}</p>
        <p>Speed: {Math.round(trackingData.speed)} knots</p>
      </div>
    </div>
  );
};