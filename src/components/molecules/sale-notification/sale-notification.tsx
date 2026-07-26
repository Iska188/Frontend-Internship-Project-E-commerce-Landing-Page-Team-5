import React, { useState } from 'react';
import './sale-notification.css';

interface SaleNotificationProps {
  productName?: string;
  subtitle?: string;
  oldPrice?: string;
  newPrice?: string;
  imageSrc?: string;
  onClose?: () => void;
}

export const SaleNotification: React.FC<SaleNotificationProps> = ({
  productName = "Encore Seafoods Stuffed Alaskan",
  subtitle = "Hurry up!",
  oldPrice = "$37.80",
  newPrice = "$35.85",
  imageSrc = "src/assets/featuredCateg/popup.png",
  onClose,
}) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  const handleClose = () => {
    setIsVisible(false);
    if (onClose) onClose();
  };

  return (
    <div className="m-sale-notification">
      <button 
        className="m-sale-notification__close" 
        onClick={handleClose}
        aria-label="Close notification"
      >
        &times;
      </button>

      <img 
        src={imageSrc} 
        alt={productName} 
        className="m-sale-notification__img" 
      />

      <div className="m-sale-notification__content">
        <p className="m-sale-notification__text">
          <strong className="m-sale-notification__title">{productName}</strong> is on-sale.
        </p>
        <span className="m-sale-notification__subtitle">{subtitle}</span>
        
        <div className="m-sale-notification__prices">
          <span className="a-text--price-old">{oldPrice}</span>
          <span className="a-text--price-current">{newPrice}</span>
        </div>
      </div>
    </div>
  );
};