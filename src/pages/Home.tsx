import React, { useState } from 'react';
import { SearchForm } from '../components/SearchForm';
import { Partners } from '../components/Partners';
import { IslandCard } from '../components/IslandCard';
import { islands } from '../data/islands';
import { generateRoutes } from '../data/routes';
import type { Route } from '../types';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const Home = () => {
  const [searchResults, setSearchResults] = useState<{
    routes: Route[];
    from: string;
    to: string;
  } | null>(null);
  
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleSearch = (from: string, to: string, date: string) => {
    const routes = generateRoutes(from, to);
    navigate(`/search?from=${from}&to=${to}&date=${date}`);
  };

  const handleIslandSelect = (islandId: string) => {
    navigate(`/island/${islandId}`);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="hero-pattern py-32 px-4">
        <div className="container mx-auto text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {t('home.hero.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            {t('home.hero.subtitle')}
          </p>
        </div>
      </div>

      {/* Search Form */}
      <div className="container mx-auto search-form-wrapper">
        <SearchForm onSearch={handleSearch} />
        <Partners />
      </div>

      {/* Popular Destinations */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">{t('home.popular.title')}</h2>
        <p className="text-gray-600 mb-8">{t('home.popular.subtitle')}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {islands.slice(0, 6).map((island) => (
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

export default Home;