import React from 'react';
import homeIcon from '../../../assets/blog/homeicon.svg';
import './breadcrumb.css';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, className = '' }) => {
  return (
    <nav className={`m-breadcrumb-wrapper ${className}`} aria-label="Breadcrumb">
      <div className="m-breadcrumb-container">
        <ol className="m-breadcrumb-list">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            const isFirst = index === 0;

            return (
              <li key={index} className="m-breadcrumb-item">
                {isFirst && (
                  <img src={homeIcon} alt="" className="m-breadcrumb-home-icon" aria-hidden="true" />
                )}
                {isLast ? (
                  <span className="m-breadcrumb-text m-breadcrumb-text--active" aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <a href={item.href || '#'} className="m-breadcrumb-link">
                    {item.label}
                  </a>
                )}
                {!isLast && <span className="m-breadcrumb-separator" aria-hidden="true">›</span>}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
};
