import React from 'react';
import { Umbrella, Camera, Utensils } from 'lucide-react';

export const IslandActivities = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">Things to Do</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="text-center">
          <div className="bg-blue-50 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
            <Umbrella className="text-blue-600" size={24} />
          </div>
          <h3 className="font-medium text-gray-800 mb-2">Beaches</h3>
          <p className="text-gray-600 text-sm">Explore beautiful beaches</p>
        </div>
        <div className="text-center">
          <div className="bg-blue-50 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
            <Camera className="text-blue-600" size={24} />
          </div>
          <h3 className="font-medium text-gray-800 mb-2">Sightseeing</h3>
          <p className="text-gray-600 text-sm">Visit historic sites</p>
        </div>
        <div className="text-center">
          <div className="bg-blue-50 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
            <Utensils className="text-blue-600" size={24} />
          </div>
          <h3 className="font-medium text-gray-800 mb-2">Dining</h3>
          <p className="text-gray-600 text-sm">Local cuisine</p>
        </div>
      </div>
    </div>
  );
};