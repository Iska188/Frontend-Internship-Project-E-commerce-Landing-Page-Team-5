import React from 'react';
import { ProductGallery, ProductInfo } from '../../molecules';
import type { ProductDetailsData } from '../../../mocks/productDetailsMock';
import './productOverview.css';

interface ProductOverviewProps {
  product: ProductDetailsData;
}

export const ProductOverview: React.FC<ProductOverviewProps> = ({ product }) => {
  return (
    <div className="o-product-overview">
      <div className="o-product-overview__gallery-col">
        <ProductGallery images={product.images} title={product.title} />
      </div>
      <div className="o-product-overview__info-col">
        <ProductInfo
          id={product.id}
          title={product.title}
          badge={product.badge}
          rating={product.rating}
          reviewsCount={product.reviewsCount}
          price={product.price}
          oldPrice={product.oldPrice}
          discountPercentage={product.discountPercentage}
          description={product.description}
          sizes={product.sizes}
          defaultSize={product.defaultSize}
          sizePrices={product.sizePrices}
          specs={product.specs}
          image={product.images[0]}
        />
      </div>
    </div>
  );
};
