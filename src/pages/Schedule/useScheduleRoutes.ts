import { useState, useEffect } from 'react';
import { islands } from '../../data/islands';
import { generateRoutes } from '../../data/routes';
import type { Route } from '../../types';

export const useScheduleRoutes = () => {
  const [selectedIsland, setSelectedIsland] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [routes, setRoutes] = useState<Route[]>([]);

  useEffect(() => {
    if (selectedIsland && selectedDate) {
      const allRoutes = islands
        .filter(island => island.id !== selectedIsland)
        .flatMap(island => generateRoutes(selectedIsland, island.id));
      setRoutes(allRoutes);
    } else {
      setRoutes([]);
    }
  }, [selectedIsland, selectedDate]);

  return {
    routes,
    selectedIsland,
    setSelectedIsland,
    selectedDate,
    setSelectedDate
  };
};