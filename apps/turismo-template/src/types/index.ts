export type TrailStatus = 'open' | 'caution' | 'closed';
export type AlertType = 'info' | 'warning' | 'danger';
type AccommodationType = 'hotel' | 'rural' | 'glamping' | 'apartment';

export interface Alert {
  id: string;
  type: AlertType;
  message: string;
  active: boolean;
  createdAt: string;
}

interface Weather {
  location: string;
  temp: number;
  condition: string;
  icon: 'sun' | 'cloud' | 'rain' | 'storm' | 'fog' | 'partly-cloudy';
  humidity: number;
  wind: number;
  uvIndex: number;
  updatedAt: string;
}

export interface Trail {
  id: string;
  name: string;
  distance: string;
  duration: string;
  difficulty: 'Baja' | 'Media' | 'Alta' | 'Muy Alta';
  status: TrailStatus;
  statusNote: string;
  description: string;
  image: string;
  lat: number;
  lng: number;
  tags: string[];
}

export interface Accommodation {
  id: string;
  name: string;
  type: AccommodationType;
  location: string;
  stars: number;
  priceFrom: number;
  occupancy: number;
  available: boolean;
  image: string;
  description: string;
  amenities: string[];
  lat: number;
  lng: number;
}

export interface Experience {
  id: string;
  name: string;
  category: string;
  duration: string;
  price: number;
  priceUnit: string;
  description: string;
  image: string;
  tags: string[];
  featured: boolean;
}

export interface CalendarEvent {
  id: string;
  title: string;
  date: string;
  endDate?: string;
  location: string;
  category: string;
  description: string;
  image: string;
  free: boolean;
  price?: number;
  active: boolean;
}

export interface Stats {
  visitorsThisMonth: number;
  activeTrails: number;
  upcomingEvents: number;
  avgOccupancy: number;
}

export interface LaPalmaData {
  meta: {
    lastUpdated: string;
    alerts: Alert[];
  };
  weather: Weather;
  trails: Trail[];
  accommodation: Accommodation[];
  experiences: Experience[];
  events: CalendarEvent[];
  stats: Stats;
}
