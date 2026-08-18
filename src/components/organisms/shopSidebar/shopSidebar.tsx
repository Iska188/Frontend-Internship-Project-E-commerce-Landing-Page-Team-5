import { Text, Button } from '../../atoms';
import { SidebarCategoryItem, SidebarTrendingItem, SidebarPriceRange, SidebarCheckboxGroup } from '../../molecules';
import { TRANSLATIONS } from '../../../constants/translations';
import './shopSidebar.css';

interface CategoryData {
  icon: string;
  label: string;
  count: number;
}

interface CheckboxOption {
  id: string;
  label: string;
  count: number;
}

interface NewProductData {
  imageSrc: string;
  title: string;
  price: string;
}

interface ShopSidebarProps {
  categories: CategoryData[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  priceMin: number;
  priceMax: number;
  currentPriceMin: number;
  currentPriceMax: number;
  onPriceChange: (min: number, max: number) => void;
  colorOptions: CheckboxOption[];
  selectedColors: string[];
  onColorChange: (selected: string[]) => void;
  conditionOptions: CheckboxOption[];
  selectedConditions: string[];
  onConditionChange: (selected: string[]) => void;
  onApplyFilter: () => void;
  newProducts: NewProductData[];
}

export const ShopSidebar = ({
  categories,
  activeCategory,
  onCategoryChange,
  priceMin,
  priceMax,
  currentPriceMin,
  currentPriceMax,
  onPriceChange,
  colorOptions,
  selectedColors,
  onColorChange,
  conditionOptions,
  selectedConditions,
  onConditionChange,
  onApplyFilter,
  newProducts,
}: ShopSidebarProps) => {
  return (
    <aside className="o-shop-sidebar">
      <div className="o-shop-sidebar__section">
        <Text variant="sec-title" as="h3" className="o-shop-sidebar__title">
          {TRANSLATIONS.shopSidebar.category}
        </Text>
        <ul className="o-shop-sidebar__category-list">
          {categories.map((cat) => (
            <SidebarCategoryItem
              key={cat.label}
              icon={cat.icon}
              label={cat.label}
              count={cat.count}
              isActive={activeCategory === cat.label}
              onClick={() => onCategoryChange(cat.label)}
            />
          ))}
        </ul>
      </div>

      <div className="o-shop-sidebar__section">
        <Text variant="sec-title" as="h3" className="o-shop-sidebar__title">
          {TRANSLATIONS.shopSidebar.fillByPrice}
        </Text>
        <SidebarPriceRange
          min={priceMin}
          max={priceMax}
          currentMin={currentPriceMin}
          currentMax={currentPriceMax}
          onChange={onPriceChange}
        />

        <Text variant="category" as="span" className="o-shop-sidebar__subheading">
          {TRANSLATIONS.shopSidebar.color}
        </Text>
        <SidebarCheckboxGroup options={colorOptions} selected={selectedColors} onChange={onColorChange} />

        <Text variant="category" as="span" className="o-shop-sidebar__subheading">
          {TRANSLATIONS.shopSidebar.itemCondition}
        </Text>
        <SidebarCheckboxGroup options={conditionOptions} selected={selectedConditions} onChange={onConditionChange} />

        <Button variant="primary" className="o-shop-sidebar__filter-btn" onClick={onApplyFilter}>
          {TRANSLATIONS.shopSidebar.filter}
        </Button>
      </div>

      <div className="o-shop-sidebar__section">
        <Text variant="sec-title" as="h3" className="o-shop-sidebar__title">
          {TRANSLATIONS.shopSidebar.newProducts}
        </Text>
        <ul className="o-shop-sidebar__new-products-list">
          {newProducts.map((item) => (
            <SidebarTrendingItem key={item.title} imageSrc={item.imageSrc} title={item.title} price={item.price} />
          ))}
        </ul>
      </div>
    </aside>
  );
};