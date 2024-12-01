import React from 'react';
import { RouteResults } from '../../../components/RouteResults';
import { getIslandNameById } from '../../../utils/nameUtils';
import type { Route } from '../../../types';

interface ScheduleResultsProps {
  routes: Route[];
  selectedIsland: string;
}

export const ScheduleResults: React.FC<ScheduleResultsProps> = ({
  routes,
  selectedIsland
}) => {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Routes from {getIslandNameById(selectedIsland)}
      </h2>
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-6">
          <RouteResults routes={routes} />
        </div>
      </div>
    </div>
  );
};