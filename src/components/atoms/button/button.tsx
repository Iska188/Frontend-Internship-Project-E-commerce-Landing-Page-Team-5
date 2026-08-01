import React from 'react';
import { Add }  from '../../../assets';
import './button.css';

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
      {(variant === 'add-short' || variant === 'add-long') && <span className="a-btn__icon"><img src={Add} alt="Add" /></span>}
      <span className="a-btn__text">{children}</span>
    </button>
  );
};