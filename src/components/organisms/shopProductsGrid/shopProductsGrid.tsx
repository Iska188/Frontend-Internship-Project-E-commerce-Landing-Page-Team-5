import { ProductCard } from '../../molecules';
import './shopProductsGrid.css';

interface ProductItem {
  id: string;
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
  price: number;
  oldPrice?: number;
}

interface ShopProductsGridProps {
  products: ProductItem[];
  view: 'grid' | 'list';
}

export const ShopProductsGrid = ({ products, view }: ShopProductsGridProps) => {
  return (
    <div className={`o-shop-products-grid o-shop-products-grid--${view}`}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          variant="popular"
          layout={view === 'list' ? 'horizontal' : 'vertical'}
          {...product}
          price={`$${product.price.toFixed(2)}`}
          oldPrice={product.oldPrice ? `$${product.oldPrice.toFixed(2)}` : undefined}
        />
      ))}
    </div>
  );
};