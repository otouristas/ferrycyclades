import React, { useState } from 'react';
import { RouteCard } from './RouteCard';
import { FilterBar } from './FilterBar';
import type { Route } from '../types';

interface RouteResultsProps {
  routes: Route[];
}

export const RouteResults: React.FC<RouteResultsProps> = ({ routes }) => {
  const [selectedRoute, setSelectedRoute] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<'price' | 'duration'>('price');

  const sortedRoutes = [...routes].sort((a, b) => {
    if (sortBy === 'price') {
      return a.price - b.price;
    }
    // Convert duration strings to minutes for comparison
    const getDurationMinutes = (duration: string) => {
      const [hours, minutes] = duration.split('h ').map(part => 
        parseInt(part.replace('m', ''))
      );
      return hours * 60 + (minutes || 0);
    };
    return getDurationMinutes(a.duration) - getDurationMinutes(b.duration);
  });

  return (
    <div className="space-y-6">
      <FilterBar 
        routeCount={routes.length}
        sortBy={sortBy}
        onSortChange={setSortBy}
      />
      
      <div className="space-y-6">
        {sortedRoutes.map((route, index) => (
          <RouteCard
            key={`${route.from}-${route.to}-${index}`}
            route={route}
            isSelected={selectedRoute === `${route.from}-${route.to}-${index}`}
            onSelect={() => setSelectedRoute(`${route.from}-${route.to}-${index}`)}
          />
        ))}
      </div>
    </div>
  );
};