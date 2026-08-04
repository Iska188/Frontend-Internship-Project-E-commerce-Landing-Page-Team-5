import { Text } from '../../atoms/text/text';
import { FeatureCard } from '../../molecules/featureCard/featureCard';
import './shopByCategories.css';
import { TRANSLATIONS } from '../../../constants/translations';


interface CategoryItem {
  id: string;
  title: string;
  iconSrc: string;
}

const CATEGORIES_DATA: CategoryItem[] = [
  { id: '1', title: TRANSLATIONS.shopcategories.title.banner1, iconSrc: 'src/assets/body/categoriesButtons/milk.svg' },
  { id: '2', title: TRANSLATIONS.shopcategories.title.banner2, iconSrc: 'src/assets/body/categoriesButtons/wine.svg' },
  { id: '3', title: TRANSLATIONS.shopcategories.title.banner3, iconSrc: 'src/assets/body/categoriesButtons/clothing.svg' },
  { id: '4', title: TRANSLATIONS.shopcategories.title.banner4, iconSrc: 'src/assets/body/categoriesButtons/pets.svg' },
];

export const ShopByCategories = () => {
  return (
    <section className="o-shop-categories">
      <div className="o-shop-categories__container">
        
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