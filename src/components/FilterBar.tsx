import React from 'react';
import { SlidersHorizontal } from 'lucide-react';

interface FilterBarProps {
  routeCount: number;
  sortBy: 'price' | 'duration';
  onSortChange: (sort: 'price' | 'duration') => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({ 
  routeCount, 
  sortBy, 
  onSortChange 
}) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-white p-4 rounded-lg shadow-sm">
      <div className="flex items-center space-x-2 mb-4 sm:mb-0">
        <SlidersHorizontal size={20} className="text-gray-400" />
        <span className="text-gray-600">
          <strong>{routeCount}</strong> routes found
        </span>
      </div>
      
      <div className="flex items-center space-x-4">
        <span className="text-gray-600 text-sm">Sort by:</span>
        <div className="flex space-x-2">
          <button
            onClick={() => onSortChange('price')}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
              sortBy === 'price'
                ? 'bg-blue-100 text-blue-600'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            Price
          </button>
          <button
            onClick={() => onSortChange('duration')}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
              sortBy === 'duration'
                ? 'bg-blue-100 text-blue-600'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            Duration
          </button>
        </div>
      </div>
    </div>
  );
};