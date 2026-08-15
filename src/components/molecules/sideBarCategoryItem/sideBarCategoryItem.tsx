import { Text } from '../../atoms';
import './sidebarCategoryItem.css';

interface SidebarCategoryItemProps {
  icon: string;
  label: string;
  count: number;
}

export const SidebarCategoryItem = ({ icon, label, count }: SidebarCategoryItemProps) => {
  return (
    <li className="m-sidebar-category-item">
      <div className="m-sidebar-category-item__icon-wrap">
        <img src={icon} alt="" className="m-sidebar-category-item__icon" />
      </div>

      <Text variant="category" as="span" className="m-sidebar-category-item__label">
        {label}
      </Text>

      <span className="m-sidebar-category-item__count">{count}</span>
    </li>
  );
};