import type { Business } from '../types/services';

export const businesses: Business[] = [
  {
    id: 'santorini-selene',
    name: 'Selene Restaurant',
    island: 'santorini',
    category: 'restaurant',
    priceRange: 'luxury',
    rating: 5,
    features: ['Fine Dining', 'Wine Cellar', 'Caldera View', 'Tasting Menu'],
    imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5',
    description: 'Michelin-starred restaurant offering modern Greek cuisine'
  },
  {
    id: 'mykonos-scorpios',
    name: 'Scorpios',
    island: 'mykonos',
    category: 'bar',
    priceRange: 'luxury',
    rating: 4.8,
    features: ['Beach Club', 'Sunset Rituals', 'Live DJs', 'Restaurant'],
    imageUrl: 'https://images.unsplash.com/photo-1545128485-c400e7702796',
    description: 'Iconic beach club and cultural hub'
  },
  {
    id: 'naxos-citron',
    name: 'Citron Distillery',
    island: 'naxos',
    category: 'activity',
    priceRange: 'mid',
    rating: 4.5,
    features: ['Tastings', 'Tours', 'Shop', 'Traditional Methods'],
    imageUrl: 'https://images.unsplash.com/photo-1559628352-c9c94c5e0e9d',
    description: 'Traditional citron liqueur distillery with guided tours'
  }
];