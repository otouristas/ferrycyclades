import type { Route } from '../types';
import type { LiveTrackingData } from '../types/tracking';
import { ferrySchedules } from '../data/ferrySchedules';

interface FerryApiResponse {
  routes: Route[];
  status: 'success' | 'error';
  message?: string;
}

export class FerryApi {
  private static baseUrl = 'https://api.ferry2cyclades.com/v1';
  private static mockDelay = 800;

  static async getRoutes(from: string, to: string, date: string): Promise<FerryApiResponse> {
    await this.delay(this.mockDelay);
    const routes = ferrySchedules.generateSchedule(date);
    return {
      status: 'success',
      routes
    };
  }

  static async getIslandRoutes(islandId: string, date: string): Promise<FerryApiResponse> {
    await this.delay(this.mockDelay);
    const routes = ferrySchedules.getRoutesByIsland(islandId, date);
    return {
      status: 'success',
      routes
    };
  }

  static async getLiveUpdates(routeId: string): Promise<LiveTrackingData> {
    await this.delay(this.mockDelay);

    const mockProgress = Math.random();
    const mockStatus = Math.random() > 0.8 ? 'delayed' : 'on-time';
    const mockDelay = mockStatus === 'delayed' ? Math.floor(Math.random() * 30) : 0;

    return {
      routeId,
      status: mockStatus as 'on-time' | 'delayed',
      position: [37.4500, 25.3333],
      speed: 15 + Math.random() * 5,
      heading: Math.random() * 360,
      progress: mockProgress,
      eta: this.calculateETA(mockProgress, mockDelay),
      delay: mockDelay,
      lastUpdated: new Date().toISOString()
    };
  }

  private static calculateETA(progress: number, delay: number): string {
    const now = new Date();
    const remainingMinutes = Math.floor((1 - progress) * 120) + delay;
    now.setMinutes(now.getMinutes() + remainingMinutes);
    return now.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit'
    });
  }

  private static delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}