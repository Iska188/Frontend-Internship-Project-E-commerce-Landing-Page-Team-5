import React from 'react';
import { Text, Button, Badge } from '../../atoms';
import { TRANSLATIONS } from '../../../constants/translations';
import { useCart } from '../../../context/cartContext';
import './productCard.css';

interface ProductCardProps {
  id?: string | number;
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
  id,
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
  const { addToCart } = useCart();

  const parsePrice = (text?: string) => {
    if (!text) {
      return 0;
    }

    const numeric = Number.parseFloat(text.replace(/[^0-9.]/g, ''));
    return Number.isFinite(numeric) ? numeric : 0;
  };

  const handleAdd = () => {
    addToCart({
      id: id ?? title,
      title,
      price: parsePrice(price),
      oldPrice: parsePrice(oldPrice),
      image: imageSrc,
    });

    if (onAdd) {
      onAdd();
    }
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i += 1) {
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

  const productHref = id ? `#/product?id=${encodeURIComponent(String(id))}` : `#/product?id=${encodeURIComponent(title)}`;

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
        <a href={productHref} className="m-product-card__img-link">
          <img src={imageSrc} alt={title} className="m-product-card__image" />
        </a>
      </div>

      <div className="m-product-card__content">
        <Text variant="category" as="span" className="m-product-card__category">
          {category}
        </Text>

        <a href={productHref} className="m-product-card__title-link">
          <Text variant="prod-title" as="h4" className="m-product-card__title">
            {title}
          </Text>
        </a>

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
            <Button variant="add-short" onClick={handleAdd} className="m-product-card__add-btn">
              {TRANSLATIONS.button.add}
            </Button>
          ) : (
            <Button variant="add-long" onClick={handleAdd} className="m-product-card__cart-btn">
              {TRANSLATIONS.button.addtoCart}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};