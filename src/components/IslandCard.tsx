import React from 'react';
import type { Island } from '../types/';
import { ArrowRight } from 'lucide-react';

interface IslandCardProps {
  island: Island;
  onSelect: () => void;
}

export const IslandCard = React.memo<IslandCardProps>(({ island, onSelect }) => {
  return (
    <div 
      className="group rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
      onClick={onSelect}
    >
      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
        <img
          src={island.imageUrl}
          alt={island.name}
          className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.src = 'https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?w=800&auto=format&fit=crop';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">{island.name}</h3>
      </div>
      <div className="p-6">
        <p className="text-gray-600 mb-4">{island.description}</p>
        <button
          className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors"
        >
          Explore routes
          <ArrowRight size={18} className="ml-2" />
        </button>
      </div>
    </div>
  );
});

IslandCard.displayName = 'IslandCard';