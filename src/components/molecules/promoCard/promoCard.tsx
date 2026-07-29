import React from 'react';
import { Button } from '../../atoms';
import { TRANSLATIONS } from '../../../constants/translations';
import './promoCard.css';

interface PromoCardProps {
  title: string;
  buttonText?: string;
  imageSrc: string;
  bgColor: string;
}

export const PromoCard: React.FC<PromoCardProps> = ({
  title,
  buttonText = TRANSLATIONS.button.shopNow,
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