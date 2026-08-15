import React from 'react';
import { ProductCard } from '../../molecules';
import './relatedProducts.css';

export interface RelatedProductItem {
  id: string;
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
}

interface RelatedProductsProps {
  products: RelatedProductItem[];
  title?: string;
}

export const RelatedProducts: React.FC<RelatedProductsProps> = ({
  products,
  title = 'Related products',
}) => {
  return (
    <section className="o-related-products">
      <div className="o-related-products__header">
        <h2 className="o-related-products__title">{title}</h2>
        <div className="o-related-products__divider" />
      </div>

      <div className="o-related-products__grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            imageSrc={product.imageSrc}
            discountBadge={product.discountBadge}
            discountBgColor={product.discountBgColor}
            statusBadge={product.statusBadge}
            statusBadgeType={product.statusBadgeType}
            category={product.category}
            title={product.title}
            rating={product.rating}
            reviewsCount={product.reviewsCount}
            vendor={product.vendor}
            price={product.price}
            oldPrice={product.oldPrice}
            variant="popular"
          />
        ))}
      </div>
    </section>
  );
};
