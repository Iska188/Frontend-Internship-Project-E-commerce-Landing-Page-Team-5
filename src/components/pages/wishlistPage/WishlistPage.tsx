import { useState } from 'react';
import { Header, Footer, BottomBanner } from '../../organisms';
import { Breadcrumb } from '../../molecules';
import { Button, Text } from '../../atoms';
import { useWishlist, type WishlistItem } from '../../../context/wishlistContext';
import { useCart } from '../../../context/cartContext';
import { TRANSLATIONS } from '../../../constants/translations';
import './wishlistPage.css';

export const WishlistPage = () => {
  const { wishlist, removeFromWishlist, clearWishlist } = useWishlist();
  const { addToCart } = useCart();
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [actionMessage, setActionMessage] = useState<string | null>(null);

  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setSelectedIds(wishlist.map((item) => String(item.id)));
    } else {
      setSelectedIds([]);
    }
  };

  const handleSelectOne = (id: string | number) => {
    const sId = String(id);
    setSelectedIds((prev) =>
      prev.includes(sId) ? prev.filter((i) => i !== sId) : [...prev, sId]
    );
  };

  const handleAddToCart = (item: WishlistItem) => {
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
    if (wishlist.length === 0) return;
    wishlist.forEach((item) => {
      addToCart({
        id: item.id,
        title: item.title,
        price: item.price,
        oldPrice: item.oldPrice,
        image: item.image,
      });
    });
    setActionMessage(`Added all ${wishlist.length} item(s) to cart!`);
    setTimeout(() => setActionMessage(null), 3000);
  };

  const handleAddSelectedToCart = () => {
    const selectedItems = wishlist.filter((item) => selectedIds.includes(String(item.id)));
    if (selectedItems.length === 0) return;
    selectedItems.forEach((item) => {
      addToCart({
        id: item.id,
        title: item.title,
        price: item.price,
        oldPrice: item.oldPrice,
        image: item.image,
      });
    });
    setActionMessage(`Added ${selectedItems.length} selected item(s) to cart!`);
    setTimeout(() => setActionMessage(null), 3000);
  };

  const renderStars = (rating: number = 4) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={`p-wishlist__star ${i <= Math.round(rating) ? 'p-wishlist__star--filled' : 'p-wishlist__star--empty'}`}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="p-wishlist-page">
      <Header currentPage="pages" />

      <div className="p-wishlist__breadcrumb-wrap">
        <Breadcrumb
          items={[
            { label: 'Home', href: '#/' },
            { label: 'Shop', href: '#/shop' },
            { label: TRANSLATIONS.wishlistPage.title },
          ]}
        />
      </div>

      <main className="p-wishlist__main">
        <div className="p-wishlist__container">
          <div className="p-wishlist__header">
            <div>
              <Text variant="sec-title" as="h1" className="p-wishlist__title">
                {TRANSLATIONS.wishlistPage.title}
              </Text>
              <p className="p-wishlist__subtitle">
                There are <strong className="text-green">{wishlist.length}</strong> {TRANSLATIONS.wishlistPage.productsInList}
              </p>
            </div>

            <div className="p-wishlist__header-actions">
              <a href="#/shop" className="p-wishlist__continue-link">
                ← {TRANSLATIONS.wishlistPage.continueShopping}
              </a>
            </div>
          </div>

          {actionMessage && (
            <div className="p-wishlist__alert">
              {actionMessage}
            </div>
          )}

          {wishlist.length === 0 ? (
            <section className="p-wishlist__empty">
              <div className="p-wishlist__empty-card">
                <div className="p-wishlist__empty-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="36" height="36" fill="#f74b81" stroke="#f74b81" strokeWidth="1">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                </div>
                <h2 className="p-wishlist__empty-title">{TRANSLATIONS.wishlistPage.emptyTitle}</h2>
                <p className="p-wishlist__empty-desc">
                  {TRANSLATIONS.wishlistPage.emptyDesc}
                </p>
                <a href="#/shop" className="p-wishlist__empty-btn">
                  {TRANSLATIONS.wishlistPage.exploreProducts}
                </a>
              </div>
            </section>
          ) : (
            <div className="p-wishlist__content">
              <div className="p-wishlist__table-wrapper">
                <table className="p-wishlist__table">
                  <thead>
                    <tr>
                      <th className="p-wishlist__th-select">
                        <input
                          type="checkbox"
                          onChange={handleSelectAll}
                          checked={selectedIds.length === wishlist.length && wishlist.length > 0}
                          aria-label="Select all products"
                        />
                      </th>
                      <th className="p-wishlist__th-product">{TRANSLATIONS.wishlistPage.product}</th>
                      <th className="p-wishlist__th-price">{TRANSLATIONS.wishlistPage.unitPrice}</th>
                      <th className="p-wishlist__th-stock">{TRANSLATIONS.wishlistPage.stockStatus}</th>
                      <th className="p-wishlist__th-action">{TRANSLATIONS.wishlistPage.action}</th>
                      <th className="p-wishlist__th-remove">{TRANSLATIONS.wishlistPage.remove}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {wishlist.map((item) => {
                      const isSelected = selectedIds.includes(String(item.id));
                      const productHref = `#/product?id=${encodeURIComponent(String(item.id))}`;

                      return (
                        <tr key={item.id} className={`p-wishlist__tr ${isSelected ? 'p-wishlist__tr--selected' : ''}`}>
                          <td className="p-wishlist__td-select">
                            <input
                              type="checkbox"
                              checked={isSelected}
                              onChange={() => handleSelectOne(item.id)}
                              aria-label={`Select ${item.title}`}
                            />
                          </td>
                          <td className="p-wishlist__td-product">
                            <div className="p-wishlist__product-cell">
                              <a href={productHref} className="p-wishlist__product-thumb-link">
                                <img src={item.image} alt={item.title} className="p-wishlist__product-thumb" />
                              </a>
                              <div className="p-wishlist__product-info">
                                <a href={productHref} className="p-wishlist__product-title-link">
                                  <h4 className="p-wishlist__product-title">{item.title}</h4>
                                </a>
                                <div className="p-wishlist__product-rating">
                                  {renderStars(item.rating)}
                                  <span className="p-wishlist__product-reviews">
                                    ({item.reviewsCount || 4})
                                  </span>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="p-wishlist__td-price">
                            <div className="p-wishlist__price-wrap">
                              <span className="p-wishlist__current-price">${item.price.toFixed(2)}</span>
                              {item.oldPrice && (
                                <span className="p-wishlist__old-price">${item.oldPrice.toFixed(2)}</span>
                              )}
                            </div>
                          </td>
                          <td className="p-wishlist__td-stock">
                            <span className="p-wishlist__stock-badge p-wishlist__stock-badge--in">
                              {TRANSLATIONS.wishlistPage.inStock}
                            </span>
                          </td>
                          <td className="p-wishlist__td-action">
                            <Button
                              variant="add-long"
                              className="p-wishlist__add-btn"
                              onClick={() => handleAddToCart(item)}
                            >
                              Add to Cart
                            </Button>
                          </td>
                          <td className="p-wishlist__td-remove">
                            <button
                              type="button"
                              className="p-wishlist__remove-btn"
                              onClick={() => removeFromWishlist(item.id)}
                              title={TRANSLATIONS.wishlistPage.remove}
                              aria-label="Remove item"
                            >
                              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="3 6 5 6 21 6" />
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                <line x1="10" y1="11" x2="10" y2="17" />
                                <line x1="14" y1="11" x2="14" y2="17" />
                              </svg>
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              <div className="p-wishlist__footer-actions">
                <div className="p-wishlist__batch-actions">
                  {selectedIds.length > 0 && (
                    <Button
                      variant="primary"
                      className="p-wishlist__btn-action"
                      onClick={handleAddSelectedToCart}
                    >
                      {TRANSLATIONS.wishlistPage.addSelected} ({selectedIds.length})
                    </Button>
                  )}
                  <Button
                    variant="primary"
                    className="p-wishlist__btn-action"
                    onClick={handleAddAllToCart}
                  >
                    {TRANSLATIONS.wishlistPage.addAll}
                  </Button>
                </div>

                <button
                  type="button"
                  className="p-wishlist__clear-btn"
                  onClick={clearWishlist}
                >
                  {TRANSLATIONS.wishlistPage.clearWishlist}
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
