export interface Island {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
}

export interface Route {
  from: string;
  to: string;
  transportType: 'ferry' | 'speedboat' | 'local-ferry';
  duration: string;
  price: number;
  frequency: string;
  company: keyof typeof import('../data/ferryCompanies').ferryCompanies;
}

export interface SearchResult {
  routes: Route[];
  totalDuration: string;
  totalPrice: number;
}