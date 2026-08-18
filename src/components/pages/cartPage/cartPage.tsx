import { useState } from 'react';
import { Header, Footer, BottomBanner } from '../../organisms';
import { Breadcrumb } from '../../molecules';
import { Button, Text } from '../../atoms';
import { useCart } from '../../../context/cartContext';
import { TRANSLATIONS } from '../../../constants/translations';
import { VOUCHERS_MOCK, validateVoucher, type Voucher } from '../../../mocks';
import './cartPage.css';

export const CartPage = () => {
  const { cart, removeFromCart, updateQuantity, clearCart, totalPrice } = useCart();
  const [voucherCode, setVoucherCode] = useState('');
  const [appliedVoucher, setAppliedVoucher] = useState<Voucher | null>(null);
  const [voucherMessage, setVoucherMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [cartUpdatedToast, setCartUpdatedToast] = useState(false);

  const calculateDiscount = () => {
    if (!appliedVoucher) return 0;
    if (appliedVoucher.type === 'percentage') {
      return (totalPrice * appliedVoucher.discount) / 100;
    }
    return Math.min(totalPrice, appliedVoucher.discount);
  };

  const discountAmount = calculateDiscount();
  const finalPrice = Math.max(0, totalPrice - discountAmount);
  const totalCartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const handleApplyVoucher = (codeToApply?: string) => {
    const code = (codeToApply || voucherCode).trim();
    if (!code) {
      setVoucherMessage({ type: 'error', text: 'Please enter a coupon code.' });
      return;
    }

    const result = validateVoucher(code, totalPrice);

    if (result.valid && result.voucher) {
      setAppliedVoucher(result.voucher);
      setVoucherMessage({
        type: 'success',
        text: `Coupon "${result.voucher.code}" applied! You saved ${
          result.voucher.type === 'percentage'
            ? `${result.voucher.discount}%`
            : `$${result.voucher.discount.toFixed(2)}`
        }.`,
      });
      setVoucherCode('');
    } else {
      setAppliedVoucher(null);
      setVoucherMessage({
        type: 'error',
        text: result.error || 'Invalid coupon code.',
      });
    }
  };

  const handleRemoveVoucher = () => {
    setAppliedVoucher(null);
    setVoucherMessage(null);
    setVoucherCode('');
  };

  const handleUpdateCart = () => {
    setCartUpdatedToast(true);
    setTimeout(() => setCartUpdatedToast(false), 2500);
  };

  return (
    <div className="p-cart-page">
      <Header currentPage="pages" />

      <div className="p-cart__breadcrumb-wrap">
        <Breadcrumb
          items={[
            { label: 'Home', href: '#/' },
            { label: 'Shop', href: '#/shop' },
            { label: TRANSLATIONS.cartPage.title },
          ]}
        />
      </div>

      <main className="p-cart__main">
        <div className="p-cart__container">
          <div className="p-cart__header">
            <div>
              <Text variant="sec-title" as="h1" className="p-cart__title">
                {TRANSLATIONS.cartPage.title}
              </Text>
              <p className="p-cart__subtitle">
                There are <strong className="text-green">{totalCartCount}</strong> {TRANSLATIONS.cartPage.productsInCart}
              </p>
            </div>

            <div className="p-cart__header-actions">
              <a href="#/shop" className="p-cart__continue-link">
                ← {TRANSLATIONS.cartPage.continueShopping}
              </a>
              {cart.length > 0 && (
                <button
                  type="button"
                  className="p-cart__clear-btn"
                  onClick={clearCart}
                  title={TRANSLATIONS.cartPage.clearCart}
                >
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="3 6 5 6 21 6" />
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                    <line x1="10" y1="11" x2="10" y2="17" />
                    <line x1="14" y1="11" x2="14" y2="17" />
                  </svg>
                  {TRANSLATIONS.cartPage.clearCart}
                </button>
              )}
            </div>
          </div>

          {cartUpdatedToast && (
            <div className="p-cart__alert">
              ✓ Cart updated successfully!
            </div>
          )}

          {cart.length === 0 ? (
            <section className="p-cart__empty">
              <div className="p-cart__empty-card">
                <div className="p-cart__empty-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="38" height="38" fill="none" stroke="var(--color-primary)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="9" cy="21" r="1" />
                    <circle cx="20" cy="21" r="1" />
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                  </svg>
                </div>
                <h2 className="p-cart__empty-title">{TRANSLATIONS.cartPage.emptyTitle}</h2>
                <p className="p-cart__empty-desc">
                  {TRANSLATIONS.cartPage.emptyDescription}
                </p>
                <a href="#/shop" className="p-cart__empty-btn">
                  {TRANSLATIONS.cartPage.continueShopping}
                </a>
              </div>
            </section>
          ) : (
            <div className="p-cart__layout">
              <div className="p-cart__left-col">
                <div className="p-cart__table-wrapper">
                  <table className="p-cart__table">
                    <thead>
                      <tr>
                        <th className="p-cart__th-product">{TRANSLATIONS.cartPage.product || 'Product'}</th>
                        <th className="p-cart__th-price">{TRANSLATIONS.cartPage.unitPrice || 'Unit Price'}</th>
                        <th className="p-cart__th-qty">{TRANSLATIONS.cartPage.quantity || 'Quantity'}</th>
                        <th className="p-cart__th-subtotal">{TRANSLATIONS.cartPage.subtotal || 'Subtotal'}</th>
                        <th className="p-cart__th-remove">{TRANSLATIONS.cartPage.remove}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cart.map((item) => {
                        const itemSubtotal = item.price * item.quantity;
                        const productHref = `#/product?id=${encodeURIComponent(String(item.id))}`;

                        return (
                          <tr key={item.id} className="p-cart__tr">
                            <td className="p-cart__td-product">
                              <div className="p-cart__product-cell">
                                <a href={productHref} className="p-cart__product-thumb-link">
                                  <img src={item.image} alt={item.title} className="p-cart__product-thumb" />
                                </a>
                                <div className="p-cart__product-info">
                                  <a href={productHref} className="p-cart__product-title-link">
                                    <h4 className="p-cart__product-title">{item.title}</h4>
                                  </a>
                                  <span className="p-cart__product-vendor">
                                    By <strong className="text-green">NestFood</strong>
                                  </span>
                                </div>
                              </div>
                            </td>

                            <td className="p-cart__td-price">
                              <span className="p-cart__unit-price">${item.price.toFixed(2)}</span>
                            </td>

                            <td className="p-cart__td-qty">
                              <div className="p-cart__qty-stepper">
                                <button
                                  type="button"
                                  className="p-cart__qty-btn"
                                  onClick={() => updateQuantity(item.id, -1)}
                                  aria-label="Decrease quantity"
                                >
                                  -
                                </button>
                                <span className="p-cart__qty-val">{item.quantity}</span>
                                <button
                                  type="button"
                                  className="p-cart__qty-btn"
                                  onClick={() => updateQuantity(item.id, 1)}
                                  aria-label="Increase quantity"
                                >
                                  +
                                </button>
                              </div>
                            </td>

                            <td className="p-cart__td-subtotal">
                              <span className="p-cart__subtotal-price">${itemSubtotal.toFixed(2)}</span>
                            </td>

                            <td className="p-cart__td-remove">
                              <button
                                type="button"
                                className="p-cart__remove-btn"
                                onClick={() => removeFromCart(item.id)}
                                title={TRANSLATIONS.cartPage.remove}
                                aria-label="Remove product"
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

                <div className="p-cart__table-footer-actions">
                  <a href="#/shop" className="p-cart__btn-continue">
                    ← {TRANSLATIONS.cartPage.continueShopping}
                  </a>
                  <button
                    type="button"
                    className="p-cart__btn-update"
                    onClick={handleUpdateCart}
                  >
                    ↻ {TRANSLATIONS.cartPage.updateCart || 'Update Cart'}
                  </button>
                </div>

                <div className="p-cart__voucher-card">
                  <h3 className="p-cart__voucher-title">{TRANSLATIONS.voucher.couponTitle}</h3>
                  <div className="p-cart__voucher-form">
                    <input
                      type="text"
                      className="p-cart__voucher-input"
                      placeholder={TRANSLATIONS.voucher.couponPlaceholder}
                      value={voucherCode}
                      onChange={(e) => setVoucherCode(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && handleApplyVoucher()}
                    />
                    <Button
                      variant="primary"
                      className="p-cart__voucher-btn"
                      onClick={() => handleApplyVoucher()}
                    >
                      {TRANSLATIONS.voucher.apply}
                    </Button>
                  </div>

                  {voucherMessage && (
                    <div className={`p-cart__voucher-msg p-cart__voucher-msg--${voucherMessage.type}`}>
                      {voucherMessage.text}
                    </div>
                  )}

                  {appliedVoucher && (
                    <div className="p-cart__voucher-active">
                      <span className="p-cart__voucher-active-badge">
                        ✓ {appliedVoucher.code} ({appliedVoucher.type === 'percentage' ? `${appliedVoucher.discount}% OFF` : `$${appliedVoucher.discount} OFF`})
                      </span>
                      <button
                        type="button"
                        className="p-cart__voucher-remove-link"
                        onClick={handleRemoveVoucher}
                      >
                        {TRANSLATIONS.voucher.removeCoupon}
                      </button>
                    </div>
                  )}

                  <div className="p-cart__voucher-suggestions">
                    <span className="p-cart__voucher-suggestions-label">
                      {TRANSLATIONS.voucher.availableCoupons}
                    </span>
                    <div className="p-cart__voucher-chips">
                      {VOUCHERS_MOCK.filter((v) => new Date(v.expiryDate) >= new Date()).map((v) => (
                        <button
                          key={v.code}
                          type="button"
                          className="p-cart__voucher-chip"
                          onClick={() => {
                            setVoucherCode(v.code);
                            handleApplyVoucher(v.code);
                          }}
                          title={v.description}
                        >
                          <span className="p-cart__voucher-dot p-cart__voucher-dot--active"></span>
                          <strong>{v.code}</strong> ({v.type === 'percentage' ? `${v.discount}%` : `$${v.discount}`} off)
                        </button>
                      ))}
                    </div>

                    <span className="p-cart__voucher-suggestions-label p-cart__voucher-suggestions-label--expired">
                      Test Expired Coupons (Click to test date validation):
                    </span>
                    <div className="p-cart__voucher-chips">
                      {VOUCHERS_MOCK.filter((v) => new Date(v.expiryDate) < new Date()).map((v) => (
                        <button
                          key={v.code}
                          type="button"
                          className="p-cart__voucher-chip p-cart__voucher-chip--expired"
                          onClick={() => {
                            setVoucherCode(v.code);
                            handleApplyVoucher(v.code);
                          }}
                          title={`Expired on ${v.expiryDate}`}
                        >
                          <span className="p-cart__voucher-dot p-cart__voucher-dot--expired"></span>
                          <strong>{v.code}</strong> (Expired {v.expiryDate})
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <aside className="p-cart__summary-col">
                <div className="p-cart__summary-card">
                  <h3 className="p-cart__summary-title">
                    {TRANSLATIONS.cartPage.summary.title}
                  </h3>

                  <div className="p-cart__summary-row">
                    <span>{TRANSLATIONS.cartPage.summary.subtotal}</span>
                    <strong>${totalPrice.toFixed(2)}</strong>
                  </div>

                  <div className="p-cart__summary-row">
                    <span>{TRANSLATIONS.cartPage.summary.shipping}</span>
                    <strong className="text-green">{TRANSLATIONS.voucher.freeShipping}</strong>
                  </div>

                  {appliedVoucher && discountAmount > 0 && (
                    <div className="p-cart__summary-row p-cart__summary-row--discount">
                      <span>{TRANSLATIONS.voucher.discount} ({appliedVoucher.code})</span>
                      <strong>-${discountAmount.toFixed(2)}</strong>
                    </div>
                  )}

                  <div className="p-cart__summary-divider"></div>

                  <div className="p-cart__summary-row p-cart__summary-row--total">
                    <span>{TRANSLATIONS.cartPage.summary.total}</span>
                    <span className="p-cart__total-price">${finalPrice.toFixed(2)}</span>
                  </div>

                  <Button
                    variant="primary"
                    className="p-cart__checkout-btn"
                    onClick={() => alert(`Proceeding to checkout with total: $${finalPrice.toFixed(2)}`)}
                  >
                    {TRANSLATIONS.cartPage.checkout} ➔
                  </Button>
                </div>
              </aside>
            </div>
          )}
        </div>
      </main>

      <BottomBanner />
      <Footer />
    </div>
  );
};
