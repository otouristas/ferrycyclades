import React, { useState } from 'react';
import { islands } from '../data/islands';
import { Ship, Calendar } from 'lucide-react';

interface SearchFormProps {
  onSearch: (from: string, to: string, date: string) => void;
}

export const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(from, to, date);
  };

  return (
    <form onSubmit={handleSubmit} className="glass-card rounded-xl shadow-2xl p-8 max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="relative">
          <label className="block text-gray-700 text-sm font-medium mb-2">From</label>
          <div className="relative">
            <Ship className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-600" size={20} />
            <select
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white text-gray-700"
              required
            >
              <option value="">Select departure</option>
              {islands.map(island => (
                <option key={island.id} value={island.id}>{island.name}</option>
              ))}
            </select>
          </div>
        </div>
        
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-2">To</label>
          <div className="relative">
            <Ship className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-600" size={20} />
            <select
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white text-gray-700"
              required
            >
              <option value="">Select destination</option>
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
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-700"
              required
            />
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-6 rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Search Routes
      </button>
    </form>
  );
};