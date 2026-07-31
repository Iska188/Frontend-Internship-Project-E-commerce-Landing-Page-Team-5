import { Text, Button } from '../../atoms';
import { CategoryCard } from '../../molecules';
import { TRANSLATIONS } from '../../../constants/translations';
import './featureCategories.css';

const CATEGORIES_DATA = [
  { title: TRANSLATIONS.featuredCategories.categories.cakeAndMilk, itemsCount: 11, variant: 'lightgreen', imageSrc: 'src/assets/body/categories/burger.png' },
  { title: TRANSLATIONS.featuredCategories.categories.organicKiwi, itemsCount: 6, variant: 'lightyellow', imageSrc: 'src/assets/body/categories/kiwi.png' },
  { title: TRANSLATIONS.featuredCategories.categories.peach, itemsCount: 6, variant: 'lightlime', imageSrc: 'src/assets/body/categories/peach.png' },
  { title: TRANSLATIONS.featuredCategories.categories.redApple, itemsCount: 10, variant: 'lightred', imageSrc: 'src/assets/body/categories/redapple.png' },
  { title: TRANSLATIONS.featuredCategories.categories.snacks, itemsCount: 11, variant: 'lightpink', imageSrc: 'src/assets/body/categories/snacks.png' },
  { title: TRANSLATIONS.featuredCategories.categories.vegetables, itemsCount: 6, variant: 'lightpurple', imageSrc: 'src/assets/body/categories/vegetables.png' },
  { title: TRANSLATIONS.featuredCategories.categories.strawberry, itemsCount: 10, variant: 'lightgreen', imageSrc: 'src/assets/body/categories/strawberry.png' },
  { title: TRANSLATIONS.featuredCategories.categories.blackPlum, itemsCount: 10, variant: 'lightred', imageSrc: 'src/assets/body/categories/blackplum.png' },
  { title: TRANSLATIONS.featuredCategories.categories.custardApple, itemsCount: 10, variant: 'lightlime', imageSrc: 'src/assets/body/categories/custradapple.png' },
  { title: TRANSLATIONS.featuredCategories.categories.coffeeAndTea, itemsCount: 11, variant: 'lightpink', imageSrc: 'src/assets/body/categories/coffeetea.png' },
];

export const FeaturedCategories = () => {
  return (
    <section className="o-featured-categories">
      <div className="o-featured-categories__container">
        <div className="o-featured-categories__header">
          <div className="o-featured-categories__title-group">
            <Text variant="sec-title" as="h2">
              {TRANSLATIONS.featuredCategories.title}
            </Text>
            <ul className="o-featured-categories__tabs">
              <li>{TRANSLATIONS.featuredCategories.tabs.cakeAndMilk}</li>
              <li>{TRANSLATIONS.featuredCategories.tabs.coffeesAndTeas}</li>
              <li>{TRANSLATIONS.featuredCategories.tabs.petFoods}</li>
              <li>{TRANSLATIONS.featuredCategories.tabs.vegetables}</li>
            </ul>
          </div>

          <div className="o-featured-categories__arrows">
            <Button variant="carousel">&larr;</Button>
            <Button variant="carousel">&rarr;</Button>
          </div>
        </div>

        <div className="o-featured-categories__grid">
          {CATEGORIES_DATA.map((cat) => {
            const uniqueKey = cat.title.toLowerCase().replace(/[^a-z0-9]/g, '-');
            return <CategoryCard key={uniqueKey} {...cat} />;
          })}
        </div>
      </div>
    </section>
  );
};