import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchResults } from './SearchResults';
import { generateRoutes } from '../../data/routes';
import { LoadingSpinner } from '../../components/LoadingSpinner';

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const from = searchParams.get('from');
  const to = searchParams.get('to');
  const date = searchParams.get('date');

  if (!from || !to || !date) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50 pt-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Invalid Search</h1>
          <p className="text-gray-600">Please provide valid search parameters.</p>
        </div>
      </div>
    );
  }

  const routes = generateRoutes(from, to);

  return <SearchResults routes={routes} from={from} to={to} />;
};

export default SearchPage;