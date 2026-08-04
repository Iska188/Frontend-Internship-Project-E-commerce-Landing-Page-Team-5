import { TRANSLATIONS } from '../constants/translations';

export interface TopProductItem {
  id: string;
  imageSrc: string;
  title: string;
  rating: number;
  reviewsCount: number;
  currentPrice: number;
  originalPrice: number;
}

export interface TopProductColumn {
  id: string;
  title: string;
  products: TopProductItem[];
}

export const TOP_PRODUCTS_COLUMNS: TopProductColumn[] = [
  {
    id: 'top-selling',
    title: TRANSLATIONS.topproducts.columns.topselling,
    products: [
      {
        id: 'ts-1',
        imageSrc: 'src/assets/body/popularproducts/product-1.png',
        title: TRANSLATIONS.topproducts.products.haagen,
        rating: 3,
        reviewsCount: 1,
        currentPrice: 22.85,
        originalPrice: 24.80,
      },
      {
        id: 'ts-2',
        imageSrc: 'src/assets/body/popularproducts/product-2.png',
        title: TRANSLATIONS.topproducts.products.seedsRedRice,
        rating: 5,
        reviewsCount: 2,
        currentPrice: 28.85,
        originalPrice: 32.80,
      },
      {
        id: 'ts-3',
        imageSrc: 'src/assets/body/popularproducts/product-3.png',
        title: TRANSLATIONS.topproducts.products.blueAlmonds,
        rating: 0,
        reviewsCount: 0,
        currentPrice: 23.85,
        originalPrice: 25.80,
      }
    ]
  },
  {
    id: 'trending-products',
    title: TRANSLATIONS.topproducts.columns.trending,
    products: [
      {
        id: 'tp-1',
        imageSrc: 'src/assets/body/popularproducts/product-4.png',
        title: TRANSLATIONS.topproducts.products.fosterFarms,
        rating: 0,
        reviewsCount: 0,
        currentPrice: 17.85,
        originalPrice: 19.80,
      },
      {
        id: 'tp-2',
        imageSrc: 'src/assets/body/popularproducts/product-1.png',
        title: TRANSLATIONS.topproducts.products.haagen,
        rating: 3,
        reviewsCount: 1,
        currentPrice: 22.85,
        originalPrice: 24.80,
      },
      {
        id: 'tp-3',
        imageSrc: 'src/assets/body/popularproducts/product-6.png',
        title: TRANSLATIONS.topproducts.products.gortons,
        rating: 0,
        reviewsCount: 0,
        currentPrice: 23.85,
        originalPrice: 25.80,
      }
    ]
  },
  {
    id: 'recently-added',
    title: TRANSLATIONS.topproducts.columns.recentlyadded,
    products: [
      {
        id: 'ra-1',
        imageSrc: 'src/assets/body/popularproducts/product-2.png',
        title: TRANSLATIONS.topproducts.products.organicEggs,
        rating: 0,
        reviewsCount: 0,
        currentPrice: 21.00,
        originalPrice: 24.00,
      },
      {
        id: 'ra-2',
        imageSrc: 'src/assets/body/popularproducts/product-7.png',
        title: TRANSLATIONS.topproducts.products.cinnamonVanilla,
        rating: 0,
        reviewsCount: 0,
        currentPrice: 51.00,
        originalPrice: 55.00,
      },
      {
        id: 'ra-3',
        imageSrc: 'src/assets/body/popularproducts/product-8.png',
        title: TRANSLATIONS.topproducts.products.seedsWatermelon,
        rating: 5,
        reviewsCount: 1,
        currentPrice: 61.50,
        originalPrice: 66.00,
      }
    ]
  },
  {
    id: 'top-rated',
    title: TRANSLATIONS.topproducts.columns.toprated,
    products: [
      {
        id: 'tr-1',
        imageSrc: 'src/assets/body/popularproducts/product-9.png',
        title: TRANSLATIONS.topproducts.products.yogurt,
        rating: 5,
        reviewsCount: 1,
        currentPrice: 79.00,
        originalPrice: 99.00,
      },
      {
        id: 'tr-2',
        imageSrc: 'src/assets/body/popularproducts/product-10.png',
        title: TRANSLATIONS.topproducts.products.kettleCorn,
        rating: 5,
        reviewsCount: 1,
        currentPrice: 48.85,
        originalPrice: 52.80,
      },
      {
        id: 'tr-3',
        imageSrc: 'src/assets/body/popularproducts/product-8.png',
        title: TRANSLATIONS.topproducts.products.seedsWatermelon,
        rating: 5,
        reviewsCount: 1,
        currentPrice: 61.50,
        originalPrice: 66.00,
      }
    ]
  }
];