export enum ActivityCategory {
  SNOW = 'Nieve',
  WATER = 'Agua',
  AIR = 'Aire',
  EARTH = 'Tierra'
}

export interface Activity {
  id: string;
  name: string;
  category: ActivityCategory;
  season: string;
  description: string;
  image: string;
}

export interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  recommended: boolean;
}

export interface AiResponseState {
  loading: boolean;
  response: string | null;
  error: string | null;
}