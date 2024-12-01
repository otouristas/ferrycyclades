import type { Route } from '../types';

export const ferrySchedules = {
  generateSchedule(date: string): Route[] {
    // Check if date is in summer season (April to October)
    const dateObj = new Date(date);
    const month = dateObj.getMonth() + 1;
    const isHighSeason = month >= 4 && month <= 10;

    // Base schedules available year-round
    const baseSchedules: Route[] = [
      {
        from: 'mykonos',
        to: 'santorini',
        transportType: 'speedboat',
        duration: '2h 15m',
        price: 65,
        frequency: 'Daily at 09:30 and 14:30',
        company: 'seajets'
      },
      // Add more year-round routes here
    ];

    // Additional summer routes
    const summerSchedules: Route[] = isHighSeason ? [
      {
        from: 'mykonos',
        to: 'delos',
        transportType: 'local-ferry',
        duration: '30m',
        price: 20,
        frequency: 'Daily at 09:00, 11:00, 13:00 (Apr-Oct)',
        company: 'aegeanseaways'
      },
      // Add more summer-only routes here
    ] : [];

    return [...baseSchedules, ...summerSchedules];
  },

  getRoutesByIsland(islandId: string, date: string): Route[] {
    const allRoutes = this.generateSchedule(date);
    return allRoutes.filter(route => route.from === islandId || route.to === islandId);
  }
};