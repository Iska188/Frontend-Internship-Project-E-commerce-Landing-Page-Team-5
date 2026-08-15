import type { ReactNode } from 'react';
import { createContext, useContext, useState, useEffect } from 'react';
import { CartNotificationToast } from '../components/molecules/cartNotificationToast/CartNotificationToast';
import type { CartNotificationData } from '../components/molecules/cartNotificationToast/CartNotificationToast';

export interface CartItem {
  id: string | number;
  title: string;
  price: number;
  oldPrice?: number;
  image: string;
  quantity: number;
  selectedSize?: string;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Omit<CartItem, 'quantity'>, quantity?: number) => void;
  removeFromCart: (id: string | number) => void;
  updateQuantity: (id: string | number, delta: number) => void;
  clearCart: () => void;
  totalPrice: number;
  totalItems: number;
  cartNotification: CartNotificationData | null;
  dismissNotification: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartNotification, setCartNotification] = useState<CartNotificationData | null>(null);

  const [cart, setCart] = useState<CartItem[]>(() => {
    if (typeof window === 'undefined') {
      return [];
    }

    const saved = window.localStorage.getItem('cart');
    if (!saved) {
      return [];
    }

    try {
      return JSON.parse(saved) as CartItem[];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('cart', JSON.stringify(cart));
    }
  }, [cart]);

  const addToCart = (product: Omit<CartItem, 'quantity'>, quantityToAdd: number = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);

      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantityToAdd }
            : item
        );
      }

      return [...prev, { ...product, quantity: quantityToAdd }];
    });

    setCartNotification({
      id: product.id,
      title: product.title,
      price: product.price,
      oldPrice: product.oldPrice,
      image: product.image,
      quantity: quantityToAdd,
      selectedSize: product.selectedSize,
      timestamp: Date.now(),
    });
  };

  const removeFromCart = (id: string | number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const updateQuantity = (id: string | number, delta: number) => {
    setCart((prev) => {
      const updatedCart = prev
        .map((item) => {
          if (item.id !== id) {
            return item;
          }

          const newQty = item.quantity + delta;
          return newQty > 0 ? { ...item, quantity: newQty } : null;
        })
        .filter((item): item is CartItem => Boolean(item));

      return updatedCart;
    });
  };

  const dismissNotification = () => {
    setCartNotification(null);
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalPrice,
        totalItems,
        cartNotification,
        dismissNotification,
      }}
    >
      {children}
      <CartNotificationToast
        notification={cartNotification}
        onClose={dismissNotification}
      />
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within a CartProvider');
  return context;
}