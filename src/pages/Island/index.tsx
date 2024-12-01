import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { SEO } from '../../components/SEO';
import { islands } from '../../data/islands';
import { IslandHeader } from './components/IslandHeader';
import { IslandContent } from './components/IslandContent';

const IslandPage = () => {
  const { id } = useParams<{ id: string }>();
  const island = islands.find(i => i.id === id);
  
  if (!id) {
    return <Navigate to="/islands" replace />;
  }

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

  return (
    <>
      <SEO 
        title={`Ferry Routes to ${island.name}`}
        description={`Find ferry routes, schedules, and book tickets to ${island.name}. Live weather updates, travel tips, and local information for your visit to ${island.name}.`}
        image={island.imageUrl}
      />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50">
        <IslandHeader island={island} />
        <IslandContent island={island} />
      </div>
    </>
  );
};

export default IslandPage;