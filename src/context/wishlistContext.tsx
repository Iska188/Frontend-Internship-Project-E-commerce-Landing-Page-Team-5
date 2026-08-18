import type { ReactNode } from 'react';
import { createContext, useContext, useState, useEffect } from 'react';

export interface WishlistItem {
  id: string | number;
  title: string;
  price: number;
  oldPrice?: number;
  image: string;
  rating?: number;
  reviewsCount?: number;
  category?: string;
  vendor?: string;
  inStock?: boolean;
}

interface WishlistNotification {
  message: string;
  type: 'add' | 'remove';
  productTitle?: string;
}

interface WishlistContextType {
  wishlist: WishlistItem[];
  addToWishlist: (item: WishlistItem) => void;
  removeFromWishlist: (id: string | number) => void;
  toggleWishlist: (item: WishlistItem) => boolean;
  isInWishlist: (id: string | number) => boolean;
  clearWishlist: () => void;
  totalWishlistItems: number;
  notification: WishlistNotification | null;
  dismissNotification: () => void;
}

import { WISHLIST_INITIAL_MOCK } from '../mocks';

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

const DEFAULT_INITIAL_WISHLIST: WishlistItem[] = WISHLIST_INITIAL_MOCK;

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [notification, setNotification] = useState<WishlistNotification | null>(null);

  const [wishlist, setWishlist] = useState<WishlistItem[]>(() => {
    if (typeof window === 'undefined') {
      return DEFAULT_INITIAL_WISHLIST;
    }

    const saved = window.localStorage.getItem('nest_wishlist');
    if (!saved) {
      return DEFAULT_INITIAL_WISHLIST;
    }

    try {
      const parsed = JSON.parse(saved);
      return Array.isArray(parsed) ? parsed : DEFAULT_INITIAL_WISHLIST;
    } catch {
      return DEFAULT_INITIAL_WISHLIST;
    }
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('nest_wishlist', JSON.stringify(wishlist));
    }
  }, [wishlist]);

  const showToast = (message: string, type: 'add' | 'remove', productTitle?: string) => {
    setNotification({ message, type, productTitle });
    setTimeout(() => {
      setNotification((prev) => (prev?.message === message ? null : prev));
    }, 3000);
  };

  const addToWishlist = (item: WishlistItem) => {
    setWishlist((prev) => {
      if (prev.some((p) => String(p.id) === String(item.id))) {
        return prev;
      }
      return [{ ...item, inStock: item.inStock !== false }, ...prev];
    });
    showToast(`Added "${item.title}" to Wishlist!`, 'add', item.title);
  };

  const removeFromWishlist = (id: string | number) => {
    setWishlist((prev) => {
      const item = prev.find((p) => String(p.id) === String(id));
      if (item) {
        showToast(`Removed "${item.title}" from Wishlist.`, 'remove', item.title);
      }
      return prev.filter((p) => String(p.id) !== String(id));
    });
  };

  const isInWishlist = (id: string | number) => {
    return wishlist.some((item) => String(item.id) === String(id));
  };

  const toggleWishlist = (item: WishlistItem): boolean => {
    if (isInWishlist(item.id)) {
      removeFromWishlist(item.id);
      return false;
    } else {
      addToWishlist(item);
      return true;
    }
  };

  const clearWishlist = () => {
    setWishlist([]);
    showToast('Wishlist cleared.', 'remove');
  };

  const dismissNotification = () => setNotification(null);

  const totalWishlistItems = wishlist.length;

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeFromWishlist,
        toggleWishlist,
        isInWishlist,
        clearWishlist,
        totalWishlistItems,
        notification,
        dismissNotification,
      }}
    >
      {children}
      {notification && (
        <div className="c-global-toast c-global-toast--wishlist" onClick={dismissNotification}>
          <span className="c-global-toast__icon">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="#f74b81" stroke="#f74b81" strokeWidth="1">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </span>
          <span className="c-global-toast__text">{notification.message}</span>
          <button className="c-global-toast__close" aria-label="Close notification">×</button>
        </div>
      )}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (!context) throw new Error('useWishlist must be used within a WishlistProvider');
  return context;
}
