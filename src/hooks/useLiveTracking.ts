```typescript
import { useState, useEffect } from 'react';
import { FerryApi } from '../services/ferryApi';
import type { LiveTrackingData } from '../types/tracking';

interface UseLiveTrackingResult {
  trackingData: LiveTrackingData | null;
  isLoading: boolean;
  error: string | null;
}

export const useLiveTracking = (routeId: string): UseLiveTrackingResult => {
  const [trackingData, setTrackingData] = useState<LiveTrackingData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    let interval: NodeJS.Timeout;

    const fetchTrackingData = async () => {
      try {
        const data = await FerryApi.getLiveUpdates(routeId);
        if (mounted) {
          setTrackingData(data);
          setIsLoading(false);
        }
      } catch (err) {
        if (mounted) {
          setError('Failed to fetch tracking data');
          setIsLoading(false);
        }
      }
    };

    fetchTrackingData();
    interval = setInterval(fetchTrackingData, 30000); // Update every 30 seconds

    return () => {
      mounted = false;
      clearInterval(interval);
    };
  }, [routeId]);

  return { trackingData, isLoading, error };
};
```