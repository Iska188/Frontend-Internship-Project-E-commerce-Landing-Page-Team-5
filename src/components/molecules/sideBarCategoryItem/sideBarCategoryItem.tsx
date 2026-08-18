import { Text } from '../../atoms';
import './sidebarCategoryItem.css';

interface SidebarCategoryItemProps {
  icon: string;
  label: string;
  count: number;
  isActive?: boolean;
  onClick?: () => void;
}

export const SidebarCategoryItem = ({ icon, label, count, isActive, onClick }: SidebarCategoryItemProps) => {
  return (
    <li className={`m-sidebar-category-item ${isActive ? 'is-active' : ''}`} onClick={onClick}>
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