import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'el' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-2 text-white hover:text-blue-100 transition-colors"
      aria-label="Toggle language"
    >
      <Globe size={20} />
      <span className="text-sm font-medium">{i18n.language.toUpperCase()}</span>
    </button>
  );
};