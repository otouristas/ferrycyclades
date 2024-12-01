import React from 'react';
import { RouteResults } from '../../../components/RouteResults';
import type { Route } from '../../../types';

interface IslandRoutesProps {
  routes: Route[];
}

export const IslandRoutes: React.FC<IslandRoutesProps> = ({ routes }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="p-6 border-b border-gray-100">
        <h2 className="text-xl font-semibold text-gray-800">Available Routes</h2>
        <p className="text-gray-500 text-sm mt-1">Select your preferred option</p>
      </div>
      <div className="p-6">
        <RouteResults routes={routes} />
      </div>
    </div>
  );
};