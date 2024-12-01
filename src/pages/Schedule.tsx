import React, { useState } from 'react';
import { Calendar, Search, Filter, Ship } from 'lucide-react';
import { islands } from '../data/islands';
import { generateRoutes } from '../data/routes';
import { RouteResults } from '../components/RouteResults';
import { getIslandNameById } from '../utils/nameUtils';

const Schedule = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedIsland, setSelectedIsland] = useState('');
  const [routes, setRoutes] = useState<any[]>([]);

  const handleSearch = () => {
    if (selectedIsland) {
      const allRoutes = islands
        .filter(island => island.id !== selectedIsland)
        .flatMap(island => generateRoutes(selectedIsland, island.id));
      setRoutes(allRoutes);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50 pt-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Ferry Schedule</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find all available ferry routes and schedules between the Cyclades islands
          </p>
        </div>

        {/* Search Form */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">Departure Island</label>
                <div className="relative">
                  <Ship className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-600" size={20} />
                  <select
                    value={selectedIsland}
                    onChange={(e) => setSelectedIsland(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
                  >
                    <option value="">Select island</option>
                    {islands.map(island => (
                      <option key={island.id} value={island.id}>{island.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">Date</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-600" size={20} />
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            <button
              onClick={handleSearch}
              className="mt-6 w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Search Routes
            </button>
          </div>
        </div>

        {/* Results */}
        {routes.length > 0 && (
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Routes from {getIslandNameById(selectedIsland)}
            </h2>
            <RouteResults routes={routes} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Schedule;