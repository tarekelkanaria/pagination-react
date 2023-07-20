export interface ProductItemType {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  category: string;
  thumbnail: string;
  images: string[];
}

export interface ProductDetails extends ProductItemType {
  productBG: string;
}
