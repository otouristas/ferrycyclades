export interface ServiceFilters {
  island: string;
  priceRange: 'budget' | 'mid' | 'luxury' | 'all';
  rating: number | null;
  amenities: string[];
}

export interface Hotel {
  id: string;
  name: string;
  island: string;
  type: 'hotel' | 'resort' | 'villa' | 'apartment';
  priceRange: 'budget' | 'mid' | 'luxury';
  rating: number;
  amenities: string[];
  imageUrl: string;
  description: string;
  priceFrom: number;
}

export interface CarRental {
  id: string;
  name: string;
  island: string;
  type: 'economy' | 'standard' | 'luxury' | 'suv';
  priceRange: 'budget' | 'mid' | 'luxury';
  rating: number;
  features: string[];
  imageUrl: string;
  description: string;
  pricePerDay: number;
}

export interface Business {
  id: string;
  name: string;
  island: string;
  category: 'restaurant' | 'bar' | 'shop' | 'activity';
  priceRange: 'budget' | 'mid' | 'luxury';
  rating: number;
  features: string[];
  imageUrl: string;
  description: string;
}