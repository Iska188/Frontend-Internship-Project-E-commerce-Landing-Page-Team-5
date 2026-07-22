import React from 'react';
//@ts-ignore
import './badge.css';

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string | number;
  type: 'discount' | 'sale' | 'hot' | 'new' | 'count';
}

export const Badge: React.FC<BadgeProps> = ({ 
  label, 
  type, 
  className,
  ...props 
}) => {
  return (
    <div 
      className={`a-badge a-badge--${type} ${className || ''}`} 
      {...props}
    >
      {label}
    </div>
  );
};