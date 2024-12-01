import React from 'react';
import { MapPin, Sun, Ship, Calendar, Umbrella, Camera, Utensils } from 'lucide-react';
import { WeatherWidget } from '../../components/WeatherWidget';
import type { Island } from '../../types';

interface IslandInfoProps {
  island: Island;
}

const islandCoordinates: { [key: string]: [number, number] } = {
  'amorgos': [36.8333, 25.8833],
  'anafi': [36.3667, 25.7667],
  'andros': [37.8833, 24.8167],
  'antiparos': [37.0333, 25.0833],
  'delos': [37.3964, 25.2674],
  'donousa': [37.0833, 25.8000],
  'folegandros': [36.6167, 24.9167],
  'ios': [36.7167, 25.3333],
  'kea': [37.6167, 24.3333],
  'kimolos': [36.7833, 24.5667],
  'koufonisia': [36.9333, 25.6000],
  'kythnos': [37.3833, 24.4167],
  'milos': [36.7167, 24.4167],
  'mykonos': [37.4500, 25.3333],
  'naxos': [37.1000, 25.3667],
  'paros': [37.0833, 25.1333],
  'santorini': [36.3833, 25.4617],
  'serifos': [37.1500, 24.4833],
  'sifnos': [36.9667, 24.7000],
  'sikinos': [36.6833, 25.1167],
  'syros': [37.4500, 24.9167],
  'tinos': [37.5333, 25.1667]
};

export const IslandInfo: React.FC<IslandInfoProps> = ({ island }) => {
  return (
    <div className="space-y-12">
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

      {islandCoordinates[island.id] && (
        <WeatherWidget
          lat={islandCoordinates[island.id][0]}
          lon={islandCoordinates[island.id][1]}
        />
      )}

      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">Things to Do</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-blue-50 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Umbrella className="text-blue-600" size={24} />
            </div>
            <h3 className="font-medium text-gray-800 mb-2">Beaches</h3>
            <p className="text-gray-600 text-sm">Explore beautiful beaches</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-50 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Camera className="text-blue-600" size={24} />
            </div>
            <h3 className="font-medium text-gray-800 mb-2">Sightseeing</h3>
            <p className="text-gray-600 text-sm">Visit historic sites</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-50 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Utensils className="text-blue-600" size={24} />
            </div>
            <h3 className="font-medium text-gray-800 mb-2">Dining</h3>
            <p className="text-gray-600 text-sm">Local cuisine</p>
          </div>
        </div>
      </div>
    </div>
  );
};