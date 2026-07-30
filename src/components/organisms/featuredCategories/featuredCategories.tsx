import { Text } from '../../atoms/text/text';
import { Button } from '../../atoms/button/button';
import { CategoryCard } from '../../molecules/category-card/category-card';
import './featuredCategories.css';

const CATEGORIES_DATA = [
  { title: 'Cake & Milk', itemsCount: 11, bgColor: 'var(--color-featcat-cake)', imageSrc: 'src/assets/featuredCateg/burger.png' },
  { title: 'Organic Kiwi', itemsCount: 6, bgColor: 'var(--color-featcat-organic)', imageSrc: 'src/assets/featuredCateg/kiwi.png' },
  { title: 'Peach', itemsCount: 6, bgColor: 'var(--color-featcat-peach)', imageSrc: 'src/assets/featuredCateg/peach.png' },
  { title: 'Red Apple', itemsCount: 10, bgColor: 'var(--color-featcat-redA)', imageSrc: 'src/assets/featuredCateg/redapple.png' },
  { title: 'Snacks', itemsCount: 11, bgColor: 'var(--color-featcat-snacks)', imageSrc: 'src/assets/featuredCateg/snacks.png' },
  { title: 'Vegetables', itemsCount: 6, bgColor: 'var(--color-featcat-vegetables)', imageSrc: 'src/assets/featuredCateg/vegetables.png' },
  { title: 'Strawberry', itemsCount: 10, bgColor: 'var(--color-featcat-strawberry)', imageSrc: 'src/assets/featuredCateg/strawberry.png' },
  { title: 'Black plum', itemsCount: 10, bgColor: 'var(--color-featcat-blackP)', imageSrc: 'src/assets/featuredCateg/blackplum.png' },
  { title: 'Custard apple', itemsCount: 10, bgColor: 'var(--color-featcat-custardA)', imageSrc: 'src/assets/featuredCateg/custradapple.png' },
  { title: 'Coffee & Tea', itemsCount: 11, bgColor: 'var(--color-featcat-coffee)', imageSrc: 'src/assets/featuredCateg/coffeetea.png' },
];

export const FeaturedCategories = () => {
  return (
    <section className="o-featured-categories">
      <div className="o-featured-categories__container">
        {/* Top Header */}
        <div className="o-featured-categories__header">
          <div className="o-featured-categories__title-group">
            <Text variant="sec-title" as="h2">
              Featured Categories
            </Text>
            <ul className="o-featured-categories__tabs">
              <li className="active">Cake &amp; Milk</li>
              <li>Coffees &amp; Teas</li>
              <li>Pet Foods</li>
              <li>Vegetables</li>
            </ul>
          </div>

          <div className="o-featured-categories__arrows">
            <Button variant="carousel">&larr;</Button>
            <Button variant="carousel">&rarr;</Button>
          </div>
        </div>

        {/* Cards Grid / List */}
        <div className="o-featured-categories__grid">
          {CATEGORIES_DATA.map((cat) => (
            <CategoryCard key={cat.title} {...cat} />
          ))}
        </div>
      </div>
    </section>
  );
};