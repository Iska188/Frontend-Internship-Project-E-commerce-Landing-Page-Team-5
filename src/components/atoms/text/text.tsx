import React from 'react';
//@ts-ignore
import './text.css';

interface TextProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  variant: 'sec-title' | 'prod-title' | 'category' | 'price-current' | 'price-old' | 'hero-title' | 'hero-subtitle';
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
}

export const Text: React.FC<TextProps> = ({ 
  children, 
  variant, 
  as = 'span', 
  className,
  ...props 
}) => {
  const Component = as;
  return (
    <Component 
      className={`a-text a-text--${variant} ${className || ''}`} 
      {...props}
    >
      {children}
    </Component>
  );
};