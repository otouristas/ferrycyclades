import React from 'react';
import type { Route } from '../../types';
import { getTransportTypeInfo } from './transportTypeInfo';

interface RouteFeaturesProps {
  route: Route;
}

export const RouteFeatures: React.FC<RouteFeaturesProps> = ({ route }) => {
  const transportInfo = getTransportTypeInfo(route.transportType);

  return (
    <div className="space-y-2">
      <p className="font-medium text-gray-800">Features:</p>
      <ul className="grid grid-cols-2 gap-2">
        {transportInfo.features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm text-gray-600">
            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};