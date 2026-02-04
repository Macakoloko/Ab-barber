export interface ServiceItem {
  id: number;
  name: string;
  price: string;
  description: string;
}

export interface BarberInfo {
  name: string;
  role: string;
  image: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}