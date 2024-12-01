import type { Hotel } from '../types/services';

export const hotels: Hotel[] = [
  {
    id: 'santorini-grace',
    name: 'Grace Santorini',
    island: 'santorini',
    type: 'hotel',
    priceRange: 'luxury',
    rating: 5,
    amenities: ['Infinity Pool', 'Spa', 'Fine Dining', 'Sea View', 'Butler Service', 'Champagne Lounge'],
    imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945',
    description: 'Iconic luxury hotel featuring stunning caldera views and award-winning cuisine',
    priceFrom: 800
  },
  {
    id: 'mykonos-belvedere',
    name: 'Belvedere Hotel',
    island: 'mykonos',
    type: 'hotel',
    priceRange: 'luxury',
    rating: 5,
    amenities: ['Pool', 'Spa', 'Fine Dining', 'Beach Club', 'Fitness Center', 'Bar'],
    imageUrl: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b',
    description: 'Sophisticated luxury in the heart of Mykonos Town',
    priceFrom: 600
  },
  {
    id: 'naxos-beach',
    name: 'Naxos Beach Resort',
    island: 'naxos',
    type: 'resort',
    priceRange: 'mid',
    rating: 4,
    amenities: ['Beach Access', 'Pool', 'Restaurant', 'Kids Club', 'Water Sports'],
    imageUrl: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d',
    description: 'Family-friendly resort on the beautiful Plaka Beach',
    priceFrom: 200
  },
  {
    id: 'paros-naoussa',
    name: 'Naoussa Bay Hotel',
    island: 'paros',
    type: 'hotel',
    priceRange: 'mid',
    rating: 4,
    amenities: ['Sea View', 'Pool', 'Restaurant', 'Bar', 'Bike Rental'],
    imageUrl: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a',
    description: 'Charming hotel in the heart of Naoussa village',
    priceFrom: 180
  },
  {
    id: 'milos-apartments',
    name: 'Milos Breeze Boutique',
    island: 'milos',
    type: 'apartment',
    priceRange: 'mid',
    rating: 4.5,
    amenities: ['Kitchenette', 'Sea View', 'Pool', 'Free Parking', 'WiFi'],
    imageUrl: 'https://images.unsplash.com/photo-1582719508461-905c673771fd',
    description: 'Modern apartments with stunning views of the Aegean',
    priceFrom: 150
  }
];