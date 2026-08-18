export interface WishlistItemMock {
  id: string | number;
  title: string;
  price: number;
  oldPrice?: number;
  image: string;
  rating?: number;
  reviewsCount?: number;
  category?: string;
  vendor?: string;
  inStock?: boolean;
}

export const WISHLIST_INITIAL_MOCK: WishlistItemMock[] = [
  {
    id: 'seeds-of-change-organic-quinoa-brown',
    title: 'Seeds of Change Organic Quinoa',
    price: 28.85,
    oldPrice: 32.8,
    image: 'src/assets/body/popularproducts/product-7.png',
    rating: 4.5,
    reviewsCount: 4,
    category: 'Snack',
    vendor: 'NestFood',
    inStock: true,
  },
  {
    id: 'blue-almonds-lightly-salted',
    title: 'Blue Diamond Almonds Lightly',
    price: 23.85,
    oldPrice: 25.8,
    image: 'src/assets/body/popularproducts/product-5.png',
    rating: 4.0,
    reviewsCount: 4,
    category: 'Pet Foods',
    vendor: 'NestFood',
    inStock: true,
  },
];
