import { useCart } from '../../../context/cartContext';
import { HeaderAction } from '../../molecules';
import { TRANSLATIONS } from '../../../constants/translations';
import './cartAction.css';

interface CartActionContainerProps {
  cartPage?: boolean;
}

export function CartActionContainer({ cartPage = false }: CartActionContainerProps) {
  const { cart, totalItems, totalPrice, removeFromCart } = useCart();

  return (
    <div className={`header-cart-wrapper${cartPage ? ' header-cart-wrapper--cart-page' : ''}`}>
      <a href="#/cart" className="header-cart-link" style={{ textDecoration: 'none', color: 'inherit' }}>
        <HeaderAction
          icon={<img src="src/assets/header/cart.svg" alt="Cart" className="svg-icon" />}
          label={TRANSLATIONS.header.actions.cart}
          count={totalItems}
        />
      </a>

      {!cartPage && (
        <div className="header-cart-dropdown">
          {cart.length === 0 ? (
            <p className="empty-cart">{TRANSLATIONS.cartPage.emptyCart}</p>
          ) : (
            <>
              <div className="dropdown-items-list">
                {cart.map((item) => (
                  <div key={item.id} className="dropdown-item">
                    <img src={item.image} alt={item.title} className="dropdown-image" />
                    <div className="item-details">
                      <p className="item-title">{item.title}</p>
                      <span>{item.quantity} x ${item.price.toFixed(2)}</span>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="dropdown-remove-button"
                      aria-label="Remove cart item"
                    >
                    </button>
                  </div>
                ))}
              </div>
              <div className="dropdown-footer">
                <div className="total">
                  <span>{TRANSLATIONS.cartPage.summary.total}</span>
                  <strong>${totalPrice.toFixed(2)}</strong>
                </div>
                <a className="dropdown-view-cart" href="#/cart">
                  {TRANSLATIONS.cartPage.viewCart}
                </a>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}