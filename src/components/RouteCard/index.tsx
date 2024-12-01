import React, { useState } from 'react';
import type { Route } from '../../types';
import { LiveTrackingMap } from '../LiveTrackingMap';
import { RouteHeader } from './RouteHeader';
import { RouteDetails } from './RouteDetails';
import { RouteFeatures } from './RouteFeatures';
import { CompanyLogo } from './CompanyLogo';
import { islandCoordinates } from '../../utils/coordinates';
import { ferryCompanies } from '../../data/ferryCompanies';

interface RouteCardProps {
  route: Route;
  isSelected: boolean;
  onSelect: () => void;
}

export const RouteCard: React.FC<RouteCardProps> = ({ route, isSelected, onSelect }) => {
  const [showTracking, setShowTracking] = useState(false);
  const company = ferryCompanies[route.company];
  const fromCoords = islandCoordinates[route.from];
  const toCoords = islandCoordinates[route.to];

  return (
    <div 
      className={`bg-white rounded-xl shadow-lg p-6 transition-all duration-300 relative ${
        isSelected 
          ? 'ring-2 ring-blue-500 shadow-blue-100' 
          : 'hover:shadow-xl cursor-pointer'
      }`}
      onClick={onSelect}
    >
      <RouteHeader route={route} />
      <RouteDetails route={route} />
      <CompanyLogo company={company} />

      {isSelected && (
        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="space-y-4">
            <RouteFeatures route={route} />

            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowTracking(!showTracking);
              }}
              className="w-full bg-blue-50 text-blue-600 font-medium py-2.5 rounded-lg hover:bg-blue-100 transition-colors"
            >
              {showTracking ? 'Hide Live Tracking' : 'Show Live Tracking'}
            </button>

            {showTracking && fromCoords && toCoords && (
              <LiveTrackingMap
                routeId={`${route.from}-${route.to}`}
                from={fromCoords}
                to={toCoords}
                className="mt-4"
              />
            )}

            <button className="w-full bg-blue-600 text-white font-medium py-2.5 rounded-lg hover:bg-blue-700 transition-colors">
              Book Now for €{route.price}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};