import React from 'react';
import { Text } from '../../atoms/text/text';
import './footer-apps.css';
import googlePlay from '../../../assets/footer/google-play.png'; 
import appStore from '../../../assets/footer/app-store.png'; 
import payment from '../../../assets/footer/payment.png'; 

export const FooterApps: React.FC = () => {
  return (
    <div className="m-footer-apps">
      {/* Title */}
      <Text as="h4" variant="footer-title" className="m-footer-apps__title">
        Install App
      </Text>
      
      {/* App Stores Section */}
      <p className="m-footer-apps__subtitle">
        From App Store or Google Play
      </p>
      
      <div className="m-footer-apps__stores">
        <a href="#" className="m-footer-apps__store-link">
          <img src={googlePlay} alt="google-play" />
        </a>
        <a href="#" className="m-footer-apps__store-link">
          <img src={appStore} alt="app-store" />
        </a>
      </div>
      
      {/* Payment Gateways Section */}
      <p className="m-footer-apps__subtitle m-footer-apps__subtitle--spaced">
        Secured Payment Gateways
      </p>
      
      <div className="m-footer-apps__payments">
        <img src={payment} alt="cards" />
      </div>
    </div>
  );
};