import React from 'react';
import { Text } from '../../atoms';
import { googlePlay, appStore, payment } from '../../../assets';
import { TRANSLATIONS } from '../../../constants/translations';
import './footer-apps.css';

export const FooterApps: React.FC = () => {
  return (
    <div className="m-footer-apps">
      <Text as="h4" variant="footer-title" className="m-footer-apps__title">
        {TRANSLATIONS.footer.installApp}
      </Text>
      
      <p className="m-footer-apps__subtitle">
        {TRANSLATIONS.footer.appStoreSubtitle}
      </p>
      
      <div className="m-footer-apps__stores">
        <a href="#" className="m-footer-apps__store-link">
          <img src={googlePlay} alt="google-play" />
        </a>
        <a href="#" className="m-footer-apps__store-link">
          <img src={appStore} alt="app-store" />
        </a>
      </div>
      
      <p className="m-footer-apps__subtitle m-footer-apps__subtitle--spaced">
        {TRANSLATIONS.footer.securedPayment}
      </p>
      
      <div className="m-footer-apps__payments">
        <img src={payment} alt="cards" />
      </div>
    </div>
  );
};