import { Text } from '../../atoms';
import './sidebarTrendingItem.css';

interface SidebarTrendingItemProps {
  imageSrc: string;
  title: string;
  price: string;
}

export const SidebarTrendingItem = ({ imageSrc, title, price }: SidebarTrendingItemProps) => {
  return (
    <li className="m-sidebar-trending-item">
      <img src={imageSrc} alt={title} className="m-sidebar-trending-item__img" />
      <div className="m-sidebar-trending-item__info">
        <Text variant="category" as="span" className="m-sidebar-trending-item__title">
          {title}
        </Text>
        <Text variant="price-current" as="span" className="m-sidebar-trending-item__price">
          {price}
        </Text>
      </div>
    </li>
  );
};