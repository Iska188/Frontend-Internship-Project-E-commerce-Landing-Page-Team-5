import { useEffect, useState } from 'react';
import { CartPage, HomePage, AboutPage, ContactPage, BlogPage, ShopPage, ProductPage } from './components/pages';
import { CartProvider } from './context/cartContext';

function App() {
  const getActiveRoute = () => {
    const hash = window.location.hash;
    if (hash.startsWith('#/product')) {
      return '#/product';
    }
    const validRoutes = ['#/cart', '#/about', '#/contact', '#/blog', '#/shop'];
    
    return validRoutes.includes(hash) ? hash : '#/';
  };

  const [currentRoute, setCurrentRoute] = useState<string>(getActiveRoute);

  useEffect(() => {
    const syncRoute = () => {
      setCurrentRoute(getActiveRoute());
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', syncRoute);

    return () => {
      window.removeEventListener('hashchange', syncRoute);
    };
  }, []);

  return (
    <CartProvider>
      {currentRoute === '#/cart' && <CartPage />}
      {currentRoute === '#/about' && <AboutPage />}
      {currentRoute === '#/contact' && <ContactPage />}
      {currentRoute === '#/blog' && <BlogPage />}
      {currentRoute === '#/shop' && <ShopPage />}
      {currentRoute === '#/product' && <ProductPage />}
      {(currentRoute === '#/' || currentRoute === '') && <HomePage />}
    </CartProvider>
  );
}

export default App;