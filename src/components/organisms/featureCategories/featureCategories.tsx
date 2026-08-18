import { useRef, useState } from 'react';
import { Text, Button } from '../../atoms';
import { CategoryCard } from '../../molecules';
import { TRANSLATIONS } from '../../../constants/translations';
import './featureCategories.css';

const BASE_CATEGORIES_DATA = [
  { title: TRANSLATIONS.featuredCategories.categories.cakeAndMilk, itemsCount: 11, variant: 'lightgreen' as const, imageSrc: 'src/assets/body/categories/burger.png' },
  { title: TRANSLATIONS.featuredCategories.categories.organicKiwi, itemsCount: 6, variant: 'lightyellow' as const, imageSrc: 'src/assets/body/categories/kiwi.png' },
  { title: TRANSLATIONS.featuredCategories.categories.peach, itemsCount: 6, variant: 'lightlime' as const, imageSrc: 'src/assets/body/categories/peach.png' },
  { title: TRANSLATIONS.featuredCategories.categories.redApple, itemsCount: 10, variant: 'lightred' as const, imageSrc: 'src/assets/body/categories/redapple.png' },
  { title: TRANSLATIONS.featuredCategories.categories.snacks, itemsCount: 11, variant: 'lightpink' as const, imageSrc: 'src/assets/body/categories/snacks.png' },
  { title: TRANSLATIONS.featuredCategories.categories.vegetables, itemsCount: 6, variant: 'lightpurple' as const, imageSrc: 'src/assets/body/categories/vegetables.png' },
  { title: TRANSLATIONS.featuredCategories.categories.strawberry, itemsCount: 10, variant: 'lightgreen' as const, imageSrc: 'src/assets/body/categories/strawberry.png' },
  { title: TRANSLATIONS.featuredCategories.categories.blackPlum, itemsCount: 10, variant: 'lightred' as const, imageSrc: 'src/assets/body/categories/blackplum.png' },
  { title: TRANSLATIONS.featuredCategories.categories.custardApple, itemsCount: 10, variant: 'lightlime' as const, imageSrc: 'src/assets/body/categories/custradapple.png' },
  { title: TRANSLATIONS.featuredCategories.categories.coffeeAndTea, itemsCount: 11, variant: 'lightpink' as const, imageSrc: 'src/assets/body/categories/coffeetea.png' },
];

const CATEGORIES_DATA = [...BASE_CATEGORIES_DATA, ...BASE_CATEGORIES_DATA];

export const FeaturedCategories = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<string>('all');

  const scroll = (direction: 'left' | 'right') => {
    if (!trackRef.current) return;
    const scrollAmount = 350;
    if (direction === 'left') {
      trackRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      trackRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="o-featured-categories">
      <div className="o-featured-categories__container">
        <div className="o-featured-categories__header">
          <div className="o-featured-categories__title-group">
            <Text variant="sec-title" as="h2">
              {TRANSLATIONS.featuredCategories.title}
            </Text>
            <ul className="o-featured-categories__tabs">
              <li
                className={activeTab === 'all' ? 'active' : ''}
                onClick={() => { setActiveTab('all'); window.location.hash = '#/shop'; }}
              >
                All
              </li>
              <li
                className={activeTab === 'cake' ? 'active' : ''}
                onClick={() => { setActiveTab('cake'); window.location.hash = '#/shop'; }}
              >
                {TRANSLATIONS.featuredCategories.tabs.cakeAndMilk}
              </li>
              <li
                className={activeTab === 'coffee' ? 'active' : ''}
                onClick={() => { setActiveTab('coffee'); window.location.hash = '#/shop'; }}
              >
                {TRANSLATIONS.featuredCategories.tabs.coffeesAndTeas}
              </li>
              <li
                className={activeTab === 'pet' ? 'active' : ''}
                onClick={() => { setActiveTab('pet'); window.location.hash = '#/shop'; }}
              >
                {TRANSLATIONS.featuredCategories.tabs.petFoods}
              </li>
              <li
                className={activeTab === 'veg' ? 'active' : ''}
                onClick={() => { setActiveTab('veg'); window.location.hash = '#/shop'; }}
              >
                {TRANSLATIONS.featuredCategories.tabs.vegetables}
              </li>
            </ul>
          </div>

          <div className="o-featured-categories__arrows">
            <Button
              variant="carousel"
              onClick={() => scroll('left')}
              aria-label="Previous categories"
            >
              &larr;
            </Button>
            <Button
              variant="carousel"
              onClick={() => scroll('right')}
              aria-label="Next categories"
            >
              &rarr;
            </Button>
          </div>
        </div>

        <div className="o-featured-categories__track-wrapper">
          <div className="o-featured-categories__track" ref={trackRef}>
            {CATEGORIES_DATA.map((cat, idx) => {
              const uniqueKey = `${cat.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}-${idx}`;
              return (
                <div
                  key={uniqueKey}
                  className="o-featured-categories__item"
                  onClick={() => { window.location.hash = '#/shop'; }}
                  style={{ cursor: 'pointer' }}
                >
                  <CategoryCard {...cat} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};