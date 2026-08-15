import { useState, useMemo } from 'react';
import { Header, Footer, BlogBanner, ShopSidebar, ShopProductsGrid, DealsSection, BottomBanner } from '../../organisms';
import { SHOP_PRODUCTS_MOCK, SHOP_CATEGORIES_MOCK, SHOP_COLORS_MOCK, SHOP_CONDITIONS_MOCK, SHOP_NEW_PRODUCTS_MOCK } from '../../../mocks/shopMocks';
import './shopPage.css';

export const ShopPage = () => {
  const [priceMin, setPriceMin] = useState(0);
  const [priceMax, setPriceMax] = useState(400);
  const [appliedFilters, setAppliedFilters] = useState({ priceMin: 0, priceMax: 2000 });
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedConditions, setSelectedConditions] = useState<string[]>([]);

  const filteredProducts = useMemo(() => {
    return SHOP_PRODUCTS_MOCK.filter(
      (product) => product.price >= appliedFilters.priceMin && product.price <= appliedFilters.priceMax
    );
  }, [appliedFilters]);

  const handleApplyFilter = () => {
    setAppliedFilters({ priceMin, priceMax });
  };

  return (
    <>
      <Header />
      <BlogBanner />

      <main className="p-shop-page">
        <div className="p-shop-page__container">
          <div className="p-shop-page__sidebar">
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
          </div>

          <div className="p-shop-page__content">
            <ShopProductsGrid products={filteredProducts} />
          </div>
        </div>

        <DealsSection />
      </main>

      <BottomBanner />
      <Footer />
    </>
  );
};