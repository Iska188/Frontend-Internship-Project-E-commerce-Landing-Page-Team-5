import React, { useState, useRef } from 'react';
import { Text, Button } from '../../atoms';
import { ProductCard } from '../../molecules';
import { TRANSLATIONS } from '../../../constants/translations';
import './dailyBestSells.css';

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
  soldText?: string;
  soldPercentage?: number;
}

const CATEGORIES_DATA: string[] = [
  'All',
  'Deals Of the Day',
  'Beauty',
  'Bread & Juice',
  'Drinks',
  'Milks',
];

const PRODUCTS_DATA: ProductItem[] = [
  {
    id: 'seeds-of-change-red-rice',
    imageSrc: 'src/assets/body/popularproducts/product-7.png', 
    discountBadge: '13%',
    discountBgColor: 'var(--color-sale-green)',
    category: 'Fresh Fruit',
    title: TRANSLATIONS.productCard.product7,
    rating: 5,
    reviewsCount: 2,
    vendor: 'NestFood',
    price: '$28.85',
    oldPrice: '$32.80',
    soldText: 'Sold : 108 / 387',
    soldPercentage: 27.91,
  },
  {
    id: 'angies-kettle-corn',
    imageSrc: 'src/assets/body/popularproducts/product-10.png',
    discountBadge: '8%',
    discountBgColor: 'var(--color-sale-red)',
    statusBadge: 'New',
    statusBadgeType: 'new',
    category: 'Baking material',
    title: TRANSLATIONS.productCard.product10,
    rating: 5,
    reviewsCount: 1,
    vendor: 'Country Crock',
    price: '$48.85',
    oldPrice: '$52.80',
    soldText: 'Sold : 82 / 83',
    soldPercentage: 98.8,
  },
  {
    id: 'foster-farms-crispy',
    imageSrc: 'src/assets/body/popularproducts/product-1.png',
    discountBadge: '10%',
    discountBgColor: 'var(--color-sale-green)',
    category: 'Baking material',
    title: TRANSLATIONS.productCard.product1,
    rating: 0,
    reviewsCount: 0,
    vendor: 'Country Crock',
    price: '$17.85',
    oldPrice: '$19.80',
    soldText: 'Sold : 60 / 80',
    soldPercentage: 75,
  },
  {
    id: 'blue-almonds-vegetables-1',
    imageSrc: 'src/assets/body/popularproducts/product-5.png',
    discountBadge: '8%',
    discountBgColor: 'var(--color-sale-red)',
    statusBadge: 'Hot',
    statusBadgeType: 'hot',
    category: 'Fresh Fruit',
    title: TRANSLATIONS.productCard.product5,
    rating: 0,
    reviewsCount: 0,
    vendor: 'Country Crock',
    price: '$23.85',
    oldPrice: '$25.80',
    soldText: 'Sold : 102 / 262',
    soldPercentage: 38.93,
  },
  {
    id: 'blue-almonds-vegetables-2',
    imageSrc: 'src/assets/body/popularproducts/product-5.png',
    discountBadge: '8%',
    discountBgColor: 'var(--color-sale-red)',
    statusBadge: 'Hot',
    statusBadgeType: 'hot',
    category: 'Fresh Fruit',
    title: TRANSLATIONS.productCard.product5,
    rating: 0,
    reviewsCount: 0,
    vendor: 'Country Crock',
    price: '$23.85',
    oldPrice: '$25.80',
    soldText: 'Sold : 102 / 262',
    soldPercentage: 38.93,
  },
  {
    id: 'blue-almonds-vegetables-3',
    imageSrc: 'src/assets/body/popularproducts/product-5.png',
    discountBadge: '8%',
    discountBgColor: 'var(--color-sale-red)',
    statusBadge: 'Hot',
    statusBadgeType: 'hot',
    category: 'Fresh Fruit',
    title: TRANSLATIONS.productCard.product5,
    rating: 0,
    reviewsCount: 0,
    vendor: 'Country Crock',
    price: '$23.85',
    oldPrice: '$25.80',
    soldText: 'Sold : 102 / 262',
    soldPercentage: 38.93,
  },
  {
    id: 'blue-almonds-vegetables-4',
    imageSrc: 'src/assets/body/popularproducts/product-5.png',
    discountBadge: '8%',
    discountBgColor: 'var(--color-sale-red)',
    statusBadge: 'Hot',
    statusBadgeType: 'hot',
    category: 'Fresh Fruit',
    title: TRANSLATIONS.productCard.product5,
    rating: 0,
    reviewsCount: 0,
    vendor: 'Country Crock',
    price: '$23.85',
    oldPrice: '$25.80',
    soldText: 'Sold : 102 / 262',
    soldPercentage: 38.93,
  },
  {
    id: 'blue-almonds-vegetables-5',
    imageSrc: 'src/assets/body/popularproducts/product-5.png',
    discountBadge: '8%',
    discountBgColor: 'var(--color-sale-green)',
    statusBadge: 'Hot',
    statusBadgeType: 'hot',
    category: 'Fresh Fruit',
    title: TRANSLATIONS.productCard.product5,
    rating: 0,
    reviewsCount: 0,
    vendor: 'Country Crock',
    price: '$23.85',
    oldPrice: '$25.80',
    soldText: 'Sold : 102 / 262',
    soldPercentage: 38.93,
  },
  {
    id: 'blue-almonds-vegetables-6', 
    imageSrc: 'src/assets/body/popularproducts/product-5.png',
    discountBadge: '8%',
    discountBgColor: 'var(--color-sale-green)',
    statusBadge: 'Hot',
    statusBadgeType: 'hot',
    category: 'Fresh Fruit',
    title: TRANSLATIONS.productCard.product5,
    rating: 0,
    reviewsCount: 0,
    vendor: 'Country Crock',
    price: '$23.85',
    oldPrice: '$25.80',
    soldText: 'Sold : 102 / 262',
    soldPercentage: 38.93,
  },
];

