import { ProductCard } from '../../molecules';
import './shopProductsGrid.css';

interface ProductItem {
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
  price: number;
  oldPrice?: number;
}

interface ShopProductsGridProps {
  products: ProductItem[];
}

export const ShopProductsGrid = ({ products }: ShopProductsGridProps) => {
  return (
    <div className="o-shop-products-grid">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          variant="popular"
          {...product}
          price={`$${product.price.toFixed(2)}`}
          oldPrice={product.oldPrice ? `$${product.oldPrice.toFixed(2)}` : undefined}
        />
      ))}
    </div>
  );
};