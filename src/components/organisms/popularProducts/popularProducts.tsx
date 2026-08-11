import React, { useState } from 'react';
import { Text } from '../../atoms';
import { ProductCard } from '../../molecules';
import { TRANSLATIONS } from '../../../constants/translations';
import './popularProducts.css';

interface ProductItem {
  id: string;
  imageSrc: string;
  discountBadge?: string;
  discountBgColor?: string;
  statusBadge?: string;
  statusBadgeType?: 'discount' | 'hot' | 'new' | 'count';
  category: string;
  title: string;
  rating: number;
  reviewsCount: number;
  vendor: string;
  price: string;
  oldPrice?: string;
}

const CATEGORIES_DATA: string[] = [
  TRANSLATIONS.header.categories.all,
  TRANSLATIONS.header.categories.baking,
  TRANSLATIONS.header.categories.fruit,
  TRANSLATIONS.header.categories.milk,
  TRANSLATIONS.header.categories.meat,
  TRANSLATIONS.featuredCategories.tabs.vegetables,
];

const PRODUCTS_DATA: ProductItem[] = [
  {
    id: 'foster-farms-crispy',
    imageSrc: 'src/assets/body/popularproducts/product-1.png',
    discountBadge: '10%',
    discountBgColor: 'var(--color-primary)',
    category: 'Baking material',
    title: TRANSLATIONS.productCard.product1,
    rating: 0,
    reviewsCount: 0,
    vendor: 'Country Crock',
    price: '$17.85',
    oldPrice: '$19.80',
  },
  {
    id: 'organic-cage-grade-eggs',
    imageSrc: 'src/assets/body/popularproducts/product-2.png',
    discountBadge: '13%',
    discountBgColor: 'var(--color-primary)',
    category: 'Baking material',
    title: TRANSLATIONS.productCard.product2,
    rating: 0,
    reviewsCount: 0,
    vendor: 'Hambgvr Hel',
    price: '$21.00',
    oldPrice: '$24.00',
  },
  {
    id: 'haagen-caramel-ice-cream',
    imageSrc: 'src/assets/body/popularproducts/product-3.png',
    discountBadge: '8%',
    discountBgColor: 'var(--color-primary)',
    category: 'Baking material',
    title: TRANSLATIONS.productCard.product3,
    rating: 3,
    reviewsCount: 1,
    vendor: 'Hambgvr Hel',
    price: '$22.85',
    oldPrice: '$24.80',
  },
  {
    id: 'all-natural-style-chicken',
    imageSrc: 'src/assets/body/popularproducts/product-4.png',
    statusBadge: 'Sale',
    statusBadgeType: 'new',
    discountBadge: '66%',
    discountBgColor: 'var(--color-sale-lightblue)',
    category: 'Fresh Seafood',
    title: TRANSLATIONS.productCard.product4,
    rating: 0,
    reviewsCount: 0,
    vendor: 'Wonderful',
    price: '$23.00',
    oldPrice: '$122.00',
  },
  {
    id: 'blue-almonds-lightly-salted',
    imageSrc: 'src/assets/body/popularproducts/product-5.png',
    statusBadge: 'Hot',
    statusBadgeType: 'hot',
    discountBadge: '8%',
    discountBgColor: 'var(--color-primary)',
    category: 'Fresh Fruit',
    title: TRANSLATIONS.productCard.product5,
    rating: 0,
    reviewsCount: 0,
    vendor: 'Country Crock',
    price: '$23.85',
    oldPrice: '$25.80',
  },
  {
    id: 'gortons-beer-battered-fish',
    imageSrc: 'src/assets/body/popularproducts/product-6.png',
    discountBadge: '8%',
    discountBgColor: 'var(--color-sale-yellow)',
    category: 'Fresh Seafood',
    title: TRANSLATIONS.productCard.product6,
    rating: 0,
    reviewsCount: 0,
    vendor: 'Hambgvr Hel',
    price: '$23.85',
    oldPrice: '$25.80',
  },
  {
    id: 'seeds-of-change-organic-rice',
    imageSrc: 'src/assets/body/popularproducts/product-7.png',
    discountBadge: '13%',
    discountBgColor: 'var(--color-primary)',
    category: 'Fresh Fruit',
    title: TRANSLATIONS.productCard.product7,
    rating: 5,
    reviewsCount: 2,
    vendor: 'NestFood',
    price: '$28.85',
    oldPrice: '$32.80',
  },
  {
    id: 'canada-dry-ginger-ale',
    imageSrc: 'src/assets/body/popularproducts/product-8.png',
    discountBadge: '3%',
    discountBgColor: 'var(--color-sale-blue)',
    category: 'Baking material',
    title: TRANSLATIONS.productCard.product8,
    rating: 0,
    reviewsCount: 0,
    vendor: 'Hambgvr Hel',
    price: '$32.85',
    oldPrice: '$35.80',
  },
  {
    id: 'encore-seafoods-stuffed-alaskan',
    imageSrc: 'src/assets/body/popularproducts/product-9.png',
    discountBadge: '6%',
    discountBgColor: 'var(--color-primary)',
    category: 'Clothing & Beauty',
    title: TRANSLATIONS.productCard.product9,
    rating: 0,
    reviewsCount: 0,
    vendor: 'Hambgvr Hel',
    price: '$35.85',
    oldPrice: '$37.80',
  },
  {
    id: 'angles-sweet-salty-kettle-corn',
    imageSrc: 'src/assets/body/popularproducts/product-10.png',
    statusBadge: 'New',
    statusBadgeType: 'new',
    discountBadge: '8%',
    discountBgColor: 'var(--color-sale-red)',
    category: 'Baking material',
    title: TRANSLATIONS.productCard.product10,
    rating: 5,
    reviewsCount: 1,
    vendor: 'Country Crock',
    price: '$48.85',
    oldPrice: '$52.80',
  },
];

export const PopularProducts: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>(CATEGORIES_DATA[0]);

  return (
    <section className="o-popular-products">
      <div className="o-popular-products__header">
        <Text variant="sec-title" as="h2" className="o-popular-products__title">
          {TRANSLATIONS.header.categories.title}
        </Text>
        <div className="o-popular-products__tabs">
          {CATEGORIES_DATA.map((cat) => {
            const uniqueKey = cat.toLowerCase().replace(/[^a-z0-9]/g, '-');
            return (
              <button
                key={uniqueKey}
                className={`o-popular-products__tab ${activeCategory === cat ? 'is-active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>
      <div className="o-popular-products__grid">
        {PRODUCTS_DATA.map((product) => {
          const uniqueKey = product.id || product.title.toLowerCase().replace(/[^a-z0-9]/g, '-');
          return (
            <ProductCard
              key={uniqueKey}
              variant="popular"
              {...product} 
            />
          );
        })}
      </div>
    </section>
  );
};