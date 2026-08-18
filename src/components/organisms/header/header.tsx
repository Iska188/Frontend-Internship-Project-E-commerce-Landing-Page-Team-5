import { useState, useEffect } from 'react';
import { Button } from '../../atoms';
import { SearchBar, HeaderAction, NavDropdown } from '../../molecules';
import { CartActionContainer } from '../../organisms';
import { useWishlist, useCompare } from '../../../context';
import { TRANSLATIONS } from '../../../constants/translations';
import logoImg from '../../../assets/logo.png';
import compareIcon from '../../../assets/header/compare.svg';
import wishlistIcon from '../../../assets/header/wishlist.svg';
import accountIcon from '../../../assets/header/account.svg';
import fireIcon from '../../../assets/header/fire.svg';
import gridIcon from '../../../assets/header/grid.svg';
import supportIcon from '../../../assets/header/support.svg';
import './header.css';

interface HeaderProps {
  cartPage?: boolean;
  currentPage?: 'home' | 'about' | 'contact' | 'shop' | 'blog' | 'vendors' | 'pages';
}

export const Header = ({ cartPage = false, currentPage }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { totalWishlistItems } = useWishlist();
  const { totalCompareItems } = useCompare();
  const t = TRANSLATIONS;

  const getNavFromRoute = () => {
    const hash = typeof window !== 'undefined' ? window.location.hash : '';
    if (hash === '#/about') return 'about';
    if (hash === '#/contact') return 'contact';
    if (hash.startsWith('#/shop') || hash.startsWith('#/product')) return 'shop';
    if (hash.startsWith('#/blog')) return 'blog';
    if (hash.startsWith('#/vendors')) return 'vendors';
    if (hash.startsWith('#/pages') || hash.startsWith('#/wishlist') || hash.startsWith('#/compare')) return 'pages';
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
    { label: 'Single Post', path: '#/blog-post' }
  ];

  const pagesOptions = [
    { label: t.footer.companyLinks.about, path: '#/about' },
    { label: t.header.nav.contact, path: '#/contact' },
    { label: t.header.wishlist, path: '#/wishlist' },
    { label: t.header.actions.compare, path: '#/compare' }
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
    { label: t.header.categories.milk, path: '#/shop' },
    { label: t.header.categories.clothing, path: '#/shop' },
    { label: t.header.categories.pet, path: '#/shop' },
    { label: t.header.categories.baking, path: '#/shop' },
    { label: t.header.categories.fruit, path: '#/shop' }
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
    { label: 'GBP', onClick: () => setSelectedCurrency('GBP') }
  ];

  return (
    <header className={`o-header${cartPage ? ' o-header--cart-page' : ''}`}> 
      {!cartPage && (
        <div className="o-header__top">
          <div className="o-header__container">
            <div className="o-header__top-left">
              <a href="#/about" className={`o-header__top-link o-header__top-link--about ${activeNav === 'about' ? 'active' : ''}`}>
                <span>{t.header.nav.about}</span>
              </a> | <span>{t.header.myAccount}</span> | <a href="#/wishlist" className="o-header__top-link"><span>{t.header.wishlist}</span></a> | <span>{t.header.orderTracking}</span>
            </div>
            <div className="o-header__top-center">
              <span className="text-green">{t.header.secureDelivery}</span>
            </div>
            <div className="o-header__top-right">
              <span className="o-header__help-text">{t.header.needHelp} <strong className="text-green">+1800900122</strong></span> |
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
            <img src={logoImg} alt="Nest Logo" className="o-header__logo-img" />
          </a>

          <div className="o-header__search">
            <SearchBar />
          </div>

          <div className="o-header__actions">
            <div className="o-header__desktop-vendor">
              <Button variant="outline">{t.header.becomeVendor}</Button>
            </div>

            <div className="o-header__icons">
              <div className="desktop-only-action">
                <HeaderAction
                  icon={<img src={compareIcon} alt="Compare" className="svg-icon" />}
                  label={t.header.actions.compare}
                  count={totalCompareItems}
                  href="#/compare"
                />
              </div>

              <HeaderAction
                icon={<img src={wishlistIcon} alt="Wishlist" className="svg-icon" />}
                label={t.header.actions.wishlist}
                count={totalWishlistItems}
                href="#/wishlist"
              />

              <CartActionContainer cartPage={cartPage} />

              <div className="desktop-only-action">
                <HeaderAction
                  icon={<img src={accountIcon} alt="Account" className="svg-icon-no-badge" />}
                  label={t.header.actions.account}
                  count={-1}
                  href="#/cart"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {!cartPage && (
        <div className={`o-header__mobile-menu ${isMobileMenuOpen ? 'is-open' : ''}`}>
          <div className="o-header__mobile-menu-content">
            <div className="o-header__mobile-search">
              <SearchBar />
            </div>

            <nav className="o-header__mobile-nav">
              <a
                href="#/shop"
                className="nav-item"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <img src={fireIcon} alt="Hot" className="svg-icon-small" /> {t.header.nav.hotDeals}
              </a>

              <div className="o-header__mobile-accordion">
                <NavDropdown
                  label={t.header.nav.home}
                  options={homeOptions}
                  isActive={activeNav === 'home'}
                />
              </div>

              <a
                href="#/about"
                className={`nav-item ${activeNav === 'about' ? 'active' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t.header.nav.about}
              </a>

              <div className="o-header__mobile-accordion">
                <NavDropdown
                  label={t.header.nav.shop}
                  options={shopOptions}
                  isActive={activeNav === 'shop'}
                />
              </div>

              <div className="o-header__mobile-accordion">
                <NavDropdown
                  label={t.header.nav.vendors}
                  options={vendorsOptions}
                  isActive={activeNav === 'vendors'}
                />
              </div>

              <div className="o-header__mobile-accordion">
                <NavDropdown
                  label={t.header.nav.megaMenu}
                  options={megaMenuOptions}
                />
              </div>

              <div className="o-header__mobile-accordion">
                <NavDropdown
                  label={t.header.nav.blog}
                  options={blogOptions}
                  isActive={activeNav === 'blog'}
                />
              </div>

              <div className="o-header__mobile-accordion">
                <NavDropdown
                  label={t.header.nav.pages}
                  options={pagesOptions}
                  isActive={activeNav === 'pages'}
                />
              </div>

              <a
                href="#/contact"
                className={`nav-item ${activeNav === 'contact' ? 'active' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t.header.nav.contact}
              </a>
            </nav>

            <div className="o-header__mobile-footer">
              <div className="o-header__mobile-actions-row">
                <a href="#/compare" className="o-header__mobile-action-item" onClick={() => setIsMobileMenuOpen(false)}>
                  <img src={compareIcon} alt="Compare" className="svg-icon-small" />
                  <span>{t.header.actions.compare} ({totalCompareItems})</span>
                </a>
                <a href="#/wishlist" className="o-header__mobile-action-item" onClick={() => setIsMobileMenuOpen(false)}>
                  <img src={wishlistIcon} alt="Wishlist" className="svg-icon-small" />
                  <span>{t.header.actions.wishlist} ({totalWishlistItems})</span>
                </a>
              </div>
              <div className="o-header__mobile-support">
                <img src={supportIcon} alt="Phone" className="o-header__support-img" />
                <div className="support-text">
                  <strong>1900 - 888</strong>
                  <span>24/7 Support Center</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {!cartPage && (
        <div className="o-header__bottom">
          <div className="o-header__container o-header__bottom-container">
            <div className="o-header__categories">
              <NavDropdown
                variant="categories"
                label={
                  <>
                    <img src={gridIcon} alt="Categories" className="svg-icon-small" />
                    {t.header.browseCategories}
                  </>
                }
                options={categoriiProduse}
              />
            </div>

            <nav className="o-header__nav">
              <a
                href="#/shop"
                className="nav-item"
              >
                <img src={fireIcon} alt="Hot" className="svg-icon-small" /> {t.header.nav.hotDeals}
              </a>

              <NavDropdown
                label={t.header.nav.home}
                options={homeOptions}
                isActive={activeNav === 'home'}
              />

              <a
                href="#/about"
                className={`nav-item ${activeNav === 'about' ? 'active' : ''}`}
              >
                {t.header.nav.about}
              </a>

              <NavDropdown
                label={t.header.nav.shop}
                options={shopOptions}
                isActive={activeNav === 'shop'}
              />

              <NavDropdown
                label={t.header.nav.vendors}
                options={vendorsOptions}
                isActive={activeNav === 'vendors'}
              />

              <NavDropdown
                label={t.header.nav.megaMenu}
                options={megaMenuOptions}
              />

              <NavDropdown
                label={t.header.nav.blog}
                options={blogOptions}
                isActive={activeNav === 'blog'}
              />

              <NavDropdown
                label={t.header.nav.pages}
                options={pagesOptions}
                isActive={activeNav === 'pages'}
              />

              <a
                href="#/contact"
                className={`nav-item ${activeNav === 'contact' ? 'active' : ''}`}
              >
                {t.header.nav.contact}
              </a>
            </nav>

            <div className="o-header__support">
              <img src={supportIcon} alt="Phone" className="o-header__support-img" />
              <div className="support-text">
                <strong>1900 - 888</strong>
                <span>24/7 Support Center</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};