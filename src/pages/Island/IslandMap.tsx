import React from 'react';
import { InteractiveMap } from '../../components/InteractiveMap';
import type { Island } from '../../types';

interface IslandMapProps {
  island: Island;
  selectedDestination: string | null;
  onDestinationSelect: (destination: string) => void;
}

export const IslandMap: React.FC<IslandMapProps> = ({
  island,
  selectedDestination,
  onDestinationSelect
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="p-6 border-b border-gray-100">
        <h2 className="text-xl font-semibold text-gray-800">Interactive Map</h2>
        <p className="text-gray-500 text-sm mt-1">Explore routes and connections</p>
      </div>
      <div className="p-6">
        <InteractiveMap
          selectedIsland={island.id}
          destinationIsland={selectedDestination || undefined}
          onIslandSelect={onDestinationSelect}
          height="h-[400px]"
        />
      </div>
    </div>
  );
};