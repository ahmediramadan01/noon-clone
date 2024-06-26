export interface Products {
  id?: string;
  title: string;
  title_ar: string;
  description: string;
  description_ar: string;
  quantity: number;
  price: number;
  discountPercentage?: number;
  priceAfterDescount?: number;
  colors?: string[];
  thumbnail: string;
  images: string[];
  category: string;
  subcategory: string;
  brand?: string;
  rating?: number;
  ratingQuantity?: number;
  quantityInStock?: number;
}
