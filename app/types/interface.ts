export interface IProduct {
  name: string;
  imageUrl: string;
  description: string;
  badge?: {
    isBestSeller: boolean;
    rating: number;
  };
}
