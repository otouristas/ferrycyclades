import React, { useState } from 'react';
import { Ship, Clock, BanknoteIcon, Users, Waves, Info, MapPin } from 'lucide-react';
import classNames from 'classnames';
import type { Route } from '../types';
import { getIslandNameById } from '../utils/nameUtils';
import { ferryCompanies } from '../data/ferryCompanies';
import { LiveTrackingMap } from './LiveTrackingMap';

const islandCoordinates: { [key: string]: [number, number] } = { /* ...coordinates... */ };

interface RouteCardProps {
  route: Route;
  isSelected: boolean;
  onSelect: () => void;
}

export const RouteCard: React.FC<RouteCardProps> = ({ route, isSelected, onSelect }) => {
  const [showTracking, setShowTracking] = useState(false);
  const transportInfo = transportTypeInfo[route.transportType] || {};
  const fromName = getIslandNameById(route.from) || 'Unknown';
  const toName = getIslandNameById(route.to) || 'Unknown';
  const Icon = transportInfo.icon || Ship;
  const company = ferryCompanies[route.company] || {};
  const fromCoords = islandCoordinates[route.from] || [0, 0];
  const toCoords = islandCoordinates[route.to] || [0, 0];

  const cardClasses = classNames(
    'bg-white rounded-xl shadow-lg p-6 transition-all duration-300 relative',
    { 
      'ring-2 ring-blue-500 shadow-blue-100': isSelected, 
      'hover:shadow-xl cursor-pointer': !isSelected 
    }
  );

  return (
    <div className={cardClasses} onClick={onSelect}>
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="flex items-center space-x-4 mb-4 md:mb-0">
          <div className="bg-blue-100 p-3 rounded-full">
            <Icon className="text-blue-600" size={24} />
          </div>
          <div>
            <p className="text-xl font-semibold text-gray-800">
              {fromName} → {toName}
            </p>
            <div className="flex items-center text-sm text-gray-500 mt-1">
              <MapPin size={16} className="mr-1" />
              <span>Route ID: {`${route.from}-${route.to}`}</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:items-center md:space-x-8">
          <div className="flex items-center space-x-2 mb-2 md:mb-0">
            <Clock size={20} className="text-gray-400" />
            <span className="text-gray-600 font-medium">{route.duration}</span>
          </div>
          <div className="flex items-center space-x-2">
            <BanknoteIcon size={20} className="text-gray-400" />
            <span className="text-gray-600 font-medium">€{route.price}</span>
          </div>
        </div>
      </div>

      {/* Additional Details */}
      {/* ... same as your code but optimized with checks */}
    </div>
  );
};
