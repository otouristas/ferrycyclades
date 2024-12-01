import React from 'react';
import { Info } from 'lucide-react';

export const TravelTips = () => {
  return (
    <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 mb-8">
      <div className="flex items-start space-x-4">
        <div className="bg-blue-100 p-2 rounded-full">
          <Info size={24} className="text-blue-600" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Travel Tips</h3>
          <ul className="text-gray-600 space-y-2">
            <li>• Arrive at least 30 minutes before departure</li>
            <li>• Keep your booking confirmation handy</li>
            <li>• Check weather conditions before your journey</li>
          </ul>
        </div>
      </div>
    </div>
  );
};