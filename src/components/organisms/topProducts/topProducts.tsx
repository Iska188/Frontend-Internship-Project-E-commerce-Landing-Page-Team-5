import React from 'react';
import { Text } from '../../atoms';
import { TopProductCard } from '../../molecules/topProductCard/topProductCard';
import './topProducts.css';

interface TopProductItem {
  id: string;
  imageSrc: string;
  title: string;
  rating: number;
  reviewsCount: number;
  currentPrice: number;
  originalPrice: number;
}

interface TopProductColumn {
  id: string;
  title: string;
  products: TopProductItem[];
}

const TOP_PRODUCTS_COLUMNS: TopProductColumn[] = [
  {
    id: 'top-selling',
    title: 'Top Selling',
    products: [
      {
        id: 'ts-1',
        imageSrc: 'src/assets/body/popularproducts/product-1.png',
        title: 'Haagen Caramel Cone Ice Cream Boxed',
        rating: 3,
        reviewsCount: 1,
        currentPrice: 22.85,
        originalPrice: 24.80,
      },
      {
        id: 'ts-2',
        imageSrc: 'src/assets/body/popularproducts/product-2.png',
        title: 'Seeds of Change Organic Red Rice',
        rating: 5,
        reviewsCount: 2,
        currentPrice: 28.85,
        originalPrice: 32.80,
      },
      {
        id: 'ts-3',
        imageSrc: 'src/assets/body/popularproducts/product-3.png',
        title: 'Blue Almonds Lightly Salted Vegetables',
        rating: 0,
        reviewsCount: 0,
        currentPrice: 23.85,
        originalPrice: 25.80,
      }
    ]
  },
  {
    id: 'trending-products',
    title: 'Trending Products',
    products: [
      {
        id: 'tp-1',
        imageSrc: 'src/assets/body/popularproducts/product-4.png',
        title: 'Foster Farms Takeout Crispy Classic',
        rating: 0,
        reviewsCount: 0,
        currentPrice: 17.85,
        originalPrice: 19.80,
      },
      {
        id: 'tp-2',
        imageSrc: 'src/assets/body/popularproducts/product-1.png',
        title: 'Haagen Caramel Cone Ice Cream Boxed',
        rating: 3,
        reviewsCount: 1,
        currentPrice: 22.85,
        originalPrice: 24.80,
      },
      {
        id: 'tp-3',
        imageSrc: 'src/assets/body/popularproducts/product-6.png',
        title: 'Gorton’s Beer Battered Fish Fillets',
        rating: 0,
        reviewsCount: 0,
        currentPrice: 23.85,
        originalPrice: 25.80,
      }
    ]
  },
  {
    id: 'recently-added',
    title: 'Recently added',
    products: [
      {
        id: 'ra-1',
        imageSrc: 'src/assets/body/popularproducts/product-2.png',
        title: 'Organic Cage Grade A Large Eggs',
        rating: 0,
        reviewsCount: 0,
        currentPrice: 21.00,
        originalPrice: 24.00,
      },
      {
        id: 'ra-2',
        imageSrc: 'src/assets/body/popularproducts/product-7.png',
        title: 'Naturally Flavored Cinnamon Vanilla',
        rating: 0,
        reviewsCount: 0,
        currentPrice: 51.00,
        originalPrice: 55.00,
      },
      {
        id: 'ra-3',
        imageSrc: 'src/assets/body/popularproducts/product-8.png',
        title: 'Seeds of Change Organic Watermelon',
        rating: 5,
        reviewsCount: 1,
        currentPrice: 61.50,
        originalPrice: 66.00,
      }
    ]
  },
  {
    id: 'top-rated',
    title: 'Top Rated',
    products: [
      {
        id: 'tr-1',
        imageSrc: 'src/assets/body/popularproducts/product-9.png',
        title: 'Pre-portioned, low-fat ice cream yogurt',
        rating: 5,
        reviewsCount: 1,
        currentPrice: 79.00,
        originalPrice: 99.00,
      },
      {
        id: 'tr-2',
        imageSrc: 'src/assets/body/popularproducts/product-10.png',
        title: 'Angie’s Sweet & Salty Kettle Corn',
        rating: 5,
        reviewsCount: 1,
        currentPrice: 48.85,
        originalPrice: 52.80,
      },
      {
        id: 'tr-3',
        imageSrc: 'src/assets/body/popularproducts/product-8.png',
        title: 'Seeds of Change Organic Watermelon',
        rating: 5,
        reviewsCount: 1,
        currentPrice: 61.50,
        originalPrice: 66.00,
      }
    ]
  }
];

export const TopProducts: React.FC = () => {
  return (
    <section className="o-top-products">
      <div className="o-top-products__container">
        {TOP_PRODUCTS_COLUMNS.map((column) => (
          <div className="o-top-products__column" key={column.id}>
            <div className="o-top-products__header">
              <Text variant="sec-title" as="h3" className="o-top-products__title">
                {column.title}
              </Text>
              <div className="o-top-products__title-underline"></div>
            </div>
            
            <div className="o-top-products__list">
              {column.products.map((product) => (
                <div className="o-top-products__item" key={product.id}>
                  <TopProductCard
                    imageSrc={product.imageSrc}
                    title={product.title}
                    rating={product.rating}
                    reviewsCount={product.reviewsCount}
                    currentPrice={product.currentPrice}
                    originalPrice={product.originalPrice}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};