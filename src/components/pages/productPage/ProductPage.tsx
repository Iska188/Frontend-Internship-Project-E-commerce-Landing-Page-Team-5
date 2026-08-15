import { useState, useEffect } from 'react';
import {
  Header,
  Footer,
  BottomBanner,
  ProductDetailsSection,
  RelatedProducts,
  ShopSidebar,
} from '../../organisms';
import { Breadcrumb } from '../../molecules';
import { getProductById, RELATED_PRODUCTS_MOCK } from '../../../mocks/productDetailsMock';
import {
  SHOP_CATEGORIES_MOCK,
  SHOP_COLORS_MOCK,
  SHOP_CONDITIONS_MOCK,
  SHOP_NEW_PRODUCTS_MOCK,
} from '../../../mocks/shopMocks';
import './productPage.css';

export const ProductPage = () => {
  const getProductIdFromHash = () => {
    const hash = window.location.hash;
    if (hash.includes('?')) {
      const queryString = hash.split('?')[1];
      const params = new URLSearchParams(queryString);
      return params.get('id') || undefined;
    }
    if (hash.startsWith('#/product/')) {
      return hash.replace('#/product/', '');
    }
    return undefined;
  };

  const [productId, setProductId] = useState<string | undefined>(getProductIdFromHash);
  const [priceMin, setPriceMin] = useState(0);
  const [priceMax, setPriceMax] = useState(400);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedConditions, setSelectedConditions] = useState<string[]>([]);

  useEffect(() => {
    const handleHash = () => {
      setProductId(getProductIdFromHash());
    };

    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const product = getProductById(productId);

  const handleApplyFilter = () => {
    window.location.hash = '#/shop';
  };

  return (
    <div className="p-product-page-wrapper">
      <Header />

      <Breadcrumb
        items={[
          { label: 'Home', href: '#/' },
          { label: 'Vegetables & Tubers', href: '#/shop' },
          { label: product.title },
        ]}
      />

      <main className="p-product-page">
        <div className="p-product-page__container">
          <div className="p-product-page__main-content">
            <ProductDetailsSection key={product.id} product={product} />
            <RelatedProducts products={RELATED_PRODUCTS_MOCK} />
          </div>

          <aside className="p-product-page__sidebar">
            <ShopSidebar
              categories={SHOP_CATEGORIES_MOCK}
              priceMin={0}
              priceMax={400}
              currentPriceMin={priceMin}
              currentPriceMax={priceMax}
              onPriceChange={(min, max) => {
                setPriceMin(min);
                setPriceMax(max);
              }}
              colorOptions={SHOP_COLORS_MOCK}
              selectedColors={selectedColors}
              onColorChange={setSelectedColors}
              conditionOptions={SHOP_CONDITIONS_MOCK}
              selectedConditions={selectedConditions}
              onConditionChange={setSelectedConditions}
              onApplyFilter={handleApplyFilter}
              newProducts={SHOP_NEW_PRODUCTS_MOCK}
            />
          </aside>
        </div>
      </main>

      <BottomBanner />
      <Footer />
    </div>
  );
};
