import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { SEO } from '../../components/SEO';
import { SearchForm } from '../../components/SearchForm';
import { Partners } from '../../components/Partners';
import { IslandCard } from '../../components/IslandCard';
import { islands } from '../../data/islands';

const Home = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleSearch = (from: string, to: string, date: string) => {
    navigate(`/search?from=${from}&to=${to}&date=${date}`);
  };

  const handleIslandSelect = (islandId: string) => {
    navigate(`/island/${islandId}`);
  };

  return (
    <>
      <SEO 
        title="Book Ferry Tickets to Greek Islands"
        description="Find and book ferry routes between the beautiful Cyclades islands. Easy booking, live tracking, and the best prices for your Greek island hopping adventure."
      />
      <div className="min-h-screen">
        {/* Rest of the component remains the same */}
      </div>
    </>
  );
};

export default Home;