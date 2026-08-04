import React from 'react';
import { Text } from '../../atoms';
import { TopProductCard } from '../../molecules/topProductCard/topProductCard';
import { TOP_PRODUCTS_COLUMNS } from '../../../mocks/mockedTopProducts';
import './topProducts.css';

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