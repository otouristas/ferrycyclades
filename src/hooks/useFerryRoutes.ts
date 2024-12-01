import { useState, useEffect } from 'react';
import { FerryApi } from '../services/ferryApi';
import type { Route } from '../types';

interface UseFerryRoutesResult {
  routes: Route[];
  isLoading: boolean;
  error: string | null;
}

export const useFerryRoutes = (from: string, to: string, date: string): UseFerryRoutesResult => {
  const [routes, setRoutes] = useState<Route[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRoutes = async () => {
      if (!from || !to || !date) return;

      setIsLoading(true);
      setError(null);

      try {
        const response = await FerryApi.getRoutes(from, to, date);
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
  }, [from, to, date]);

  return { routes, isLoading, error };
};