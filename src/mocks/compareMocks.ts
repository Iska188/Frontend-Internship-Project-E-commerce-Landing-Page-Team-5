export interface CompareItemMock {
  id: string | number;
  title: string;
  price: number;
  oldPrice?: number;
  image: string;
  rating: number;
  reviewsCount?: number;
  category: string;
  vendor?: string;
  description?: string;
  weight?: string;
  ingredients?: string;
  qualityScore?: number;
  healthGrade?: string;
  freshnessIndex?: string;
  shelfLife?: string;
  inStock?: boolean;
}

export const COMPARE_INITIAL_MOCK: CompareItemMock[] = [
  {
    id: 'seeds-of-change-organic-quinoa-brown',
    title: 'Seeds of Change Organic Quinoa, Brown, & Red Rice',
    price: 28.85,
    oldPrice: 32.8,
    image: 'src/assets/body/popularproducts/product-7.png',
    rating: 4.5,
    reviewsCount: 4,
    category: 'Snack',
    vendor: 'NestFood',
    description: 'A wholesome combination of organic brown and red rice with nutritious quinoa, gently seasoned with sea salt.',
    weight: '500g',
    ingredients: 'Organic Whole Grain Brown Rice, Organic Quinoa, Organic Red Rice, Organic Sunflower Oil, Sea Salt',
    qualityScore: 96,
    healthGrade: 'Nutri-Score A (Organic Certified)',
    freshnessIndex: '99% Peak Freshness',
    shelfLife: '12 Months (Cool & Dry Place)',
    inStock: true,
  },
  {
    id: 'all-natural-italian-chicken-meatballs',
    title: 'All Natural Italian-Style Chicken Meatballs',
    price: 52.85,
    oldPrice: 55.8,
    image: 'src/assets/body/popularproducts/product-2.png',
    rating: 4.8,
    reviewsCount: 12,
    category: 'Meat',
    vendor: 'Stouffer',
    description: 'Fully cooked, premium Italian style chicken meatballs prepared with savory herbs, garlic, and aged parmesan cheese.',
    weight: '650g',
    ingredients: 'Antibiotic-Free Chicken, Romano Cheese, Organic Garlic, Parsley, Sea Salt, Black Pepper, Olive Oil',
    qualityScore: 94,
    healthGrade: 'Nutri-Score A (High Protein)',
    freshnessIndex: '97% Flash Frozen',
    shelfLife: '9 Months (Keep Frozen)',
    inStock: true,
  },
  {
    id: 'angies-boomchickapop-sweet-salty-popcorn',
    title: "Angie's Boomchickapop Sweet & Salty Kettle Corn",
    price: 48.85,
    oldPrice: 52.8,
    image: 'src/assets/body/popularproducts/product-3.png',
    rating: 4.2,
    reviewsCount: 8,
    category: 'Snack',
    vendor: 'StarKist',
    description: 'Deliciously crunchy popcorn with the perfect balance of sweet cane sugar and sea salt in every handful.',
    weight: '400g',
    ingredients: 'Non-GMO Popcorn, Pure Cane Sugar, Sunflower Oil, Pure Sea Salt (Gluten-Free Certified)',
    qualityScore: 89,
    healthGrade: 'Nutri-Score B (Gluten-Free)',
    freshnessIndex: '98% Crispy Guarantee',
    shelfLife: '6 Months (Store Dry)',
    inStock: true,
  },
];
