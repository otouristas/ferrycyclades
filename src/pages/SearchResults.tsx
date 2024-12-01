import React from 'react';
import { InteractiveMap } from '../components/InteractiveMap';
import { RouteResults } from '../components/RouteResults';
import { Ship, Info, Calendar } from 'lucide-react';
import type { Route } from '../types';
import { getIslandNameById } from '../utils/nameUtils';

interface SearchResultsProps {
  routes: Route[];
  from: string;
  to: string;
}

export const SearchResults: React.FC<SearchResultsProps> = ({ routes, from, to }) => {
  const fromName = getIslandNameById(from);
  const toName = getIslandNameById(to);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-3 mb-4">
            <Ship size={24} className="text-blue-400" />
            <h1 className="text-2xl font-bold">Available Routes</h1>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-8">
            <div className="flex items-center space-x-3">
              <span className="text-xl font-medium">{fromName}</span>
              <span className="text-blue-400">→</span>
              <span className="text-xl font-medium">{toName}</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-300 mt-2 sm:mt-0">
              <Calendar size={18} />
              <span>{new Date().toLocaleDateString('en-US', { 
                month: 'long',
                day: 'numeric',
                year: 'numeric'
              })}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Travel Tips */}
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 mb-8">
          <div className="flex items-start space-x-4">
            <div className="bg-blue-100 p-2 rounded-full">
              <Info size={24} className="text-blue-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Travel Tips</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Arrive at least 30 minutes before departure</li>
                <li>• Keep your booking confirmation handy</li>
                <li>• Check weather conditions before your journey</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Map and Routes Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Interactive Map Card */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-xl font-semibold text-gray-800">Route Map</h2>
              <p className="text-gray-500 text-sm mt-1">Visual representation of your journey</p>
            </div>
            <div className="p-6">
              <InteractiveMap selectedIsland={from} destinationIsland={to} />
            </div>
          </div>

          {/* Route Results Card */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-xl font-semibold text-gray-800">Available Options</h2>
              <p className="text-gray-500 text-sm mt-1">Select your preferred route</p>
            </div>
            <div className="p-6">
              <RouteResults routes={routes} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};