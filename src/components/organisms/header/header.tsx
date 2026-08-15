import { useState, useEffect } from 'react';
import { Button } from '../../atoms';
import { SearchBar, HeaderAction, NavDropdown } from '../../molecules';
import { CartActionContainer } from '../../organisms';
import { TRANSLATIONS } from '../../../constants/translations';
import './header.css';

interface HeaderProps {
  cartPage?: boolean;
  currentPage?: 'home' | 'about' | 'contact' | 'shop' | 'blog' | 'vendors' | 'pages';
}

export const Header = ({ cartPage = false, currentPage }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const getNavFromRoute = () => {
    const hash = typeof window !== 'undefined' ? window.location.hash : '';
    if (hash === '#/about') return 'about';
    if (hash === '#/contact') return 'contact';
    if (hash.startsWith('#/shop') || hash.startsWith('#/product')) return 'shop';
    if (hash.startsWith('#/blog')) return 'blog';
    if (hash.startsWith('#/vendors')) return 'vendors';
    if (hash.startsWith('#/pages')) return 'pages';
    if (hash === '#/' || hash === '' || hash === '#home') return 'home';
    return '';
  };

  const [activeNav, setActiveNav] = useState<string>(currentPage || getNavFromRoute);

  useEffect(() => {
    const handleHash = () => {
      setActiveNav(currentPage || getNavFromRoute());
    };
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, [currentPage]);

  const homeOptions = [
    { label: 'Home 1', path: '#/' },
    { label: 'Home 2', path: '#/' },
    { label: 'Home 3', path: '#/' }
  ];

  const shopOptions = [
    { label: 'Shop Grid', path: '#/shop' },
    { label: 'Shop List', path: '#/shop' }
  ];

  const blogOptions = [
    { label: 'Blog Category', path: '#/blog' },
    { label: 'Single Post', path: '#/blog' }
  ];

  const pagesOptions = [
    { label: 'About Us', path: '#/about' },
    { label: 'Contact', path: '#/contact' },
    { label: '404 Page', path: '#/' }
  ];

  const vendorsOptions = [
    { label: 'Vendors Grid', path: '#/' },
    { label: 'Vendors List', path: '#/' },
    { label: 'Dashboard', path: '#/' }
  ];

  const megaMenuOptions = [
    { label: 'Fruits', path: '#/' },
    { label: 'Vegetables', path: '#/' },
    { label: 'Meat', path: '#/' }
  ];

  const categoriiProduse = [
    { label: TRANSLATIONS.header.categories.milk, path: '#/shop' },
    { label: TRANSLATIONS.header.categories.clothing, path: '#/shop' },
    { label: TRANSLATIONS.header.categories.pet, path: '#/shop' },
    { label: TRANSLATIONS.header.categories.baking, path: '#/shop' },
    { label: TRANSLATIONS.header.categories.fruit, path: '#/shop' }
  ];

  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [selectedCurrency, setSelectedCurrency] = useState('USD');

  const languageOptions = [
    { label: 'English', onClick: () => setSelectedLanguage('English') },
    { label: 'Română', onClick: () => setSelectedLanguage('Română') },
    { label: 'Français', onClick: () => setSelectedLanguage('Français') }
  ];

  const currencyOptions = [
    { label: 'USD', onClick: () => setSelectedCurrency('USD') },
    { label: 'EUR', onClick: () => setSelectedCurrency('EUR') },
    { label: 'RON', onClick: () => setSelectedCurrency('RON') }
  ];

  return (
    <header className={`o-header${cartPage ? ' o-header--cart-page' : ''}`}> 
      {!cartPage && (
        <div className="o-header__top">
          <div className="o-header__container">
            <div className="o-header__top-left">
              <a href="#/about" className={`o-header__top-link o-header__top-link--about ${activeNav === 'about' ? 'active' : ''}`}>
                <span>{TRANSLATIONS.header.nav.about}</span>
              </a> | <span>{TRANSLATIONS.header.myAccount}</span> | <span>{TRANSLATIONS.header.wishlist}</span> | <span>{TRANSLATIONS.header.orderTracking}</span>
            </div>
            <div className="o-header__top-center">
              <span className="text-green">{TRANSLATIONS.header.secureDelivery}</span>
            </div>
            <div className="o-header__top-right">
              <span className="o-header__help-text">{TRANSLATIONS.header.needHelp} <strong className="text-green">+1800900122</strong></span> |
              <NavDropdown variant="header-top" label={selectedLanguage} options={languageOptions} /> |
              <NavDropdown variant="header-top" label={selectedCurrency} options={currencyOptions} />
            </div>
          </div>
        </div>
      )}

      <div className="o-header__middle">
        <div className="o-header__container o-header__middle-container">
          {!cartPage && (
            <button
              className={`o-header__burger-btn ${isMobileMenuOpen ? 'active' : ''}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          )}

          <a className="o-header__logo" href="#/" aria-label="Go to home page">
            <img src="src/assets/logo.png" alt="Nest Logo" className="o-header__logo-img" />
          </a>

          <div className="o-header__search">
            <SearchBar />
          </div>

          <div className="o-header__actions">
            <div className="o-header__desktop-vendor">
              <Button variant="outline">{TRANSLATIONS.header.becomeVendor}</Button>
            </div>

            <div className="o-header__icons">
              <div className="desktop-only-action">
                <HeaderAction icon={<img src="src/assets/header/compare.svg" alt="Compare" className="svg-icon" />} label={TRANSLATIONS.header.actions.compare} count={0} />
              </div>

              <HeaderAction icon={<img src="src/assets/header/wishlist.svg" alt="Wishlist" className="svg-icon" />} label={TRANSLATIONS.header.actions.wishlist} count={2} />

              <CartActionContainer cartPage={cartPage} />

              <div className="desktop-only-action">
                <HeaderAction icon={<img src="src/assets/header/account.svg" alt="Account" className="svg-icon-no-badge" />} label={TRANSLATIONS.header.actions.account} count={-1} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {!cartPage && (
        <div className={`o-header__mobile-menu ${isMobileMenuOpen ? 'is-open' : ''}`}>
          <div className="o-header__mobile-menu-content">
            <nav className="o-header__mobile-nav">
              <span className="nav-item">
                <img src="src/assets/header/fire.svg" alt="Hot" className="svg-icon-small" /> {TRANSLATIONS.header.nav.hotDeals}
              </span>
              <NavDropdown label={TRANSLATIONS.header.nav.home} options={homeOptions} isActive={activeNav === 'home'} />
              <a href="#/about" className={`nav-item nav-item--about ${activeNav === 'about' ? 'active' : ''}`}>
                {TRANSLATIONS.header.nav.about}
              </a>
              <NavDropdown label={TRANSLATIONS.header.nav.shop} options={shopOptions} isActive={activeNav === 'shop'} />
              <NavDropdown label={TRANSLATIONS.header.nav.vendors} options={vendorsOptions} isActive={activeNav === 'vendors'} />
              <NavDropdown label={TRANSLATIONS.header.nav.megaMenu} options={megaMenuOptions} />
              <NavDropdown label={TRANSLATIONS.header.nav.blog} options={blogOptions} isActive={activeNav === 'blog'} />
              <NavDropdown label={TRANSLATIONS.header.nav.pages} options={pagesOptions} isActive={activeNav === 'pages'} />
              <a href="#/contact" className={`nav-item nav-item--contact ${activeNav === 'contact' ? 'active' : ''}`}>
                {TRANSLATIONS.header.nav.contact}
              </a>
            </nav>
          </div>
        </div>
      )}

      {!cartPage && (
        <div className="o-header__bottom">
          <div className="o-header__container">
            <div className="o-header__categories">
              <NavDropdown
                variant="categories"
                isActive={true}
                label={
                  <span className="categories-btn-content">
                    <img src="src/assets/header/grid.svg" alt="Categories" className="svg-icon-small" />
                    {TRANSLATIONS.header.browseCategories}
                  </span>
                }
                options={categoriiProduse}
              />
            </div>

            <nav className="o-header__nav">
              <span className="nav-item">
                <img src="src/assets/header/fire.svg" alt="Hot" className="svg-icon-small" /> {TRANSLATIONS.header.nav.hotDeals}
              </span>

              <NavDropdown label={TRANSLATIONS.header.nav.home} options={homeOptions} isActive={activeNav === 'home'} />

              <a href="#/about" className={`nav-item ${activeNav === 'about' ? 'active' : ''}`}>
                {TRANSLATIONS.header.nav.about}
              </a>

              <NavDropdown label={TRANSLATIONS.header.nav.shop} options={shopOptions} isActive={activeNav === 'shop'} />
              <NavDropdown label={TRANSLATIONS.header.nav.vendors} options={vendorsOptions} isActive={activeNav === 'vendors'} />
              <NavDropdown label={TRANSLATIONS.header.nav.megaMenu} options={megaMenuOptions} />
              <NavDropdown label={TRANSLATIONS.header.nav.blog} options={blogOptions} isActive={activeNav === 'blog'} />
              <NavDropdown label={TRANSLATIONS.header.nav.pages} options={pagesOptions} isActive={activeNav === 'pages'} />

              <a href="#/contact" className={`nav-item nav-item--contact ${activeNav === 'contact' ? 'active' : ''}`}>
                {TRANSLATIONS.header.nav.contact}
              </a>
            </nav>

            <div className="o-header__support">
              <div className="support-icon">
                <img src="src/assets/header/support.svg" alt="Support" className="svg-icon-large" />
              </div>
              <div className="support-text">
                <strong>1900888123</strong>
                <span>{TRANSLATIONS.footer.supportCenter}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};