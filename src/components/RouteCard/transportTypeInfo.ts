import { Ship, Sailboat, Anchor } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface TransportTypeInfo {
  icon: LucideIcon;
  description: string;
  capacity: string;
  features: string[];
}

interface TransportTypes {
  [key: string]: TransportTypeInfo;
}

const transportTypes: TransportTypes = {
  'ferry': {
    icon: Ship,
    description: 'Large passenger and vehicle ferry with multiple decks and amenities',
    capacity: 'Up to 1500 passengers and 200 vehicles',
    features: [
      'Vehicle Transport',
      'Restaurant',
      'Cafe',
      'Lounge Areas',
      'Outdoor Decks',
      'Wi-Fi'
    ]
  },
  'speedboat': {
    icon: Sailboat,
    description: 'High-speed catamaran for quick island transfers',
    capacity: 'Up to 400 passengers',
    features: [
      'Air Conditioning',
      'Cafe',
      'Comfortable Seating',
      'Luggage Storage',
      'Wi-Fi',
      'Charging Points'
    ]
  },
  'local-ferry': {
    icon: Anchor,
    description: 'Traditional ferry for short island connections',
    capacity: 'Up to 200 passengers',
    features: [
      'Open Deck',
      'Basic Seating',
      'Luggage Space',
      'Local Experience',
      'Flexible Schedule',
      'Affordable'
    ]
  }
};

export const getTransportTypeInfo = (type: string): TransportTypeInfo => {
  return transportTypes[type] || transportTypes.ferry;
};