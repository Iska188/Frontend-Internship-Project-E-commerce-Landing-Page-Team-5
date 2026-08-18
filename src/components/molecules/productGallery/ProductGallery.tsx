import React, { useState, useEffect } from 'react';
import './productGallery.css';

interface ProductGalleryProps {
  images: string[];
  title?: string;
}

export const ProductGallery: React.FC<ProductGalleryProps> = ({ images, title = 'Product image' }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    setSelectedIndex(0);
    setIsZoomed(false);
  }, [images]);

  const galleryImages = images && images.length > 0 ? images : ['src/assets/deals/Seeds.png'];
  const currentImage = galleryImages[selectedIndex] || galleryImages[0];

  return (
    <div className="m-product-gallery">
      <div className="m-product-gallery__main-wrap">
        <div className="m-product-gallery__main">
          <img
            src={currentImage}
            alt={title}
            className={`m-product-gallery__main-image ${isZoomed ? 'm-product-gallery__main-image--zoomed' : ''}`}
            onClick={() => setIsZoomed(!isZoomed)}
          />
          <button
            type="button"
            className="m-product-gallery__zoom-btn"
            onClick={() => setIsZoomed(!isZoomed)}
            aria-label="Zoom image"
            title="Zoom image"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              <line x1="11" y1="8" x2="11" y2="14"></line>
              <line x1="8" y1="11" x2="14" y2="11"></line>
            </svg>
          </button>
        </div>
      </div>

      <div className="m-product-gallery__thumbnails">
        {galleryImages.map((imgSrc, idx) => {
          const isActive = idx === selectedIndex;
          return (
            <button
              key={idx}
              type="button"
              className={`m-product-gallery__thumb-btn ${isActive ? 'm-product-gallery__thumb-btn--active' : ''}`}
              onClick={() => setSelectedIndex(idx)}
              aria-label={`Select product image ${idx + 1}`}
            >
              <img
                src={imgSrc}
                alt={`${title} thumbnail ${idx + 1}`}
                className="m-product-gallery__thumb-image"
              />
            </button>
          );
        })}
      </div>
    </div>
  );
};
