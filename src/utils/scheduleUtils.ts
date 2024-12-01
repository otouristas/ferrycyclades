import { Route } from '../types';

export const formatDuration = (duration: string): string => {
  const [hours, minutes] = duration.split('h ');
  const h = parseInt(hours);
  const m = parseInt(minutes);
  
  if (h === 0) {
    return `${m}m`;
  } else if (m === 0) {
    return `${h}h`;
  }
  return `${h}h ${m}m`;
};

export const calculateTotalDuration = (routes: Route[]): string => {
  let totalMinutes = routes.reduce((acc, route) => {
    const [hours, minutes] = route.duration.split('h ').map(part => 
      parseInt(part.replace('m', ''))
    );
    return acc + (hours * 60) + (minutes || 0);
  }, 0);

  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  return formatDuration(`${hours}h ${minutes}m`);
};

export const isRouteAvailable = (date: string, frequency: string): boolean => {
  const dateObj = new Date(date);
  const month = dateObj.getMonth() + 1;
  
  // Check seasonal availability
  if (frequency.includes('Apr-Oct') && (month < 4 || month > 10)) {
    return false;
  }
  
  return true;
};