import React, { useState, useEffect } from 'react';
import { Badge, Button, QuantityInput } from '../../atoms';
import { useCart } from '../../../context/cartContext';
import cartIcon from '../../../assets/header/cart.svg';
import wishlistIcon from '../../../assets/header/wishlist.svg';
import compareIcon from '../../../assets/header/compare.svg';
import './productInfo.css';

interface ProductSpecs {
  type: string;
  mfg: string;
  life: string;
  sku: string;
  tags: string;
  stock: string;
}

interface ProductInfoProps {
  id: string;
  title: string;
  badge?: string;
  rating: number;
  reviewsCount: number;
  price: number;
  oldPrice?: number;
  discountPercentage?: string;
  description: string;
  sizes?: string[];
  defaultSize?: string;
  sizePrices?: Record<string, { price: number; oldPrice?: number }>;
  specs: ProductSpecs;
  image: string;
}

export const ProductInfo: React.FC<ProductInfoProps> = ({
  id,
  title,
  badge = 'Sale Off',
  rating,
  reviewsCount,
  price,
  oldPrice,
  discountPercentage = '26% Off',
  description,
  sizes = ['50g', '60g', '90g', '100g', '150g'],
  defaultSize = '60g',
  sizePrices,
  specs,
  image,
}) => {
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState(defaultSize || (sizes && sizes[0]) || '');
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isCompared, setIsCompared] = useState(false);
  const [addedToast, setAddedToast] = useState(false);

  useEffect(() => {
    setSelectedSize(defaultSize || (sizes && sizes[0]) || '');
    setQuantity(1);
  }, [id, defaultSize, sizes]);

  const getCurrentPricing = () => {
    if (sizePrices && selectedSize && sizePrices[selectedSize]) {
      const sp = sizePrices[selectedSize];
      const dynDiscount = sp.oldPrice && sp.oldPrice > sp.price
        ? `${Math.round(((sp.oldPrice - sp.price) / sp.oldPrice) * 100)}% Off`
        : discountPercentage;
      return {
        price: sp.price,
        oldPrice: sp.oldPrice,
        discount: dynDiscount,
      };
    }

    if (sizes && sizes.length > 1 && selectedSize) {
      const idx = sizes.indexOf(selectedSize);
      const defIdx = defaultSize ? sizes.indexOf(defaultSize) : 0;
      if (idx !== -1 && defIdx !== -1 && idx !== defIdx) {
        const mult = 1 + (idx - defIdx) * 0.4;
        const dynPrice = Number((price * Math.max(0.4, mult)).toFixed(2));
        const dynOldPrice = oldPrice ? Number((oldPrice * Math.max(0.4, mult)).toFixed(2)) : undefined;
        const dynDiscount = dynOldPrice && dynOldPrice > dynPrice
          ? `${Math.round(((dynOldPrice - dynPrice) / dynOldPrice) * 100)}% Off`
          : discountPercentage;
        return { price: dynPrice, oldPrice: dynOldPrice, discount: dynDiscount };
      }
    }

    return { price, oldPrice, discount: discountPercentage };
  };

  const activePricing = getCurrentPricing();

  const handleAddToCart = () => {
    addToCart(
      {
        id: `${id}-${selectedSize.toLowerCase().replace(/[^a-z0-9]/g, '-')}`,
        title: title,
        selectedSize: selectedSize,
        price: activePricing.price,
        oldPrice: activePricing.oldPrice,
        image: image,
      },
      quantity
    );

    setAddedToast(true);
    setTimeout(() => {
      setAddedToast(false);
    }, 2500);
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={`m-product-info__star ${i <= Math.round(rating) ? 'm-product-info__star--filled' : 'm-product-info__star--empty'}`}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="m-product-info">
      {badge && (
        <div className="m-product-info__badge-wrap">
          <Badge label={badge} type="sale-off" />
        </div>
      )}

      <h1 className="m-product-info__title">{title}</h1>

      <div className="m-product-info__rating-row">
        <div className="m-product-info__stars">{renderStars()}</div>
        <span className="m-product-info__reviews">({reviewsCount} reviews)</span>
      </div>

      <div className="m-product-info__price-row">
        <div className="m-product-info__current-price">${activePricing.price.toFixed(2)}</div>
        <div className="m-product-info__old-price-group">
          {activePricing.discount && (
            <span className="m-product-info__discount">{activePricing.discount}</span>
          )}
          {activePricing.oldPrice && (
            <span className="m-product-info__old-price">${activePricing.oldPrice.toFixed(2)}</span>
          )}
        </div>
      </div>

      <p className="m-product-info__description">{description}</p>

      {sizes && sizes.length > 0 && (
        <div className="m-product-info__size-row">
          <span className="m-product-info__size-label">Size / Weight / Portion:</span>
          <div className="m-product-info__size-list">
            {sizes.map((size) => (
              <button
                key={size}
                type="button"
                className={`m-product-info__size-btn ${selectedSize === size ? 'm-product-info__size-btn--active' : ''}`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="m-product-info__actions-row">
        <QuantityInput value={quantity} onChange={setQuantity} min={1} max={99} />

        <Button
          variant="add-cart-large"
          className="m-product-info__add-btn"
          onClick={handleAddToCart}
        >
          <img src={cartIcon} alt="" className="m-product-info__cart-icon" />
          Add to cart
        </Button>

        <button
          type="button"
          className={`m-product-info__action-icon-btn ${isWishlisted ? 'm-product-info__action-icon-btn--active' : ''}`}
          onClick={() => setIsWishlisted(!isWishlisted)}
          aria-label="Add to wishlist"
          title="Add to wishlist"
        >
          <img src={wishlistIcon} alt="Wishlist" className="m-product-info__icon-img" />
        </button>

        <button
          type="button"
          className={`m-product-info__action-icon-btn ${isCompared ? 'm-product-info__action-icon-btn--active' : ''}`}
          onClick={() => setIsCompared(!isCompared)}
          aria-label="Compare"
          title="Compare"
        >
          <img src={compareIcon} alt="Compare" className="m-product-info__icon-img" />
        </button>
      </div>

      {addedToast && (
        <div className="m-product-info__toast">
          ✓ Added {quantity} item(s) to your cart!
        </div>
      )}

      <div className="m-product-info__specs-grid">
        <div className="m-product-info__specs-col">
          <div className="m-product-info__spec-item">
            <span className="m-product-info__spec-label">Type:</span>
            <span className="m-product-info__spec-value">{specs.type}</span>
          </div>
          <div className="m-product-info__spec-item">
            <span className="m-product-info__spec-label">MFG:</span>
            <span className="m-product-info__spec-value">{specs.mfg}</span>
          </div>
          <div className="m-product-info__spec-item">
            <span className="m-product-info__spec-label">LIFE:</span>
            <span className="m-product-info__spec-value">{specs.life}</span>
          </div>
        </div>

        <div className="m-product-info__specs-col">
          <div className="m-product-info__spec-item">
            <span className="m-product-info__spec-label">SKU:</span>
            <span className="m-product-info__spec-value">{specs.sku}</span>
          </div>
          <div className="m-product-info__spec-item">
            <span className="m-product-info__spec-label">Tags:</span>
            <span className="m-product-info__spec-value">{specs.tags}</span>
          </div>
          <div className="m-product-info__spec-item">
            <span className="m-product-info__spec-label">Stock:</span>
            <span className="m-product-info__spec-value">{specs.stock}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
