import React, { useState, useEffect, useRef } from 'react';
import { Ship, Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from './LanguageSwitcher';

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHoppingMenuOpen, setIsHoppingMenuOpen] = useState(false);
  const hoppingMenuRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsHoppingMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (hoppingMenuRef.current && !hoppingMenuRef.current.contains(event.target as Node)) {
        setIsHoppingMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const menuItems = [
    { name: t('nav.routes'), to: '/schedule' },
    { name: t('nav.islands'), to: '/islands' },
    { name: t('nav.contact'), to: '/contact' }
  ];

  const hoppingItems = [
    { name: t('nav.hotels'), to: '/hotels' },
    { name: t('nav.carRentals'), to: '/car-rentals' },
    { name: t('nav.businesses'), to: '/businesses' }
  ];

  return (
    <header className="fixed w-full z-50 bg-gradient-to-r from-gray-900 to-gray-800 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link 
            to="/" 
            className="flex items-center space-x-3 text-white hover:opacity-90 transition-opacity"
          >
            <Ship className="h-8 w-8" />
            <span className="text-xl font-bold">ferry2cyclades.com</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                className={`text-white font-medium hover:text-blue-100 transition-colors ${
                  location.pathname === item.to ? 'border-b-2 border-white' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            <div className="relative" ref={hoppingMenuRef}>
              <button
                onClick={() => setIsHoppingMenuOpen(!isHoppingMenuOpen)}
                className="flex items-center space-x-1 text-white font-medium hover:text-blue-100 transition-colors"
              >
                <span>{t('nav.hopping')}</span>
                <ChevronDown 
                  size={16} 
                  className={`transform transition-transform ${isHoppingMenuOpen ? 'rotate-180' : ''}`} 
                />
              </button>
              
              {isHoppingMenuOpen && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
                  {hoppingItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.to}
                      className={`block px-4 py-2 text-gray-800 hover:bg-blue-50 transition-colors ${
                        location.pathname === item.to ? 'bg-blue-50' : ''
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <LanguageSwitcher />
          </nav>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white hover:text-blue-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-700">
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  className={`text-white font-medium hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors ${
                    location.pathname === item.to ? 'bg-gray-700' : ''
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              <div className="px-4 py-2">
                <div className="text-white font-medium mb-2">{t('nav.hopping')}</div>
                <div className="pl-4 space-y-2">
                  {hoppingItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.to}
                      className={`block text-gray-300 hover:text-white transition-colors py-1 ${
                        location.pathname === item.to ? 'text-white' : ''
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="px-4">
                <LanguageSwitcher />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};