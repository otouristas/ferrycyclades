import { useState, useEffect } from 'react';
import { FerryApi } from '../services/ferryApi';
import type { Route } from '../types';

interface UseIslandRoutesResult {
  routes: Route[];
  isLoading: boolean;
  error: string | null;
}

export const useIslandRoutes = (islandId: string, date: string): UseIslandRoutesResult => {
  const [routes, setRoutes] = useState<Route[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRoutes = async () => {
      if (!islandId || !date) return;

      setIsLoading(true);
      setError(null);

      try {
        const response = await FerryApi.getIslandRoutes(islandId, date);
        if (response.status === 'success') {
          setRoutes(response.routes);
        } else {
          setError(response.message || 'Failed to fetch routes');
        }
      } catch (err) {
        setError('An unexpected error occurred');
      } finally {
        setIsLoading(false);
      }
    };

    fetchRoutes();
  }, [islandId, date]);

  return { routes, isLoading, error };
};