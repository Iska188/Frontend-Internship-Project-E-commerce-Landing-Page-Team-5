import type { ReactNode } from 'react';
import { createContext, useContext, useState, useEffect } from 'react';

export interface CompareItem {
  id: string | number;
  title: string;
  price: number;
  oldPrice?: number;
  image: string;
  rating: number;
  reviewsCount?: number;
  category: string;
  vendor?: string;
  description?: string;
  weight?: string;
  ingredients?: string;
  qualityScore?: number;
  healthGrade?: string;
  freshnessIndex?: string;
  shelfLife?: string;
  inStock?: boolean;
}

interface CompareNotification {
  message: string;
  type: 'add' | 'remove' | 'full';
  productTitle?: string;
}

interface CompareContextType {
  compareList: CompareItem[];
  addToCompare: (item: CompareItem) => boolean;
  removeFromCompare: (id: string | number) => void;
  toggleCompare: (item: CompareItem) => boolean;
  isInCompare: (id: string | number) => boolean;
  clearCompare: () => void;
  totalCompareItems: number;
  notification: CompareNotification | null;
  dismissNotification: () => void;
}

import { COMPARE_INITIAL_MOCK } from '../mocks';

const CompareContext = createContext<CompareContextType | undefined>(undefined);

const DEFAULT_INITIAL_COMPARE: CompareItem[] = COMPARE_INITIAL_MOCK;

const MAX_COMPARE_ITEMS = 4;

export function CompareProvider({ children }: { children: ReactNode }) {
  const [notification, setNotification] = useState<CompareNotification | null>(null);

  const [compareList, setCompareList] = useState<CompareItem[]>(() => {
    if (typeof window === 'undefined') {
      return DEFAULT_INITIAL_COMPARE;
    }

    const saved = window.localStorage.getItem('nest_compare');
    if (!saved) {
      return DEFAULT_INITIAL_COMPARE;
    }

    try {
      const parsed = JSON.parse(saved);
      return Array.isArray(parsed) ? parsed : DEFAULT_INITIAL_COMPARE;
    } catch {
      return DEFAULT_INITIAL_COMPARE;
    }
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('nest_compare', JSON.stringify(compareList));
    }
  }, [compareList]);

  const showToast = (message: string, type: 'add' | 'remove' | 'full', productTitle?: string) => {
    setNotification({ message, type, productTitle });
    setTimeout(() => {
      setNotification((prev) => (prev?.message === message ? null : prev));
    }, 3000);
  };

  const isInCompare = (id: string | number) => {
    return compareList.some((item) => String(item.id) === String(id));
  };

  const addToCompare = (item: CompareItem): boolean => {
    if (isInCompare(item.id)) {
      showToast(`"${item.title}" is already in comparison table.`, 'add', item.title);
      return true;
    }
    if (compareList.length >= MAX_COMPARE_ITEMS) {
      showToast(`Comparison list full (max ${MAX_COMPARE_ITEMS} items). Remove an item to add this one.`, 'full');
      return false;
    }

    const enrichedItem: CompareItem = {
      ...item,
      weight: item.weight || '500g',
      ingredients: item.ingredients || '100% Natural Fresh Ingredients, No Artificial Preservatives',
      qualityScore: item.qualityScore || Math.min(99, Math.max(82, Math.round(item.rating * 20 + (item.price > 25 ? 8 : 12)))),
      healthGrade: item.healthGrade || (item.rating >= 4.5 ? 'Nutri-Score A (Organic)' : 'Nutri-Score A (Fresh)'),
      freshnessIndex: item.freshnessIndex || '98%',
      shelfLife: item.shelfLife || '12 Months',
      inStock: item.inStock !== false,
      description: item.description || 'Premium quality e-commerce grocery selection with farm-fresh freshness guarantee.',
    };

    setCompareList((prev) => [...prev, enrichedItem]);
    showToast(`Added "${item.title}" to compare list!`, 'add', item.title);
    return true;
  };

  const removeFromCompare = (id: string | number) => {
    setCompareList((prev) => {
      const item = prev.find((p) => String(p.id) === String(id));
      if (item) {
        showToast(`Removed "${item.title}" from comparison.`, 'remove', item.title);
      }
      return prev.filter((p) => String(p.id) !== String(id));
    });
  };

  const toggleCompare = (item: CompareItem): boolean => {
    if (isInCompare(item.id)) {
      removeFromCompare(item.id);
      return false;
    } else {
      return addToCompare(item);
    }
  };

  const clearCompare = () => {
    setCompareList([]);
    showToast('Comparison list cleared.', 'remove');
  };

  const dismissNotification = () => setNotification(null);

  const totalCompareItems = compareList.length;

  return (
    <CompareContext.Provider
      value={{
        compareList,
        addToCompare,
        removeFromCompare,
        toggleCompare,
        isInCompare,
        clearCompare,
        totalCompareItems,
        notification,
        dismissNotification,
      }}
    >
      {children}
      {notification && (
        <div className="c-global-toast c-global-toast--compare" onClick={dismissNotification}>
          <span className="c-global-toast__icon">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="16 3 21 3 21 8" />
              <line x1="4" y1="20" x2="21" y2="3" />
              <polyline points="21 16 21 21 16 21" />
              <line x1="15" y1="15" x2="21" y2="21" />
              <line x1="4" y1="4" x2="9" y2="9" />
            </svg>
          </span>
          <span className="c-global-toast__text">{notification.message}</span>
          <button className="c-global-toast__close" aria-label="Close notification">×</button>
        </div>
      )}
    </CompareContext.Provider>
  );
}

export function useCompare() {
  const context = useContext(CompareContext);
  if (!context) throw new Error('useCompare must be used within a CompareProvider');
  return context;
}
