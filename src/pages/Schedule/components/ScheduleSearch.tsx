import React from 'react';
import { Ship, Calendar } from 'lucide-react';
import { islands } from '../../../data/islands';

interface ScheduleSearchProps {
  selectedIsland: string;
  selectedDate: string;
  onIslandChange: (island: string) => void;
  onDateChange: (date: string) => void;
}

export const ScheduleSearch: React.FC<ScheduleSearchProps> = ({
  selectedIsland,
  selectedDate,
  onIslandChange,
  onDateChange
}) => {
  return (
    <div className="max-w-4xl mx-auto mb-12">
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Departure Island
            </label>
            <div className="relative">
              <Ship className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-600" size={20} />
              <select
                value={selectedIsland}
                onChange={(e) => onIslandChange(e.target.value)}
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
                onChange={(e) => onDateChange(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};