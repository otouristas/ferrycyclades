import React from 'react';

interface TrackingProgressProps {
  progress: number;
}

export const TrackingProgress: React.FC<TrackingProgressProps> = ({ progress }) => {
  return (
    <div className="mt-4 bg-gray-200 rounded-full h-2">
      <div
        className="bg-blue-600 h-2 rounded-full transition-all duration-500"
        style={{ width: `${progress * 100}%` }}
      />
    </div>
  );
};