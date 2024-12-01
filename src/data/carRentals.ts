import type { CarRental } from '../types/services';

export const carRentals: CarRental[] = [
  {
    id: 'mykonos-wheels',
    name: 'Mykonos Wheels',
    island: 'mykonos',
    type: 'standard',
    priceRange: 'mid',
    rating: 4.5,
    features: ['New Vehicles', 'Insurance Included', '24/7 Support', 'Free Delivery'],
    imageUrl: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2',
    description: 'Premium car rental service with a wide range of vehicles',
    pricePerDay: 45
  },
  {
    id: 'santorini-drive',
    name: 'Santorini Drive',
    island: 'santorini',
    type: 'luxury',
    priceRange: 'luxury',
    rating: 5,
    features: ['Luxury Vehicles', 'Convertibles', 'Full Insurance', 'Airport Delivery'],
    imageUrl: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537',
    description: 'Experience Santorini in style with our premium fleet',
    pricePerDay: 80
  },
  {
    id: 'naxos-auto',
    name: 'Naxos Auto',
    island: 'naxos',
    type: 'economy',
    priceRange: 'budget',
    rating: 4,
    features: ['Economic Cars', 'Basic Insurance', 'GPS Available', 'Multiple Locations'],
    imageUrl: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2',
    description: 'Affordable and reliable vehicles for exploring Naxos',
    pricePerDay: 30
  }
];