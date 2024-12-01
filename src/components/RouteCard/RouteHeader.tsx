import React from 'react';
import { Ship, Clock, BanknoteIcon, MapPin } from 'lucide-react';
import type { Route } from '../../types';
import { getIslandNameById } from '../../utils/nameUtils';

interface RouteHeaderProps {
  route: Route;
}

export const RouteHeader: React.FC<RouteHeaderProps> = ({ route }) => {
  const fromName = getIslandNameById(route.from);
  const toName = getIslandNameById(route.to);

  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
      <div className="flex items-center space-x-4 mb-4 md:mb-0">
        <div className="bg-blue-100 p-3 rounded-full">
          <Ship className="text-blue-600" size={24} />
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
  );
};