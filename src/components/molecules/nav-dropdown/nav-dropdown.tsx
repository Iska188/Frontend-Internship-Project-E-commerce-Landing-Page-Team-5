import React from 'react';
import './nav-dropdown.css';

interface NavDropdownProps {
  label: React.ReactNode;
  options: string[];
  isActive?: boolean;
  variant?: 'default' | 'categories';
}

export const NavDropdown = ({ label, options, isActive, variant = 'default' }: NavDropdownProps) => {
  return (
    <div className={`m-nav-dropdown m-nav-dropdown--${variant}`}>
      <span className={`m-nav-dropdown__label ${isActive ? 'active' : ''}`}>
        {label} <span className="arrow">⏷</span>
      </span>

      <ul className="m-nav-dropdown__menu">
        {options.map((option) => (
          <li key={option} className="m-nav-dropdown__item">
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};