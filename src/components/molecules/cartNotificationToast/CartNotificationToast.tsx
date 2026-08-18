import React, { useEffect, useState } from 'react';
import './cartNotificationToast.css';

export interface CartNotificationData {
  id: string | number;
  title: string;
  price: number;
  oldPrice?: number;
  image: string;
  quantity: number;
  selectedSize?: string;
  timestamp: number;
}

interface CartNotificationToastProps {
  notification: CartNotificationData | null;
  onClose: () => void;
}

export const CartNotificationToast: React.FC<CartNotificationToastProps> = ({
  notification,
  onClose,
}) => {
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (!notification) return;
    setIsClosing(false);

    const timer = setTimeout(() => {
      setIsClosing(true);
      setTimeout(() => {
        onClose();
      }, 300);
    }, 4000);

    return () => clearTimeout(timer);
  }, [notification, onClose]);

  if (!notification) return null;

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 250);
  };

  const handleViewCart = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onClose();
    window.location.hash = '#/cart';
    window.dispatchEvent(new HashChangeEvent('hashchange'));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`m-cart-toast ${isClosing ? 'm-cart-toast--closing' : ''}`}>
      <button
        type="button"
        className="m-cart-toast__close"
        onClick={handleClose}
        aria-label="Close notification"
      >
        &times;
      </button>

      <div className="m-cart-toast__image-wrap">
        <img
          src={notification.image}
          alt={notification.title}
          className="m-cart-toast__image"
        />
      </div>

      <div className="m-cart-toast__content">
        <div className="m-cart-toast__header">
          <span className="m-cart-toast__badge">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            Added to Cart!
          </span>
        </div>

        <h4 className="m-cart-toast__title" title={notification.title}>
          {notification.title}
        </h4>

        <div className="m-cart-toast__meta">
          <span className="m-cart-toast__price">
            ${notification.price.toFixed(2)}
          </span>
          {notification.selectedSize && (
            <span className="m-cart-toast__size-badge">
              {notification.selectedSize}
            </span>
          )}
          {notification.quantity > 1 && (
            <span className="m-cart-toast__qty">
              (Qty: {notification.quantity})
            </span>
          )}
        </div>

        <div className="m-cart-toast__actions">
          <a
            href="#/cart"
            className="m-cart-toast__link"
            onClick={handleViewCart}
          >
            View Cart &amp; Checkout &rarr;
          </a>
        </div>
      </div>

      <div className="m-cart-toast__progress">
        <div className="m-cart-toast__progress-bar"></div>
      </div>
    </div>
  );
};