export const DailyBestSells: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>(CATEGORIES_DATA[0]);
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 300;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="o-best-sells">
      <div className="o-best-sells__header">
        <div className="o-best-sells__title-group">
          <Text variant="sec-title" as="h2" className="o-best-sells__title">
            Daily Best Sells
          </Text>
          {/* Desktop Controls */}
          <div className="o-best-sells__controls o-best-sells__controls--desktop">
            <Button variant="carousel" className="o-best-sells__arrow" aria-label="Previous" onClick={() => scroll('left')}>
              &larr;
            </Button>
            <Button variant="carousel" className="o-best-sells__arrow" aria-label="Next" onClick={() => scroll('right')}>
              &rarr;
            </Button>
          </div>
        </div>

        <div className="o-best-sells__tabs">
          {CATEGORIES_DATA.map((cat) => {
            const uniqueKey = cat.toLowerCase().replace(/[^a-z0-9]/g, '-');
            return (
              <button
                key={uniqueKey}
                className={`o-best-sells__tab ${activeCategory === cat ? 'is-active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      <div className="o-best-sells__content">
        <article className="o-best-sells__banner">
          <div className="o-best-sells__banner-content">
            <h3 className="o-best-sells__banner-title">
              Bring nature<br />into your<br />home
            </h3>
            <Button variant="primary" className="o-best-sells__banner-btn">
              Shop Now &rarr;
            </Button>
          </div>
        </article>

        <div className="o-best-sells__carousel-wrapper">
          <button className="o-best-sells__mobile-arrow o-best-sells__mobile-arrow--left" onClick={() => scroll('left')} aria-label="Previous">
             &larr;
          </button>
          
          <div className="o-best-sells__grid" ref={carouselRef}>
            {PRODUCTS_DATA.map((product) => {
              const uniqueKey = product.id || product.title.toLowerCase().replace(/[^a-z0-9]/g, '-');
              return (
                <div key={uniqueKey} className="o-best-sells__grid-item">
                  <ProductCard
                    variant="best-sells"
                    {...product}
                    onAdd={() => console.log(`Added ${product.id} to cart`)}
                  />
                </div>
              );
            })}
          </div>

          <button className="o-best-sells__mobile-arrow o-best-sells__mobile-arrow--right" onClick={() => scroll('right')} aria-label="Next">
             &rarr;
          </button>
        </div>
      </div>
    </section>
  );
};