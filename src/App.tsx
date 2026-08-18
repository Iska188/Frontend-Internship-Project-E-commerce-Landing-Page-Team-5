import { useEffect, useState } from 'react';
import {
  CartPage,
  HomePage,
  AboutPage,
  ContactPage,
  BlogPage,
  ShopPage,
  ProductPage,
  SingleBlogPage,
  WishlistPage,
  ComparePage,
} from './components/pages';
import {
  CartProvider,
  WishlistProvider,
  CompareProvider,
} from './context';

function App() {
  const getActiveRoute = () => {
    const hash = window.location.hash;
    if (hash.startsWith('#/product')) {
      return '#/product';
    }
    if (hash.startsWith('#/blog-post') || hash.startsWith('#/single-blog')) {
      return '#/blog-post';
    }
    if (hash.startsWith('#/wishlist')) {
      return '#/wishlist';
    }
    if (hash.startsWith('#/compare')) {
      return '#/compare';
    }
    const validRoutes = [
      '#/cart',
      '#/about',
      '#/contact',
      '#/blog',
      '#/shop',
      '#/wishlist',
      '#/compare',
      '#/blog-post',
    ];

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
      <WishlistProvider>
        <CompareProvider>
          {currentRoute === '#/cart' && <CartPage />}
          {currentRoute === '#/about' && <AboutPage />}
          {currentRoute === '#/contact' && <ContactPage />}
          {currentRoute === '#/blog' && <BlogPage />}
          {currentRoute === '#/blog-post' && <SingleBlogPage />}
          {currentRoute === '#/wishlist' && <WishlistPage />}
          {currentRoute === '#/compare' && <ComparePage />}
          {currentRoute === '#/shop' && <ShopPage />}
          {currentRoute === '#/product' && <ProductPage />}
          {(currentRoute === '#/' || currentRoute === '') && <HomePage />}
        </CompareProvider>
      </WishlistProvider>
    </CartProvider>
  );
}

export default App;