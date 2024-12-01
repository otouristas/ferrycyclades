import React from 'react';
import { Info, Users, Waves } from 'lucide-react';
import type { Route } from '../../types';
import { getTransportTypeInfo } from './transportTypeInfo';

interface RouteDetailsProps {
  route: Route;
}

export const RouteDetails: React.FC<RouteDetailsProps> = ({ route }) => {
  const transportInfo = getTransportTypeInfo(route.transportType);

  return (
    <div className="mt-4 space-y-3">
      <div className="flex items-start space-x-3 text-sm">
        <Info size={18} className="text-gray-400 mt-0.5" />
        <p className="text-gray-600">{transportInfo.description}</p>
      </div>
      <div className="flex items-start space-x-3 text-sm">
        <Users size={18} className="text-gray-400 mt-0.5" />
        <p className="text-gray-600">{transportInfo.capacity}</p>
      </div>
      <div className="flex items-start space-x-3 text-sm">
        <Waves size={18} className="text-gray-400 mt-0.5" />
        <p className="text-gray-600">
          <span className="font-medium">Frequency:</span> {route.frequency}
        </p>
      </div>
    </div>
  );
};