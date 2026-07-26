import React from 'react';
// @ts-ignore
import { Button } from '../../atoms/button/button';
import './promo-card.css';

interface PromoCardProps {
  title: string;
  buttonText?: string;
  imageSrc: string;
  bgColor: string;
}

export const PromoCard: React.FC<PromoCardProps> = ({
  title,
  buttonText = 'Shop Now',
  imageSrc,
  bgColor,
}) => {
  return (
    <div className="m-promo-card" style={{ backgroundColor: bgColor }}>
      <div className="m-promo-card__content">
        <h3 className="m-promo-card__title">{title}</h3>
        <Button variant="add-short" className="m-promo-card__btn">
          {buttonText} &rarr;
        </Button>
      </div>
      <img src={imageSrc} alt={title} className="m-promo-card__img" />
    </div>
  );
};