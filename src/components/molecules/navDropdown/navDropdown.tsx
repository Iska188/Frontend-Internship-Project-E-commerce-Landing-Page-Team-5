import React from 'react';
import './navDropdown.css';

export interface DropdownOption {
  label: string;
  path?: string;
  onClick?: () => void;
}

interface NavDropdownProps {
  label: React.ReactNode;
  options: DropdownOption[];
  isActive?: boolean;
  variant?: 'default' | 'categories' | 'header-top';
}

export const NavDropdown = ({ label, options, isActive, variant = 'default' }: NavDropdownProps) => {
  
  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault(); 
    window.location.hash = path;
    window.dispatchEvent(new HashChangeEvent('hashchange'));
    window.scrollTo(0, 0);
  };

  return (
    <div className={`m-nav-dropdown m-nav-dropdown--${variant}`}>
      <span className={`m-nav-dropdown__label ${isActive ? 'active' : ''}`}>
        {label}
        <svg
          className="arrow-svg"
          width="9"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1L5 5L9 1"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>

      <ul className="m-nav-dropdown__menu">
        {options.map((option, index) => {
          const uniqueKey = `${option.label.toLowerCase().replace(/[^a-z0-9]/g, '-')}-${index}`;
          
          return (
            <li key={uniqueKey} className="m-nav-dropdown__item">
              {option.path ? (
                <a 
                  href={option.path} 
                  className="m-nav-dropdown__link"
                  onClick={(e) => handleNavigation(e, option.path!)}
                >
                  {option.label}
                </a>
              ) : (
                <button 
                  type="button"
                  onClick={option.onClick} 
                  className="m-nav-dropdown__action"
                >
                  {option.label}
                </button>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};