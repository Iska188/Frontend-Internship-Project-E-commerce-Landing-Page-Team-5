import React from 'react';
import { Text, Button, Badge } from '../../atoms';
import { TRANSLATIONS } from '../../../constants/translations';
import './productCard.css';

interface ProductCardProps {
  imageSrc: string;
  discountBadge?: string;
  discountBgColor?: string; 
  statusBadge?: string;
  statusBadgeType?: 'discount' | 'hot' | 'new' | 'count';
  category: string;
  title: string;
  rating: number;
  reviewsCount: number;
  vendor: string;
  price: string;
  oldPrice?: string;
  variant?: 'popular' | 'best-sells';
  soldText?: string;
  soldPercentage?: number;
  onAdd?: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  imageSrc,
  discountBadge,
  discountBgColor,
  statusBadge,
  statusBadgeType = 'new',
  category,
  title,
  rating,
  reviewsCount,
  vendor,
  price,
  oldPrice,
  variant = 'popular',
  soldText,
  soldPercentage,
  onAdd,
}) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      const isFilled = i <= rating;
      stars.push(
        <span 
          key={i} 
          className={`m-product-card__star ${isFilled ? 'm-product-card__star--filled' : 'm-product-card__star--empty'}`}
        >
          S
        </span>
      );
    }
    return stars;
  };

  return (
    <div className={`m-product-card m-product-card--${variant}`}>
      <div className="m-product-card__badges">
        {discountBadge && (
          <Badge 
            label={discountBadge} 
            type="discount" 
            bgColor={discountBgColor} 
          />
        )}
        {statusBadge && (
          <Badge 
            label={statusBadge} 
            type={statusBadgeType} 
          />
        )}
      </div>

      <div className="m-product-card__image-container">
        <img src={imageSrc} alt={title} className="m-product-card__image" />
      </div>

      <div className="m-product-card__content">
        <Text variant="category" as="span" className="m-product-card__category">
          {category}
        </Text>

        <Text variant="prod-title" as="h4" className="m-product-card__title">
          {title}
        </Text>

        <div className="m-product-card__rating">
          <div className="m-product-card__stars">
            {renderStars()}
          </div>
          <span className="m-product-card__reviews">({reviewsCount})</span>
        </div>

        <Text variant="hero-subtitle" as="span" className="m-product-card__vendor">
          {TRANSLATIONS.button.by} <span className="m-product-card__vendor-name">{vendor}</span>
        </Text>

        {variant === 'best-sells' && soldText && soldPercentage !== undefined && (
          <div className="m-product-card__progress-container">
            <div className="m-product-card__progress-info">
              <span className="m-product-card__sold-text">{soldText}</span>
              <span className="m-product-card__sold-percentage">{soldPercentage}%</span>
            </div>
            <div className="m-product-card__progress-bar">
              <div 
                className="m-product-card__progress-fill" 
                style={{ width: `${soldPercentage}%` }}
              ></div>
            </div>
          </div>
        )}

        <div className="m-product-card__footer">
          <div className="m-product-card__prices">
            <span className="m-product-card__price">{price}</span>
            {oldPrice && <span className="m-product-card__old-price">{oldPrice}</span>}
          </div>

          {variant === 'popular' ? (
            <Button variant="add-short" onClick={onAdd} className="m-product-card__add-btn">
              {TRANSLATIONS.button.add}
            </Button>
          ) : (
            <Button variant="add-long" onClick={onAdd} className="m-product-card__cart-btn">
              {TRANSLATIONS.button.addtoCart}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};