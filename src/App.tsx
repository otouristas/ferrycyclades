import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { LoadingSpinner } from './components/LoadingSpinner';

const Home = React.lazy(() => import('./pages/Home'));
const Search = React.lazy(() => import('./pages/Search'));
const Islands = React.lazy(() => import('./pages/Islands'));
const IslandPage = React.lazy(() => import('./pages/Island'));
const Schedule = React.lazy(() => import('./pages/Schedule'));
const Hotels = React.lazy(() => import('./pages/Hotels'));
const CarRentals = React.lazy(() => import('./pages/CarRentals'));
const Businesses = React.lazy(() => import('./pages/Businesses'));
const Contact = React.lazy(() => import('./pages/Contact'));

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50">
        <Header />
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/islands" element={<Islands />} />
            <Route path="/island/:id" element={<IslandPage />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/hotels" element={<Hotels />} />
            <Route path="/car-rentals" element={<CarRentals />} />
            <Route path="/businesses" element={<Businesses />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
}

export default App;