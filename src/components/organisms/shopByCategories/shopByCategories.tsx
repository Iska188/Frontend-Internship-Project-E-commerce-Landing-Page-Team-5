import { Text } from '../../atoms/text/text';
import { FeatureCard } from '../../molecules/featureCard/featureCard';
import './shopByCategories.css';

interface CategoryItem {
  id: string;
  title: string;
  iconSrc: string;
}

const CATEGORIES_DATA: CategoryItem[] = [
  { id: '1', title: 'Milks and Dairies', iconSrc: 'src/assets/categories/cat-1.png' },
  { id: '2', title: 'Wines & Alcohol', iconSrc: 'src/assets/categories/cat-2.png' },
  { id: '3', title: 'Clothing & Beauty', iconSrc: 'src/assets/categories/cat-3.png' },
  { id: '4', title: 'Pet Foods & Toy', iconSrc: 'src/assets/categories/cat-4.png' },
];

export const ShopByCategories = () => {
  return (
    <section className="o-shop-categories">
      <div className="o-shop-categories__container">
        
        {/* Header Area */}
        <div className="o-shop-categories__header">
          <div className="o-shop-categories__title-wrap">
            <Text as="h2" variant="sec-title" className="o-shop-categories__title">
              Shop by Categories
            </Text>
            <a href="/categories" className="o-shop-categories__link">
              All Categories &gt;
            </a>
          </div>
          
          <div className="o-shop-categories__nav">
            <button className="o-shop-categories__nav-btn" aria-label="Previous">
              &larr;
            </button>
            <button className="o-shop-categories__nav-btn" aria-label="Next">
              &rarr;
            </button>
          </div>
        </div>

        {/* Cards Grid / Scrollable List */}
        <div className="o-shop-categories__grid">
          {CATEGORIES_DATA.map((category) => (
            <div className="o-shop-categories__item" key={category.id}>
              <FeatureCard 
                variant="category"
                title={category.title}
                iconSrc={category.iconSrc}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};