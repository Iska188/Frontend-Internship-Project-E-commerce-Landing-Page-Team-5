import React from 'react';
import './badge.css';

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string | number;
  type?: 'discount' | 'hot' | 'new' | 'sale' | 'count' | 'sale-off';
  bgColor?: string;
}

export const Badge: React.FC<BadgeProps> = ({ 
  label, 
  type = 'new', 
  bgColor,
  className,
  style,
  ...props 
}) => {
  return (
    <div 
      className={`a-badge a-badge--${type} ${className || ''}`} 
      style={{
        ...(bgColor ? { backgroundColor: bgColor } : {}),
        ...style
      }}
      {...props}
    >
      {label}
    </div>
  );
};