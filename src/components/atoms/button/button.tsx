import React from 'react';
//@ts-ignore
import './button.css';
import cartIcon from '../../../assets/header/cart.svg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'add-short' | 'add-long' | 'carousel' | 'primary' | 'outline' | 'category';
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'add-short', 
  className, 
  ...props 
}) => {
  return (
    <button 
      className={`a-btn a-btn--${variant} ${className || ''}`} 
      {...props}
    >
      {(variant === 'add-short' || variant === 'add-long') && (
  <img src={cartIcon} alt="Cart" className="a-btn__icon" />)}<span className="a-btn__text">{children}</span>
    </button>
  );
};