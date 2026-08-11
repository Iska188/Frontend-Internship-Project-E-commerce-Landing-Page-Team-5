import React from 'react';
import { FooterColumn, FooterApps, FooterContact, FooterBottom } from '../../molecules';
import { TRANSLATIONS } from '../../../constants/translations';

import './footer.css';

export const Footer: React.FC = () => {
  const companyLinks = [
    { label: TRANSLATIONS.footer.companyLinks.about, href: '#/about' },
    { label: TRANSLATIONS.footer.companyLinks.delivery, href: '/delivery' },
    { label: TRANSLATIONS.footer.companyLinks.privacy, href: '/privacy' },
    { label: TRANSLATIONS.footer.companyLinks.terms, href: '/terms' },
    { label: TRANSLATIONS.footer.companyLinks.contact, href: '#/contact' },
    { label: TRANSLATIONS.footer.companyLinks.support, href: '/support' },
    { label: TRANSLATIONS.footer.companyLinks.careers, href: '/careers' },
  ];

  const accountLinks = [
    { label: TRANSLATIONS.footer.accountLinks.signIn, href: '/login' },
    { label: TRANSLATIONS.footer.accountLinks.viewCart, href: '#/cart' },
    { label: TRANSLATIONS.footer.accountLinks.myWishlist, href: '/wishlist' },
    { label: TRANSLATIONS.footer.accountLinks.trackOrder, href: '/track' },
    { label: TRANSLATIONS.footer.accountLinks.helpTicket, href: '/help' },
    { label: TRANSLATIONS.footer.accountLinks.shippingDetails, href: '/shipping' },
    { label: TRANSLATIONS.footer.accountLinks.compareProducts, href: '/compare' },
  ];

  const corporateLinks = [
    { label: TRANSLATIONS.footer.corporateLinks.vendor, href: '/vendor' },
    { label: TRANSLATIONS.footer.corporateLinks.affiliate, href: '/affiliate' },
    { label: TRANSLATIONS.footer.corporateLinks.farmBusiness, href: '/farm' },
    { label: TRANSLATIONS.footer.corporateLinks.farmCareers, href: '/careers' },
    { label: TRANSLATIONS.footer.corporateLinks.suppliers, href: '/suppliers' },
    { label: TRANSLATIONS.footer.corporateLinks.accessibility, href: '/accessibility' },
    { label: TRANSLATIONS.footer.corporateLinks.promotions, href: '/promotions' },
  ];

  const popularLinks = [
    { label: TRANSLATIONS.footer.popularLinks.milk, href: '/milk' },
    { label: TRANSLATIONS.footer.popularLinks.butter, href: '/butter' },
    { label: TRANSLATIONS.footer.popularLinks.eggs, href: '/eggs' },
    { label: TRANSLATIONS.footer.popularLinks.marmalades, href: '/marmalades' },
    { label: TRANSLATIONS.footer.popularLinks.sourCream, href: '/dips' },
    { label: TRANSLATIONS.footer.popularLinks.tea, href: '/tea' },
    { label: TRANSLATIONS.footer.popularLinks.cheese, href: '/cheese' },
  ];

  return (
    <footer className="o-footer">
      <div className="o-footer__container">
        <div className="o-footer__top">
          <FooterContact />

          <FooterColumn title={TRANSLATIONS.footer.titles.company} links={companyLinks} />
          <FooterColumn title={TRANSLATIONS.footer.titles.account} links={accountLinks} />
          <FooterColumn title={TRANSLATIONS.footer.titles.corporate} links={corporateLinks} />
          <FooterColumn title={TRANSLATIONS.footer.titles.popular} links={popularLinks} />

          <FooterApps />
        </div>
      </div>
      <FooterBottom />
    </footer>
  );
};