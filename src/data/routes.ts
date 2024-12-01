import { Route } from '../types';

export const generateRoutes = (from: string, to: string): Route[] => {
  const routes: Route[] = [
    {
      from,
      to,
      transportType: 'ferry',
      duration: '3h 30m',
      price: 40,
      frequency: 'Daily at 10:00 and 15:00',
      company: 'seajets'
    },
    {
      from,
      to,
      transportType: 'speedboat',
      duration: '2h 15m',
      price: 65,
      frequency: 'Daily at 09:00 and 14:00',
      company: 'bluestarferries'
    },
    {
      from,
      to,
      transportType: 'local-ferry',
      duration: '4h 00m',
      price: 32,
      frequency: 'Daily at 07:30 and 16:00',
      company: 'aegeanseaways'
    }
  ];

  return routes;
};