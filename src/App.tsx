import { useEffect, useState } from 'react';
import { CartPage, HomePage } from './components/pages';
import { CartProvider } from './context/cartContext';

function App() {
  const [currentRoute, setCurrentRoute] = useState<string>(() => {
    return window.location.hash === '#/cart' ? '/cart' : '/';
  });

  useEffect(() => {
    const syncRoute = () => {
      const nextRoute = window.location.hash === '#/cart' ? '/cart' : '/';
      setCurrentRoute(nextRoute);
    };

    syncRoute();
    window.addEventListener('hashchange', syncRoute);

    return () => {
      window.removeEventListener('hashchange', syncRoute);
    };
  }, []);

  return (
    <CartProvider>
      {currentRoute === '/cart' ? <CartPage /> : <HomePage />}
    </CartProvider>
  );
}

export default App;