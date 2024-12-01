import useSWR from 'swr';
import type { WeatherData, WeatherError } from '../types/weather';

const fetcher = async (url: string) => {
  // For development, return mock data instead of making actual API calls
  return {
    current: {
      temp: 25,
      humidity: 65,
      wind_speed: 12,
      weather: [{
        main: 'Clear',
        description: 'sunny',
        icon: '01d'
      }]
    },
    daily: Array(5).fill(null).map((_, i) => ({
      dt: Date.now() + i * 86400000,
      temp: {
        min: 20,
        max: 26
      },
      weather: [{
        main: 'Clear',
        description: 'sunny',
        icon: '01d'
      }]
    }))
  };
};

export const useWeather = (lat: number, lon: number) => {
  const { data, error, isLoading } = useSWR<WeatherData, WeatherError>(
    `weather-${lat}-${lon}`,
    () => fetcher(`/api/weather?lat=${lat}&lon=${lon}`)
  );

  return {
    weather: data,
    isLoading,
    isError: error
  };
};