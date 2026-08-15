import { useEffect, useState } from 'react';
import { CartPage, HomePage, AboutPage, ContactPage, BlogPage, ShopPage } from './components/pages';
import { CartProvider } from './context/cartContext';

function App() {
  // Verificăm ruta exact cu '#' cum aveai tu
  const getActiveRoute = () => {
    const hash = window.location.hash;
    const validRoutes = ['#/cart', '#/about', '#/contact', '#/blog', '#/shop'];
    
    // Dacă e o rută validă, o returnăm pe aia. Altfel, default e '#/' (Home)
    return validRoutes.includes(hash) ? hash : '#/';
  };

  const [currentRoute, setCurrentRoute] = useState<string>(getActiveRoute);

  useEffect(() => {
    const syncRoute = () => {
      setCurrentRoute(getActiveRoute());
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
      {/* Home-ul se afișează dacă avem '#/' sau dacă abia am intrat pe site (fără hash) */}
      {(currentRoute === '#/' || currentRoute === '') && <HomePage />}
    </CartProvider>
  );
}

export default App;