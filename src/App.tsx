import { useEffect, useState } from 'react';
import { CartPage, HomePage, AboutPage } from './components/pages';
import { CartProvider } from './context/cartContext';

const getRouteFromHash = () => {
  if (window.location.hash === '#/cart') return '/cart';
  if (window.location.hash === '#/about') return '/about';
  return '/';
};

function App() {
  const [currentRoute, setCurrentRoute] = useState<string>(getRouteFromHash());

  useEffect(() => {
    const syncRoute = () => {
      setCurrentRoute(getRouteFromHash());
    };

    syncRoute();
    window.addEventListener('hashchange', syncRoute);

    return () => {
      window.removeEventListener('hashchange', syncRoute);
    };
  }, []);

  return (
    <CartProvider>
      {currentRoute === '/cart' ? (
        <CartPage />
      ) : currentRoute === '/about' ? (
        <AboutPage />
      ) : (
        <HomePage />
      )}
    </CartProvider>
  );
}

export default App;