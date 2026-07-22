// @ts-ignore
import { SearchBar } from '../../molecules/search-bar/search-bar';
// @ts-ignore
import { HeaderAction } from '../../molecules/header-action/header-action';
// @ts-ignore
import { Button } from '../../atoms/button/button';
// @ts-ignore
import { NavDropdown } from '../../molecules/nav-dropdown/nav-dropdown';
// @ts-ignore
import './header.css';

export const Header = () => {
  return (
    <header className="o-header">
      <div className="o-header__top">
        <div className="o-header__container">
          <div className="o-header__top-left">
            <span>About Us</span> | <span>My Account</span> | <span>Wishlist</span> | <span>Order Tracking</span>
          </div>
          <div className="o-header__top-center">
            <span className="text-green">100% Secure delivery without contacting the courier</span>
          </div>
          <div className="o-header__top-right">
            <span>Need help? Call Us: <strong className="text-green">+1800900122</strong></span> | 
            <NavDropdown label="English" options={['English', 'Română', 'Français']} /> | 
            <NavDropdown label="USD" options={['USD', 'EUR', 'RON']} />
          </div>
        </div>
      </div>

      <div className="o-header__middle">
        <div className="o-header__container">
          <div className="o-header__logo">
            <img src="src/assets/logo.png" alt="Nest Logo" className="o-header__logo-img" />
          </div>

          <div className="o-header__search">
            <SearchBar />
          </div>

          <div className="o-header__actions">
            <Button variant="outline">Become Vendor ➔</Button>
            
            <div className="o-header__icons">
              <HeaderAction icon={<img src="src/assets/header/compare.svg" alt="Compare" className="svg-icon" />} label="Compare" count={0} />
              <HeaderAction icon={<img src="src/assets/header/wishlist.svg" alt="Wishlist" className="svg-icon" />} label="Wishlist" count={2} />
              <HeaderAction icon={<img src="src/assets/header/cart.svg" alt="Cart" className="svg-icon" />} label="Cart" count={5} />
              <HeaderAction icon={<img src="src/assets/header/account.svg" alt="Account" className="svg-icon" />} label="Account" count={0} />
            </div>
          </div>
        </div>
      </div>

      <div className="o-header__bottom">
        <div className="o-header__container">
          <div className="o-header__categories">
            <NavDropdown 
              variant="categories"
              isActive={true}
              label={
                <span className="categories-btn-content">
                  <img src="src/assets/header/grid.svg" alt="Categories" className="svg-icon-small" /> 
                  Browse All Categories
                </span>
              } 
              options={['Milks & Dairies', 'Clothing & Beauty', 'Pet Foods', 'Baking Material', 'Fresh Fruit']} 
            />
          </div>
          
          <nav className="o-header__nav">
            <span className="nav-item">
              <img src="src/assets/header/fire.svg" alt="Hot" className="svg-icon-small" /> Hot Deals
            </span>
            
            <NavDropdown label="Home" options={['Home 1', 'Home 2', 'Home 3']} isActive={true} />
            
            <span className="nav-item">About</span>
            
            <NavDropdown label="Shop" options={['Shop Grid', 'Shop List', 'Single Product']} />
            <NavDropdown label="Vendors" options={['Vendors Grid', 'Vendors List', 'Dashboard']} />
            <NavDropdown label="Mega Menu" options={['Fruits', 'Vegetables', 'Meat']} />
            <NavDropdown label="Blog" options={['Blog Category', 'Single Post']} />
            <NavDropdown label="Pages" options={['About Us', 'Contact', '404 Page']} />
            
            <span className="nav-item">Contact</span>
          </nav>

          <div className="o-header__support">
            <div className="support-icon">
              <img src="src/assets/header/support.svg" alt="Support" className="svg-icon-large" />
            </div>
            <div className="support-text">
              <strong>1900888123</strong>
              <span>24/7 Support Center</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};