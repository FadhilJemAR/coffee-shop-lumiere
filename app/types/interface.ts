export interface IProduct {
  name: string;
  imageUrl: string;
  price: number;
  description: string;
  badge?: {
    isBestSeller: boolean;
    rating: number;
  };
}
