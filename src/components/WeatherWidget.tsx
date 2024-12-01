import React from 'react';
import { Cloud, Sun, CloudRain, Wind, Droplets, CloudSun } from 'lucide-react';
import { useWeather } from '../hooks/useWeather';

interface WeatherWidgetProps {
  lat: number;
  lon: number;
  className?: string;
}

export const WeatherWidget: React.FC<WeatherWidgetProps> = ({ lat, lon, className = '' }) => {
  const { weather, isLoading, isError } = useWeather(lat, lon);

  if (isLoading) {
    return (
      <div className={`bg-white rounded-xl shadow-lg p-6 ${className}`}>
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/3 mb-4"></div>
          <div className="space-y-3">
            <div className="h-6 bg-gray-200 rounded"></div>
            <div className="h-6 bg-gray-200 rounded w-5/6"></div>
          </div>
        </div>
      </div>
    );
  }

  if (isError || !weather) {
    return (
      <div className={`bg-white rounded-xl shadow-lg p-6 ${className}`}>
        <p className="text-gray-500">Weather data unavailable</p>
      </div>
    );
  }

  const getWeatherIcon = (condition: string) => {
    switch (condition?.toLowerCase()) {
      case 'sunny':
      case 'clear':
        return <Sun className="text-yellow-500" size={24} />;
      case 'partly-cloudy':
        return <CloudSun className="text-gray-500" size={24} />;
      case 'cloudy':
        return <Cloud className="text-gray-500" size={24} />;
      case 'rainy':
        return <CloudRain className="text-blue-500" size={24} />;
      default:
        return <Sun className="text-yellow-500" size={24} />;
    }
  };

  return (
    <div className={`bg-white rounded-xl shadow-lg p-6 ${className}`}>
      {/* Current Weather */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Current Weather</h3>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {getWeatherIcon(weather.current.weather[0].main)}
            <div>
              <p className="text-3xl font-bold text-gray-900">{Math.round(weather.current.temp)}°C</p>
              <p className="text-gray-600 capitalize">{weather.current.weather[0].description}</p>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-gray-600">
              <Wind size={18} />
              <span>{Math.round(weather.current.wind_speed)} km/h</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <Droplets size={18} />
              <span>{weather.current.humidity}%</span>
            </div>
          </div>
        </div>
      </div>

      {/* 5-Day Forecast */}
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-4">5-Day Forecast</h3>
        <div className="grid grid-cols-5 gap-2">
          {weather.daily.slice(0, 5).map((day, index) => (
            <div key={index} className="text-center">
              <p className="text-sm text-gray-600 mb-2">
                {new Date(day.dt * 1000).toLocaleDateString('en-US', { weekday: 'short' })}
              </p>
              <div className="flex justify-center mb-2">
                {getWeatherIcon(day.weather[0].main)}
              </div>
              <p className="text-sm font-medium">
                {Math.round(day.temp.max)}° <span className="text-gray-500">{Math.round(day.temp.min)}°</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};