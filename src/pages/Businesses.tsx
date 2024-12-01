import React, { useState } from 'react';
import { Store, Star, Euro, Filter, Utensils, Coffee, ShoppingBag, Umbrella, MapPin } from 'lucide-react';
import { islands } from '../data/islands';
import type { Business, ServiceFilters } from '../types/services';
import { businesses } from '../data/businesses';

const Businesses = () => {
  const [filters, setFilters] = useState<ServiceFilters>({
    island: '',
    priceRange: 'all',
    rating: null,
    amenities: []
  });

  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'restaurant', name: 'Restaurants', icon: Utensils },
    { id: 'bar', name: 'Bars & Cafes', icon: Coffee },
    { id: 'shop', name: 'Shops', icon: ShoppingBag },
    { id: 'activity', name: 'Activities', icon: Umbrella }
  ];

  const filteredBusinesses = businesses.filter(business => {
    const matchesSearch = business.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      business.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesIsland = !filters.island || business.island === filters.island;
    const matchesPriceRange = filters.priceRange === 'all' || business.priceRange === filters.priceRange;
    const matchesCategory = !selectedCategory || business.category === selectedCategory;
    const matchesRating = !filters.rating || business.rating >= filters.rating;

    return matchesSearch && matchesIsland && matchesPriceRange && matchesCategory && matchesRating;
  });

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        size={16}
        className={`${index < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50 pt-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Local Businesses</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the best local businesses across the Cyclades
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <button
            onClick={() => setSelectedCategory('')}
            className={`px-6 py-3 rounded-lg flex items-center space-x-2 ${
              selectedCategory === '' 
                ? 'bg-blue-600 text-white' 
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            <Store size={20} />
            <span>All</span>
          </button>
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-lg flex items-center space-x-2 ${
                selectedCategory === category.id 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              <category.icon size={20} />
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Filters Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Island Select */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Island</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <select
                  value={filters.island}
                  onChange={(e) => setFilters({ ...filters, island: e.target.value })}
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
                >
                  <option value="">All Islands</option>
                  {islands.map(island => (
                    <option key={island.id} value={island.id}>{island.name}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Price Range */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
              <div className="relative">
                <Euro className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <select
                  value={filters.priceRange}
                  onChange={(e) => setFilters({ ...filters, priceRange: e.target.value as any })}
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
                >
                  <option value="all">All Prices</option>
                  <option value="budget">Budget</option>
                  <option value="mid">Mid-Range</option>
                  <option value="luxury">Luxury</option>
                </select>
              </div>
            </div>

            {/* Rating Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Minimum Rating</label>
              <div className="relative">
                <Star className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <select
                  value={filters.rating || ''}
                  onChange={(e) => setFilters({ ...filters, rating: e.target.value ? Number(e.target.value) : null })}
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
                >
                  <option value="">Any Rating</option>
                  <option value="4">4+ Stars</option>
                  <option value="4.5">4.5+ Stars</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBusinesses.map((business) => (
            <div key={business.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <img
                  src={business.imageUrl}
                  alt={business.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-800">
                  {business.category.charAt(0).toUpperCase() + business.category.slice(1)}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{business.name}</h3>
                <div className="flex items-center space-x-1 mb-2">
                  {renderStars(business.rating)}
                </div>
                <p className="text-gray-600 mb-4">{business.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {business.features.map((feature, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredBusinesses.length === 0 && (
          <div className="text-center py-12">
            <Store size={48} className="mx-auto text-gray-400 mb-4" />
            <h3 className="text-xl font-medium text-gray-900 mb-2">No businesses found</h3>
            <p className="text-gray-600">Try adjusting your filters or search terms</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Businesses;