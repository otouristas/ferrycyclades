import React, { useState } from 'react';
import { IslandMap } from './IslandMap';
import { IslandInfo } from './IslandInfo';
import { IslandRoutes } from './IslandRoutes';
import { generateRoutes } from '../../../data/routes';
import type { Island } from '../../../types';

interface IslandContentProps {
  island: Island;
}

export const IslandContent: React.FC<IslandContentProps> = ({ island }) => {
  const [selectedDestination, setSelectedDestination] = useState<string | null>(null);
  const routes = selectedDestination ? generateRoutes(island.id, selectedDestination) : [];

  return (
    <div className="container mx-auto px-4 -mt-20 relative z-10 pb-16">
      <div className="grid lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <IslandMap
            island={island}
            selectedDestination={selectedDestination}
            onDestinationSelect={setSelectedDestination}
          />
          {selectedDestination && routes.length > 0 && (
            <IslandRoutes routes={routes} />
          )}
        </div>
        <IslandInfo island={island} />
      </div>
    </div>
  );
};