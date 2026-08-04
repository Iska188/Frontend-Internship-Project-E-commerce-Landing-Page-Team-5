import React, { useState, useRef } from 'react';
import { Text, Button } from '../../atoms';
import { ProductCard } from '../../molecules';
import { TRANSLATIONS } from '../../../constants/translations';
import { PRODUCTS_DATA } from '../../../mocks/dailyBestSells';
import './dailyBestSells.css';

const CATEGORIES_DATA: string[] = [
  'All',
  'Deals Of the Day',
  'Beauty',
  'Bread & Juice',
  'Drinks',
  'Milks',
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
            {TRANSLATIONS.dailyBestSells.title}
          </Text>

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
              {TRANSLATIONS.dailyBestSells.banner.row1}<br />{TRANSLATIONS.dailyBestSells.banner.row2}<br />{TRANSLATIONS.dailyBestSells.banner.row3}
            </h3>
            <Button variant="primary" className="o-best-sells__banner-btn">
              {TRANSLATIONS.dailyBestSells.banner.button} &rarr;
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