import React, { useState, useMemo } from 'react';
import { Text } from '../../atoms';
import { ProductCard } from '../../molecules';
import { TRANSLATIONS } from '../../../constants/translations';
import { POPULAR_CATEGORIES_MOCK, POPULAR_PRODUCTS_MOCK } from '../../../mocks/popularProductsMocks';
import './popularProducts.css';

export const PopularProducts: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>(POPULAR_CATEGORIES_MOCK[0]);

  const filteredProducts = useMemo(() => {
    if (activeCategory === TRANSLATIONS.header.categories.all) {
      return POPULAR_PRODUCTS_MOCK;
    }
    return POPULAR_PRODUCTS_MOCK.filter((product) => product.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className="o-popular-products">
      <div className="o-popular-products__header">
        <Text variant="sec-title" as="h2" className="o-popular-products__title">
          {TRANSLATIONS.header.categories.title}
        </Text>
        <div className="o-popular-products__tabs">
          {POPULAR_CATEGORIES_MOCK.map((cat) => {
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
        {filteredProducts.map((product) => {
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