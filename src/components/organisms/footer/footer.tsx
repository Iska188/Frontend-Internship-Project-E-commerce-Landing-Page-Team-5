import React from 'react';
import { FooterColumn } from '../../molecules/footer-column/footer-column';
import { FooterApps } from '../../molecules/footer-apps/footer-apps';
import { FooterContact } from '../../molecules/footer-contact/footer-contact';
import { FooterBottom } from '../../molecules/footer-bottom/footer-bottom';

import './footer.css';


const companyLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Delivery Information', href: '/delivery' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms & Conditions', href: '/terms' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'Support Center', href: '/support' },
  { label: 'Careers', href: '/careers' },
];

const accountLinks = [
  { label: 'Sign In', href: '/login' },
  { label: 'View Cart', href: '/cart' },
  { label: 'My Wishlist', href: '/wishlist' },
  { label: 'Track My Order', href: '/track' },
  { label: 'Help Ticket', href: '/help' },
  { label: 'Shipping Details', href: '/shipping' },
  { label: 'Compare products', href: '/compare' },
];

const corporateLinks = [
  { label: 'Become a Vendor', href: '/vendor' },
  { label: 'Affiliate Program', href: '/affiliate' },
  { label: 'Farm Business', href: '/farm' },
  { label: 'Farm Careers', href: '/careers' },
  { label: 'Our Suppliers', href: '/suppliers' },
  { label: 'Accessibility', href: '/accessibility' },
  { label: 'Promotions', href: '/promotions' },
];

const popularLinks = [
  { label: 'Milk & Flavoured Milk', href: '/milk' },
  { label: 'Butter and Margarine', href: '/butter' },
  { label: 'Eggs Substitutes', href: '/eggs' },
  { label: 'Marmalades', href: '/marmalades' },
  { label: 'Sour Cream and Dips', href: '/dips' },
  { label: 'Tea & Kombucha', href: '/tea' },
  { label: 'Cheese', href: '/cheese' },
];

export const Footer: React.FC = () => {
  return (
    <footer className="o-footer">
      <div className="o-footer__container">
        
        <div className="o-footer__top">

          <FooterContact />

          <FooterColumn title="Company" links={companyLinks} />
          <FooterColumn title="Account" links={accountLinks} />
          <FooterColumn title="Corporate" links={corporateLinks} />
          <FooterColumn title="Popular" links={popularLinks} />

          <FooterApps />
        </div>

        <FooterBottom />

      </div>
    </footer>
  );
};