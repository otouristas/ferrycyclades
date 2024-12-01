import React from 'react';
import { MapPin, Sun, Ship, Calendar } from 'lucide-react';
import { WeatherWidget } from '../../../components/WeatherWidget';
import { IslandActivities } from './IslandActivities';
import { islandCoordinates } from '../../../utils/coordinates';
import type { Island } from '../../../types';

interface IslandInfoProps {
  island: Island;
}

export const IslandInfo: React.FC<IslandInfoProps> = ({ island }) => {
  const coordinates = islandCoordinates[island.id];

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">Quick Facts</h2>
        <div className="grid grid-cols-2 gap-6">
          <div className="flex items-start space-x-3">
            <MapPin className="text-blue-600 mt-1" size={20} />
            <div>
              <h3 className="font-medium text-gray-800">Location</h3>
              <p className="text-gray-600">Cyclades, Aegean Sea</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <Sun className="text-blue-600 mt-1" size={20} />
            <div>
              <h3 className="font-medium text-gray-800">Best Season</h3>
              <p className="text-gray-600">May to October</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <Ship className="text-blue-600 mt-1" size={20} />
            <div>
              <h3 className="font-medium text-gray-800">Port</h3>
              <p className="text-gray-600">Main Port</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <Calendar className="text-blue-600 mt-1" size={20} />
            <div>
              <h3 className="font-medium text-gray-800">High Season</h3>
              <p className="text-gray-600">July - August</p>
            </div>
          </div>
        </div>
      </div>

      {coordinates && (
        <WeatherWidget
          lat={coordinates[0]}
          lon={coordinates[1]}
        />
      )}

      <IslandActivities />
    </div>
  );
};