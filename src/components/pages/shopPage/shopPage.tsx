import { useState, useMemo } from 'react';
import { Header, Footer, BlogBanner, ShopSidebar, ShopProductsGrid, DealsSection, BottomBanner } from '../../organisms';
import { ResultsBar, Pagination, type SortOption } from '../../molecules';
import { SHOP_PRODUCTS_MOCK, SHOP_CATEGORIES_MOCK, SHOP_COLORS_MOCK, SHOP_CONDITIONS_MOCK, SHOP_NEW_PRODUCTS_MOCK } from '../../../mocks/shopMocks';
import './shopPage.css';

export const ShopPage = () => {
  const [priceMin, setPriceMin] = useState(0);
  const [priceMax, setPriceMax] = useState(400);
  const [appliedFilters, setAppliedFilters] = useState({ priceMin: 0, priceMax: 400 });

  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedConditions, setSelectedConditions] = useState<string[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [view, setView] = useState<'grid' | 'list'>('grid');
  const [showCount, setShowCount] = useState(20);
  const [sortBy, setSortBy] = useState<SortOption>('featured');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredProducts = useMemo(() => {
    const filtered = SHOP_PRODUCTS_MOCK.filter((product) => {
      const matchesPrice = product.price >= appliedFilters.priceMin && product.price <= appliedFilters.priceMax;
      const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
      return matchesPrice && matchesCategory;
    });

    const sorted = [...filtered];

    if (sortBy === 'price-low') {
      sorted.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      sorted.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'newest') {
      sorted.reverse();
    }

    return sorted;
  }, [appliedFilters, activeCategory, sortBy]);

  const totalPages = Math.max(Math.ceil(filteredProducts.length / showCount), 1);

  const visibleProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * showCount;
    return filteredProducts.slice(startIndex, startIndex + showCount);
  }, [filteredProducts, showCount, currentPage]);

  const handleApplyFilter = () => {
    setAppliedFilters({ priceMin, priceMax });
    setCurrentPage(1);
  };

  const handleShowCountChange = (count: number) => {
    setShowCount(count);
    setCurrentPage(1);
  };

  const handleSortChange = (sort: SortOption) => {
    setSortBy(sort);
    setCurrentPage(1);
  };

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setCurrentPage(1);
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
              activeCategory={activeCategory}
              onCategoryChange={handleCategoryChange}
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
            <ResultsBar
              itemCount={filteredProducts.length}
              view={view}
              onViewChange={setView}
              showCount={showCount}
              onShowCountChange={handleShowCountChange}
              sortBy={sortBy}
              onSortChange={handleSortChange}
            />
            <ShopProductsGrid products={visibleProducts} view={view} />

            {totalPages > 1 && (
              <div className="p-shop-page__pagination">
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={setCurrentPage}
                />
              </div>
            )}
          </div>
        </div>

        <DealsSection />
      </main>

      <BottomBanner />
      <Footer />
    </>
  );
};