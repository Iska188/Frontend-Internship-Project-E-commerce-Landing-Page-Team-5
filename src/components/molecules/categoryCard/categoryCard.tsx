import React from 'react';
import { Text } from '../../atoms';
import './categoryCard.css';

interface CategoryCardProps {
  title: string;
  itemsCount: number;
  imageSrc: string;
  variant?: string;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({
  title,
  itemsCount,
  imageSrc,
  variant = 'green',
}) => {
  return (
    <div className={`m-category-card m-category-card--${variant}`}>
      <img src={imageSrc} alt={title} className="m-category-card__img" />
      <Text variant="prod-title" as="h4" className="m-category-card__title">
        {title}
      </Text>
      <Text variant="category" as="span" className="m-category-card__count">
        {itemsCount} items
      </Text>
    </div>
  );
};