import React from 'react';
import type { Island } from '../../../types';

interface IslandHeaderProps {
  island: Island;
}

export const IslandHeader: React.FC<IslandHeaderProps> = ({ island }) => {
  return (
    <div className="relative h-[500px] overflow-hidden">
      <img
        src={island.imageUrl}
        alt={island.name}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60"></div>
      <div className="absolute bottom-0 left-0 right-0 p-8">
        <div className="container mx-auto">
          <h1 className="text-5xl font-bold text-white mb-4">{island.name}</h1>
          <p className="text-xl text-gray-100 max-w-3xl">{island.description}</p>
        </div>
      </div>
    </div>
  );
};