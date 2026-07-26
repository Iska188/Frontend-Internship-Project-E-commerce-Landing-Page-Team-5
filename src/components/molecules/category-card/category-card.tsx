import React from 'react';
// @ts-ignore
import { Text } from '../../atoms/text/text';
import './category-card.css';

interface CategoryCardProps {
  title: string;
  itemsCount: number;
  imageSrc: string;
  bgColor: string;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({
  title,
  itemsCount,
  imageSrc,
  bgColor,
}) => {
  return (
    <div className="m-category-card" style={{ backgroundColor: bgColor }}>
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