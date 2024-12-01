export interface LiveTrackingData {
  routeId: string;
  status: 'on-time' | 'delayed' | 'cancelled';
  position: [number, number];
  speed: number;
  heading: number;
  progress: number;
  eta: string;
  delay?: number;
  lastUpdated: string;
}