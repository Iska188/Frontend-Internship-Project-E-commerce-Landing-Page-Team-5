import React from 'react';
import './topProductCard.css';

interface TopProductCardProps {
  imageSrc: string;
  title: string;
  rating: number;
  reviewsCount: number;
  currentPrice: number;
  originalPrice: number;
}

export const TopProductCard: React.FC<TopProductCardProps> = ({
  imageSrc,
  title,
  rating,
  reviewsCount,
  currentPrice,
  originalPrice,
}) => {
  return (
    <div className="m-top-product">
      <div className="m-top-product__img-wrapper">
        <img src={imageSrc} alt={title} className="m-top-product__img" />
      </div>
      
      <div className="m-top-product__content">
        <h4 className="m-top-product__title">{title}</h4>
        
        <div className="m-top-product__rating">
          <div className="m-top-product__stars" aria-label={`Rating: ${rating} out of 5`}>
             <span className="stars-filled">{'S'.repeat(Math.round(rating))}</span>
             <span className="stars-empty">{'S'.repeat(5 - Math.round(rating))}</span>
          </div>
          <span className="m-top-product__reviews">{reviewsCount}</span>
        </div>

        <div className="m-top-product__price">
          <span className="price-current">${currentPrice.toFixed(2)}</span>
          <span className="price-original">${originalPrice.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};