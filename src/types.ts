export interface MenuItem {
  name: string;
  description: string;
  tags: string[];
}

export interface DiningStation {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  items: MenuItem[];
}

export interface Reservation {
  id: string;
  date: string;
  time: string;
  guests: number;
  name: string;
  email: string;
  phone: string;
  specialRequests?: string;
  code: string;
  createdAt: string;
}

export type ActiveScreen = 'experience' | 'menu' | 'reservations' | 'about';
