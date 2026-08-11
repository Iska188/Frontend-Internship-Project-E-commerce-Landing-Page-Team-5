import { useEffect, useState } from 'react';
import { CartPage, HomePage, AboutPage, ContactPage, BlogPage } from './components/pages';
import { CartProvider } from './context/cartContext';

function App() {
  const [currentRoute, setCurrentRoute] = useState<string>(() => {
    const hash = window.location.hash;

    if (hash === '#/cart') {
      return '/cart';
    }

    if (hash === '#/about') {
      return '/about';
    }

    if (hash === '#/contact') {
      return '/contact';
    }

    if (hash === '#/blog') {
      return '/blog';
    }

    return '/';
  });

  useEffect(() => {
    const syncRoute = () => {
      const hash = window.location.hash;

      if (hash === '#/cart') {
        setCurrentRoute('/cart');
        return;
      }

      if (hash === '#/about') {
        setCurrentRoute('/about');
        return;
      }

      if (hash === '#/contact') {
        setCurrentRoute('/contact');
        return;
      }

      if (hash === '#/blog') {
        setCurrentRoute('/blog');
        return;
      }

      setCurrentRoute('/');
    };

    syncRoute();
    window.addEventListener('hashchange', syncRoute);

    return () => {
      window.removeEventListener('hashchange', syncRoute);
    };
  }, []);

  return (
    <CartProvider>
      {currentRoute === '/cart' && <CartPage />}
      {currentRoute === '/about' && <AboutPage />}
      {currentRoute === '/contact' && <ContactPage />}
      {currentRoute === '/blog' && <BlogPage />}
      {currentRoute === '/' && <HomePage />}
    </CartProvider>
  );
}

export default App;