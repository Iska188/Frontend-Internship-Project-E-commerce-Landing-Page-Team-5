import { Button, Text } from '../../atoms';
import { Footer, Header } from '../../organisms';
import { useCart } from '../../../context/cartContext';
import { TRANSLATIONS } from '../../../constants/translations';
import './cartPage.css';

export function CartPage() {
  const { cart, updateQuantity, removeFromCart, totalPrice, totalItems, clearCart } = useCart();

  return (
    <div className="cart-page-shell">
      <Header cartPage />

      <main className="cart-page-main">
        <section className="cart-page">
          <div className="cart-page__top">
            <div>
              <Text variant="sec-title" as="h1" className="cart-page__title">
                {TRANSLATIONS.cartPage.title}
              </Text>
              <p className="cart-page__subtitle">
                {totalItems} {TRANSLATIONS.cartPage.productsInCart}
              </p>
            </div>

            <a className="cart-page__continue" href="/#">
              <span aria-hidden="true"></span>
              {TRANSLATIONS.cartPage.continueShopping}
            </a>
          </div>

          {cart.length === 0 ? (
            <section className="cart-page__empty">
              <div className="cart-page__empty-card">
                <div className="cart-page__empty-icon" aria-hidden="true">
                  <img src="src/assets/header/cart.svg" alt="" />
                </div>
                <Text variant="sec-title" as="h2" className="cart-page__empty-title">
                  {TRANSLATIONS.cartPage.emptyTitle}
                </Text>
                <p className="cart-page__empty-copy">
                  {TRANSLATIONS.cartPage.emptyDescription}
                </p>
                <a className="cart-page__empty-link" href="/#">
                  {TRANSLATIONS.cartPage.backToProducts}
                </a>
              </div>
            </section>
          ) : (
            <div className="cart-page__layout">
              <div className="cart-page__items">
                {cart.map((item) => (
                  <article className="cart-page__cart-item" key={item.id}>
                    <div className="cart-page__image-wrap">
                      <img className="cart-page__item-image" src={item.image} alt={item.title} />
                    </div>

                    <div className="cart-page__item-details">
                      <Text variant="prod-title" as="h3" className="cart-page__item-title">
                        {item.title}
                      </Text>
                      <div className="cart-page__item-price">${item.price.toFixed(2)}</div>
                    </div>

                    <div className="cart-page__qty-controls">
                      <button className="cart-page__qty-button" onClick={() => updateQuantity(item.id, -1)} aria-label="Decrease quantity">
                        -
                      </button>
                      <span className="cart-page__qty-value">{item.quantity}</span>
                      <button className="cart-page__qty-button" onClick={() => updateQuantity(item.id, 1)} aria-label="Increase quantity">
                        +
                      </button>
                    </div>

                    <button className="cart-page__item-remove" onClick={() => removeFromCart(item.id)}>
                      {TRANSLATIONS.cartPage.remove}
                    </button>
                  </article>
                ))}
              </div>

              <aside className="cart-page__summary">
                <Text variant="sec-title" as="h2" className="cart-page__summary-title">
                  {TRANSLATIONS.cartPage.summary.title}
                </Text>

                <div className="cart-page__summary-row">
                  <span>{TRANSLATIONS.cartPage.summary.subtotal}</span>
                  <strong>${totalPrice.toFixed(2)}</strong>
                </div>

                <div className="cart-page__summary-row">
                  <span>{TRANSLATIONS.cartPage.summary.shipping}</span>
                  <strong>0.00</strong>
                </div>

                <div className="cart-page__summary-row cart-page__summary-row--total">
                  <span>{TRANSLATIONS.cartPage.summary.totalDue}</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>

                <Button variant="primary" className="cart-page__summary-button">
                  {TRANSLATIONS.cartPage.checkout}
                </Button>

                <Button variant="primary" className="cart-page__summary-button cart-page__summary-button--secondary" onClick={clearCart}>
                  {TRANSLATIONS.cartPage.clearCart}
                </Button>
              </aside>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}
