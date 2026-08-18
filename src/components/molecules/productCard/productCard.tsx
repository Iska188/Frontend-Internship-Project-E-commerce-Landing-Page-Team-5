import React from 'react';
import { Text, Button, Badge } from '../../atoms';
import { TRANSLATIONS } from '../../../constants/translations';
import { useCart } from '../../../context/cartContext';
import { useWishlist } from '../../../context/wishlistContext';
import { useCompare } from '../../../context/compareContext';
import './productCard.css';

interface ProductCardProps {
  id?: string | number;
  imageSrc: string;
  discountBadge?: string;
  discountBgColor?: string;
  statusBadge?: string;
  statusBadgeType?: 'discount' | 'hot' | 'new' | 'sale' | 'count';
  category: string;
  title: string;
  description?: string;
  rating: number;
  reviewsCount: number;
  vendor: string;
  price: string;
  oldPrice?: string;
  variant?: 'popular' | 'best-sells';
  layout?: 'vertical' | 'horizontal';
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
  description,
  rating,
  reviewsCount,
  vendor,
  price,
  oldPrice,
  variant = 'popular',
  layout = 'vertical',
  soldText,
  soldPercentage,
  onAdd,
}) => {
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();
  const { isInCompare, toggleCompare } = useCompare();

  const productId = id ?? title;
  const isWishlisted = isInWishlist(productId);
  const isCompared = isInCompare(productId);

  const parsePrice = (text?: string) => {
    if (!text) {
      return 0;
    }

    const numeric = Number.parseFloat(text.replace(/[^0-9.]/g, ''));
    return Number.isFinite(numeric) ? numeric : 0;
  };

  const numericPrice = parsePrice(price);
  const numericOldPrice = parsePrice(oldPrice);

  const handleAdd = () => {
    addToCart({
      id: productId,
      title,
      price: numericPrice,
      oldPrice: numericOldPrice,
      image: imageSrc,
    });

    if (onAdd) {
      onAdd();
    }
  };

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist({
      id: productId,
      title,
      price: numericPrice,
      oldPrice: numericOldPrice,
      image: imageSrc,
      rating,
      reviewsCount,
      category,
      vendor,
      inStock: true,
    });
  };

  const handleToggleCompare = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleCompare({
      id: productId,
      title,
      price: numericPrice,
      oldPrice: numericOldPrice,
      image: imageSrc,
      rating,
      reviewsCount,
      category,
      vendor,
      description,
      inStock: true,
    });
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i += 1) {
      const isFilled = i <= Math.round(rating);
      stars.push(
        <span
          key={i}
          className={`m-product-card__star ${isFilled ? 'm-product-card__star--filled' : 'm-product-card__star--empty'}`}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  const productHref = id ? `#/product?id=${encodeURIComponent(String(id))}` : `#/product?id=${encodeURIComponent(title)}`;

  return (
    <div className={`m-product-card m-product-card--${variant} m-product-card--${layout}`}>
      <div className="m-product-card__badges">
        {discountBadge && (
          <Badge
            label={discountBadge}
            type="discount"
            bgColor={discountBgColor}
            className="m-product-card__badge--left"
          />
        )}
        {statusBadge && (
          <Badge
            label={statusBadge}
            type={statusBadgeType}
            className="m-product-card__badge--right"
          />
        )}
      </div>

      <button
        type="button"
        className={`m-product-card__wishlist-btn ${isWishlisted ? 'm-product-card__wishlist-btn--active' : ''}`}
        onClick={handleToggleWishlist}
        title={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
        aria-label="Toggle wishlist"
      >
        <svg
          viewBox="0 0 24 24"
          width="16"
          height="16"
          fill={isWishlisted ? '#f74b81' : 'none'}
          stroke={isWishlisted ? '#f74b81' : 'currentColor'}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      </button>

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
          <span className="m-product-card__reviews">({reviewsCount || rating || 4.0})</span>
        </div>

        {layout === 'horizontal' && description && (
          <Text variant="hero-subtitle" as="p" className="m-product-card__description">
            {description}
          </Text>
        )}

        {layout === 'vertical' && (
          <Text variant="hero-subtitle" as="span" className="m-product-card__vendor">
            {TRANSLATIONS.button.by} <span className="m-product-card__vendor-name">{vendor}</span>
          </Text>
        )}

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

          {layout === 'horizontal' && (
            <button
              type="button"
              className={`m-product-card__compare-link ${isCompared ? 'm-product-card__compare-link--active' : ''}`}
              onClick={handleToggleCompare}
              title={isCompared ? 'Remove from compare' : 'Add to compare'}
            >
              <span className="m-product-card__compare-icon">⇄</span>
              {isCompared ? 'Compared' : (TRANSLATIONS.button.addCompare ?? 'Add Compare')}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};