export interface ProductImageSet {
  yellow: string;
  rose: string;
  white: string;
}

export interface Product {
  name: string;
  weight: number;
  price: string;                     
  images: ProductImageSet;
  popularityOutOfFive: number;
  roundedPopularity: number;        
}