import { useState } from 'react';
import { Button } from '../../atoms';
import { SearchBar, HeaderAction, NavDropdown } from '../../molecules';
import { CartActionContainer } from '../../organisms';
import { TRANSLATIONS } from '../../../constants/translations';
import './header.css';

interface HeaderProps {
  cartPage?: boolean;
  currentPage?: 'home' | 'about' | 'contact';
}

export const Header = ({ cartPage = false, currentPage }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className={`o-header${cartPage ? ' o-header--cart-page' : ''}`}> 
      {!cartPage && (
        <div className="o-header__top">
          <div className="o-header__container">
            <div className="o-header__top-left">
              <a href="#/about" className={`o-header__top-link o-header__top-link--about ${currentPage === 'about' ? 'active' : ''}`}>
              <span>{TRANSLATIONS.header.nav.about}</span></a> | <span>{TRANSLATIONS.header.myAccount}</span> | <span>{TRANSLATIONS.header.wishlist}</span> | <span>{TRANSLATIONS.header.orderTracking}</span>
            </div>
            <div className="o-header__top-center">
              <span className="text-green">{TRANSLATIONS.header.secureDelivery}</span>
            </div>
            <div className="o-header__top-right">
              <span>{TRANSLATIONS.header.needHelp} <strong className="text-green">+1800900122</strong></span> |
              <NavDropdown label="English" options={['English', 'Română', 'Français']} /> |
              <NavDropdown label="USD" options={['USD', 'EUR', 'RON']} />
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

          <a className="o-header__logo" href="/#" aria-label="Go to home page">
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
              <NavDropdown label={TRANSLATIONS.header.nav.home} options={['Home 1', 'Home 2', 'Home 3']} isActive={currentPage === 'home'} />
              <a href="#/about" className={`nav-item nav-item--about ${currentPage === 'about' ? 'active' : ''}`}>
                {TRANSLATIONS.header.nav.about}
              </a>
              <NavDropdown label={TRANSLATIONS.header.nav.shop} options={['Shop Grid', 'Shop List', 'Single Product']} />
              <NavDropdown label={TRANSLATIONS.header.nav.vendors} options={['Vendors Grid', 'Vendors List', 'Dashboard']} />
              <NavDropdown label={TRANSLATIONS.header.nav.megaMenu} options={['Fruits', 'Vegetables', 'Meat']} />
              <NavDropdown label={TRANSLATIONS.header.nav.blog} options={['Blog Category', 'Single Post']} />
              <NavDropdown label={TRANSLATIONS.header.nav.pages} options={['About Us', 'Contact', '404 Page']} />
              <a href="#/contact" className={`nav-item nav-item--contact ${currentPage === 'contact' ? 'active' : ''}`}>
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
                options={[
                  TRANSLATIONS.header.categories.milk,
                  TRANSLATIONS.header.categories.clothing,
                  TRANSLATIONS.header.categories.pet,
                  TRANSLATIONS.header.categories.baking,
                  TRANSLATIONS.header.categories.fruit
                ]}
              />
            </div>

            <nav className="o-header__nav">
              <span className="nav-item">
                <img src="src/assets/header/fire.svg" alt="Hot" className="svg-icon-small" /> {TRANSLATIONS.header.nav.hotDeals}
              </span>

              <NavDropdown label={TRANSLATIONS.header.nav.home} options={['Home 1', 'Home 2', 'Home 3']} isActive={currentPage === 'home'} />

              <a href="#/about" className={`nav-item ${currentPage === 'about' ? 'active' : ''}`}>
                {TRANSLATIONS.header.nav.about}
              </a>

              <NavDropdown label={TRANSLATIONS.header.nav.shop} options={['Shop Grid', 'Shop List', 'Single Product']} />
              <NavDropdown label={TRANSLATIONS.header.nav.vendors} options={['Vendors Grid', 'Vendors List', 'Dashboard']} />
              <NavDropdown label={TRANSLATIONS.header.nav.megaMenu} options={['Fruits', 'Vegetables', 'Meat']} />
              <NavDropdown label={TRANSLATIONS.header.nav.blog} options={['Blog Category', 'Single Post']} />
              <NavDropdown label={TRANSLATIONS.header.nav.pages} options={['About Us', 'Contact', '404 Page']} />

              <a href="#/contact" className={`nav-item nav-item--contact ${currentPage === 'contact' ? 'active' : ''}`}>
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