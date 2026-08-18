import { ProductOverview } from '../productOverview/ProductOverview';
import { ProductTabs } from '../../molecules';
import type { ProductDetailsData } from '../../../mocks/productDetailsMock';
import './productDetailsSection.css';

interface ProductDetailsSectionProps {
  product: ProductDetailsData;
}

export const ProductDetailsSection: React.FC<ProductDetailsSectionProps> = ({ product }) => {
  return (
    <section className="o-product-details-section">
      <ProductOverview product={product} />
      <ProductTabs
        description={product.tabs.description}
        additionalInfo={product.tabs.additionalInfo}
        vendor={product.tabs.vendor}
        initialReviews={product.tabs.reviews}
      />
    </section>
  );
};
