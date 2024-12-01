import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, MapPin } from 'lucide-react';
import { islands } from '../data/islands';
import { IslandCard } from '../components/IslandCard';
import { InteractiveMap } from '../components/InteractiveMap';

const Islands = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIsland, setSelectedIsland] = useState<string | null>(null);
  const navigate = useNavigate();

  const filteredIslands = islands.filter(island =>
    island.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    island.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleIslandSelect = (islandId: string) => {
    navigate(`/island/${islandId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50 pt-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Cyclades Islands</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the unique charm of each Cycladic island, from iconic destinations to hidden gems
          </p>
        </div>

        {/* Search and Map Section */}
        <div className="mb-12">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-center space-x-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="Search islands..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>
            <div className="p-6">
              <InteractiveMap
                selectedIsland={selectedIsland || undefined}
                onIslandSelect={handleIslandSelect}
                height="h-[400px]"
              />
            </div>
          </div>
        </div>

        {/* Islands Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredIslands.map((island) => (
            <IslandCard
              key={island.id}
              island={island}
              onSelect={() => handleIslandSelect(island.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Islands;