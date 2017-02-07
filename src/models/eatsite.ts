// Data model for an Eatsite

export interface Eatsite {
  id: number;
  name: string;
  type: string;
  cost: number;
  open: boolean;
  featured: boolean;
}
