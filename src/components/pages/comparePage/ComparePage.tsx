import { useState } from 'react';
import { Header, Footer, BottomBanner } from '../../organisms';
import { Breadcrumb } from '../../molecules';
import { Button, Text } from '../../atoms';
import { useCompare, type CompareItem } from '../../../context/compareContext';
import { useCart } from '../../../context/cartContext';
import { SHOP_PRODUCTS_MOCK } from '../../../mocks/shopMocks';
import { TRANSLATIONS } from '../../../constants/translations';
import './comparePage.css';

export const ComparePage = () => {
  const { compareList, removeFromCompare, clearCompare, addToCompare } = useCompare();
  const { addToCart } = useCart();
  const [actionMessage, setActionMessage] = useState<string | null>(null);

  const handleAddToCart = (item: CompareItem) => {
    addToCart({
      id: item.id,
      title: item.title,
      price: item.price,
      oldPrice: item.oldPrice,
      image: item.image,
    });
    setActionMessage(`Added "${item.title}" to cart!`);
    setTimeout(() => setActionMessage(null), 2500);
  };

  const handleAddAllToCart = () => {
    if (compareList.length === 0) return;
    compareList.forEach((item) => {
      addToCart({
        id: item.id,
        title: item.title,
        price: item.price,
        oldPrice: item.oldPrice,
        image: item.image,
      });
    });
    setActionMessage(`Added all ${compareList.length} compared item(s) to cart!`);
    setTimeout(() => setActionMessage(null), 3000);
  };

  const handleSelectProductToAdd = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = e.target.value;
    if (!selectedId) return;

    const prod = SHOP_PRODUCTS_MOCK.find((p) => String(p.id) === selectedId);
    if (prod) {
      addToCompare({
        id: prod.id,
        title: prod.title,
        price: prod.price,
        oldPrice: prod.oldPrice,
        image: prod.imageSrc,
        rating: prod.rating,
        reviewsCount: prod.reviewsCount,
        category: prod.category,
        vendor: prod.vendor,
        description: prod.description,
        weight: '500g',
        inStock: true,
      });
    }
    e.target.value = '';
  };

  const renderStars = (rating: number = 4) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={`p-compare__star ${i <= Math.round(rating) ? 'p-compare__star--filled' : 'p-compare__star--empty'}`}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  const calculateValueScore = (item: CompareItem) => {
    const score = item.qualityScore || 90;
    const priceRatio = item.price > 0 ? (score / item.price) * 3.5 : 90;
    if (priceRatio > 12) return '★★★★★ Exceptional Value';
    if (priceRatio > 8) return '★★★★☆ Great Value';
    return '★★★★☆ Good Value';
  };

  return (
    <div className="p-compare-page">
      <Header currentPage="pages" />

      <div className="p-compare__breadcrumb-wrap">
        <Breadcrumb
          items={[
            { label: 'Home', href: '#/' },
            { label: 'Shop', href: '#/shop' },
            { label: TRANSLATIONS.comparePage.title },
          ]}
        />
      </div>

      <main className="p-compare__main">
        <div className="p-compare__container">
          <div className="p-compare__header">
            <div>
              <Text variant="sec-title" as="h1" className="p-compare__title">
                {TRANSLATIONS.comparePage.title}
              </Text>
              <p className="p-compare__subtitle">
                There are <strong className="text-green">{compareList.length}</strong> {TRANSLATIONS.comparePage.productsInCompare}
              </p>
            </div>

            <div className="p-compare__header-right">
              {compareList.length < 4 && (
                <div className="p-compare__selector-wrap">
                  <select
                    className="p-compare__selector"
                    onChange={handleSelectProductToAdd}
                    defaultValue=""
                    aria-label={TRANSLATIONS.comparePage.addProduct}
                  >
                    <option value="" disabled>
                      {TRANSLATIONS.comparePage.addProduct}
                    </option>
                    {SHOP_PRODUCTS_MOCK.filter((p) => !compareList.some((c) => String(c.id) === String(p.id))).map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.title} (${p.price.toFixed(2)})
                      </option>
                    ))}
                  </select>
                </div>
              )}
              <a href="#/shop" className="p-compare__continue-link">
                ← {TRANSLATIONS.wishlistPage.continueShopping}
              </a>
            </div>
          </div>

          {actionMessage && (
            <div className="p-compare__alert">
              {actionMessage}
            </div>
          )}

          {compareList.length === 0 ? (
            <section className="p-compare__empty">
              <div className="p-compare__empty-card">
                <div className="p-compare__empty-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 3 21 3 21 8" />
                    <line x1="4" y1="20" x2="21" y2="3" />
                    <polyline points="21 16 21 21 16 21" />
                    <line x1="15" y1="15" x2="21" y2="21" />
                    <line x1="4" y1="4" x2="9" y2="9" />
                  </svg>
                </div>
                <h2 className="p-compare__empty-title">{TRANSLATIONS.comparePage.noProducts}</h2>
                <p className="p-compare__empty-desc">
                  {TRANSLATIONS.comparePage.noProductsDesc}
                </p>

                <div className="p-compare__suggestions">
                  <span className="p-compare__suggestions-title">{TRANSLATIONS.comparePage.quickSuggestions}</span>
                  <div className="p-compare__suggestions-list">
                    {SHOP_PRODUCTS_MOCK.slice(0, 3).map((prod) => (
                      <button
                        key={prod.id}
                        type="button"
                        className="p-compare__suggestion-btn"
                        onClick={() =>
                          addToCompare({
                            id: prod.id,
                            title: prod.title,
                            price: prod.price,
                            oldPrice: prod.oldPrice,
                            image: prod.imageSrc,
                            rating: prod.rating,
                            reviewsCount: prod.reviewsCount,
                            category: prod.category,
                            vendor: prod.vendor,
                            description: prod.description,
                            weight: '500g',
                            inStock: true,
                          })
                        }
                      >
                        + Compare {prod.title.slice(0, 22)}...
                      </button>
                    ))}
                  </div>
                </div>

                <a href="#/shop" className="p-compare__empty-btn">
                  {TRANSLATIONS.comparePage.browseShop}
                </a>
              </div>
            </section>
          ) : (
            <div className="p-compare__content">
              <div className="p-compare__table-wrapper">
                <table className="p-compare__table">
                  <tbody>
                    <tr className="p-compare__row p-compare__row--preview">
                      <th className="p-compare__row-label">{TRANSLATIONS.comparePage.product}</th>
                      {compareList.map((item) => {
                        const productHref = `#/product?id=${encodeURIComponent(String(item.id))}`;
                        return (
                          <td key={item.id} className="p-compare__col">
                            <div className="p-compare__product-card">
                              <a href={productHref} className="p-compare__thumb-link">
                                <img src={item.image} alt={item.title} className="p-compare__thumb" />
                              </a>
                              <a href={productHref} className="p-compare__title-link">
                                <h4 className="p-compare__product-title">{item.title}</h4>
                              </a>
                              <div className="p-compare__rating">
                                {renderStars(item.rating)}
                                <span className="p-compare__reviews">({item.reviewsCount || 4})</span>
                              </div>
                              <div className="p-compare__price-box">
                                <span className="p-compare__price">${item.price.toFixed(2)}</span>
                                {item.oldPrice && (
                                  <span className="p-compare__old-price">${item.oldPrice.toFixed(2)}</span>
                                )}
                              </div>
                              <span className="p-compare__stock-tag">{TRANSLATIONS.wishlistPage.inStock}</span>
                            </div>
                          </td>
                        );
                      })}
                    </tr>

                    <tr className="p-compare__row p-compare__row--highlight">
                      <th className="p-compare__row-label">{TRANSLATIONS.comparePage.qualityScore}</th>
                      {compareList.map((item) => {
                        const score = item.qualityScore || 92;
                        return (
                          <td key={item.id} className="p-compare__col">
                            <div className="p-compare__score-box">
                              <div className="p-compare__score-header">
                                <span className="p-compare__score-num">{score}</span>
                                <span className="p-compare__score-max">/ 100</span>
                              </div>
                              <div className="p-compare__score-bar">
                                <div
                                  className="p-compare__score-fill"
                                  style={{
                                    width: `${score}%`,
                                    backgroundColor: score > 90 ? 'var(--color-primary)' : '#f59e0b',
                                  }}
                                />
                              </div>
                              <span className="p-compare__grade-badge">
                                {item.healthGrade || 'Nutri-Score A (Organic)'}
                              </span>
                              <div className="p-compare__freshness">
                                🌿 Freshness Guarantee: <strong>{item.freshnessIndex || '98%'}</strong>
                              </div>
                              <div className="p-compare__value-text">
                                {calculateValueScore(item)}
                              </div>
                            </div>
                          </td>
                        );
                      })}
                    </tr>

                    <tr className="p-compare__row">
                      <th className="p-compare__row-label">{TRANSLATIONS.comparePage.description}</th>
                      {compareList.map((item) => (
                        <td key={item.id} className="p-compare__col">
                          <p className="p-compare__desc">
                            {item.description || 'Farm-fresh quality produce curated with strict quality checks and delivered safely to your door.'}
                          </p>
                        </td>
                      ))}
                    </tr>

                    <tr className="p-compare__row">
                      <th className="p-compare__row-label">{TRANSLATIONS.comparePage.ingredients}</th>
                      {compareList.map((item) => (
                        <td key={item.id} className="p-compare__col">
                          <div className="p-compare__ingredients-box">
                            <span className="p-compare__ingredients-text">
                              {item.ingredients || '100% Natural Organic Ingredients, Non-GMO Certified, No Artificial Colors or Preservatives'}
                            </span>
                          </div>
                        </td>
                      ))}
                    </tr>

                    <tr className="p-compare__row">
                      <th className="p-compare__row-label">{TRANSLATIONS.comparePage.brand}</th>
                      {compareList.map((item) => (
                        <td key={item.id} className="p-compare__col">
                          <span className="p-compare__vendor-name">{item.vendor || 'NestFood'}</span>
                        </td>
                      ))}
                    </tr>

                    <tr className="p-compare__row">
                      <th className="p-compare__row-label">{TRANSLATIONS.comparePage.category}</th>
                      {compareList.map((item) => (
                        <td key={item.id} className="p-compare__col">
                          <span className="p-compare__category-badge">{item.category}</span>
                        </td>
                      ))}
                    </tr>

                    <tr className="p-compare__row">
                      <th className="p-compare__row-label">{TRANSLATIONS.comparePage.weight}</th>
                      {compareList.map((item) => (
                        <td key={item.id} className="p-compare__col">
                          <strong className="p-compare__weight">{item.weight || '500g'}</strong>
                        </td>
                      ))}
                    </tr>

                    <tr className="p-compare__row">
                      <th className="p-compare__row-label">{TRANSLATIONS.comparePage.shelfLife}</th>
                      {compareList.map((item) => (
                        <td key={item.id} className="p-compare__col">
                          <span className="p-compare__shelf-life">{item.shelfLife || '12 Months (Store Cool & Dry)'}</span>
                        </td>
                      ))}
                    </tr>

                    <tr className="p-compare__row p-compare__row--actions">
                      <th className="p-compare__row-label">{TRANSLATIONS.comparePage.buyNow}</th>
                      {compareList.map((item) => (
                        <td key={item.id} className="p-compare__col">
                          <Button
                            variant="add-long"
                            className="p-compare__add-btn"
                            onClick={() => handleAddToCart(item)}
                          >
                            Add to Cart
                          </Button>
                        </td>
                      ))}
                    </tr>

                    <tr className="p-compare__row p-compare__row--remove">
                      <th className="p-compare__row-label">{TRANSLATIONS.comparePage.action}</th>
                      {compareList.map((item) => (
                        <td key={item.id} className="p-compare__col">
                          <button
                            type="button"
                            className="p-compare__remove-btn"
                            onClick={() => removeFromCompare(item.id)}
                            title={TRANSLATIONS.comparePage.removeFromCompare}
                          >
                            ✕ {TRANSLATIONS.comparePage.removeFromCompare}
                          </button>
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="p-compare__footer-actions">
                <Button
                  variant="primary"
                  className="p-compare__btn-action"
                  onClick={handleAddAllToCart}
                >
                  {TRANSLATIONS.wishlistPage.addAll}
                </Button>

                <button
                  type="button"
                  className="p-compare__clear-btn"
                  onClick={clearCompare}
                >
                  {TRANSLATIONS.comparePage.clearCompare}
                </button>
              </div>
            </div>
          )}
        </div>
      </main>

      <BottomBanner />
      <Footer />
    </div>
  );
};
