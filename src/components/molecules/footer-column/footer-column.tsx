import React from 'react';
import { Text } from '../../atoms/text/text';
import './footer-column.css'; 

interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumnProps {
  title: string;
  links: FooterLink[];
}

export const FooterColumn: React.FC<FooterColumnProps> = ({ title, links }) => {
  return (
    <div className="m-footer-column">
      <Text as="h4" variant="footer-title" className="m-footer-column__title">
        {title}
      </Text>
      
      <ul className="m-footer-column__list">
        {links.map((link, index) => (
          <li key={index} className="m-footer-column__item">
            <Text 
              as="a" 
              variant="footer-link" 
              href={link.href}
            >
              {link.label}
            </Text>
          </li>
        ))}
      </ul>
    </div>
  );
};