import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { InteractiveMap } from '../components/InteractiveMap';
import { RouteResults } from '../components/RouteResults';
import { WeatherWidget } from '../components/WeatherWidget';
import { generateRoutes } from '../data/routes';
import { islands } from '../data/islands';
import { 
  Anchor, MapPin, Sun, CloudSun, Waves, Camera, History, Utensils, 
  Ship, Calendar, Info, Building2, Car, Plane, Coffee, Umbrella, 
  ShoppingBag, Sparkles, Star
} from 'lucide-react';

const IslandPage = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedDestination, setSelectedDestination] = useState<string | null>(null);
  
  const island = islands.find(i => i.id === id);
  
  const islandCoordinates: { [key: string]: [number, number] } = {
    'amorgos': [36.8333, 25.8833],
    'anafi': [36.3667, 25.7667],
    'andros': [37.8833, 24.8167],
    'antiparos': [37.0333, 25.0833],
    'delos': [37.3964, 25.2674],
    'donousa': [37.0833, 25.8000],
    'folegandros': [36.6167, 24.9167],
    'ios': [36.7167, 25.3333],
    'kea': [37.6167, 24.3333],
    'kimolos': [36.7833, 24.5667],
    'koufonisia': [36.9333, 25.6000],
    'kythnos': [37.3833, 24.4167],
    'milos': [36.7167, 24.4167],
    'mykonos': [37.4500, 25.3333],
    'naxos': [37.1000, 25.3667],
    'paros': [37.0833, 25.1333],
    'santorini': [36.3833, 25.4617],
    'serifos': [37.1500, 24.4833],
    'sifnos': [36.9667, 24.7000],
    'sikinos': [36.6833, 25.1167],
    'syros': [37.4500, 24.9167],
    'tinos': [37.5333, 25.1667]
  };

  if (!island) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50 pt-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Island Not Found</h1>
          <p className="text-gray-600">The island you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  const routes = selectedDestination ? generateRoutes(island.id, selectedDestination) : [];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50 pt-24">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <img
          src={island.imageUrl}
          alt={island.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container mx-auto">
            <h1 className="text-4xl font-bold text-white mb-4">{island.name}</h1>
            <p className="text-xl text-gray-200">{island.description}</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-12 relative z-10 pb-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-12">
            {/* Map */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-xl font-semibold text-gray-800">Interactive Map</h2>
                <p className="text-gray-500 text-sm mt-1">Explore routes and connections</p>
              </div>
              <div className="p-6">
                <InteractiveMap
                  selectedIsland={island.id}
                  destinationIsland={selectedDestination || undefined}
                  onIslandSelect={setSelectedDestination}
                  height="h-[400px]"
                />
              </div>
            </div>

            {/* Available Routes */}
            {selectedDestination && (
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-6 border-b border-gray-100">
                  <h2 className="text-xl font-semibold text-gray-800">Available Routes</h2>
                  <p className="text-gray-500 text-sm mt-1">Select your preferred option</p>
                </div>
                <div className="p-6">
                  <RouteResults routes={routes} />
                </div>
              </div>
            )}
          </div>

          {/* Right Column */}
          <div className="space-y-12">
            {/* Quick Facts */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-6">Quick Facts</h2>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <MapPin className="text-blue-600 mt-1" size={20} />
                  <div>
                    <h3 className="font-medium text-gray-800">Location</h3>
                    <p className="text-gray-600">Cyclades, Aegean Sea</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Sun className="text-blue-600 mt-1" size={20} />
                  <div>
                    <h3 className="font-medium text-gray-800">Best Season</h3>
                    <p className="text-gray-600">May to October</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Ship className="text-blue-600 mt-1" size={20} />
                  <div>
                    <h3 className="font-medium text-gray-800">Port</h3>
                    <p className="text-gray-600">Main Port</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Calendar className="text-blue-600 mt-1" size={20} />
                  <div>
                    <h3 className="font-medium text-gray-800">High Season</h3>
                    <p className="text-gray-600">July - August</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Weather Widget */}
            {islandCoordinates[island.id] && (
              <WeatherWidget
                lat={islandCoordinates[island.id][0]}
                lon={islandCoordinates[island.id][1]}
              />
            )}

            {/* Things to Do */}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default IslandPage;