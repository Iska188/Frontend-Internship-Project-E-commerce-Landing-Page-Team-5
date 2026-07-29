import React from 'react';
import { logo, WaypointLogo, Headset, Mail, Clock } from '../../../assets';
import { TRANSLATIONS } from '../../../constants/translations';
import './footer-contact.css';

export const FooterContact: React.FC = () => {
  return (
    <div className="m-footer-contact">
      <a href="/" className="m-footer-contact__logo-link">
        <img src={logo} alt="Nest Logo" className="m-footer-contact__logo" />
      </a>
      
      <p className="m-footer-contact__description">
        {TRANSLATIONS.footer.contactDescription}
      </p>
      
      <ul className="m-footer-contact__list">
        
        <li className="m-footer-contact__item">
          <img src={WaypointLogo} alt="waypoint" className="m-footer-contact__icon" />
          <div className="m-footer-contact__text">
            <span className="m-footer-contact__label"><strong>{TRANSLATIONS.footer.addressLabel} </strong></span>
            {TRANSLATIONS.footer.addressValue}
          </div>
        </li>
        
        <li className="m-footer-contact__item">
          <img src={Headset} alt="support" className="m-footer-contact__icon" />
          <div className="m-footer-contact__text">
            <span className="m-footer-contact__label"><strong>{TRANSLATIONS.footer.callUsLabel} </strong></span>
            <a href="tel:+91540025124553" className="m-footer-contact__link">
              (+91)-540-025-124553
            </a>
          </div>
        </li>
        
        <li className="m-footer-contact__item">
          <img src={Mail} alt="mail" className="m-footer-contact__icon" />
          <div className="m-footer-contact__text">
            <span className="m-footer-contact__label"><strong>{TRANSLATIONS.footer.emailLabel} </strong></span>
            <a href="mailto:sale@Nest.com" className="m-footer-contact__link">
              sale@Nest.com
            </a>
          </div>
        </li>
        
        <li className="m-footer-contact__item">
          <img src={Clock} alt="clock" className="m-footer-contact__icon" />
          <div className="m-footer-contact__text">
            <span className="m-footer-contact__label"><strong>{TRANSLATIONS.footer.hoursLabel} </strong></span>
            {TRANSLATIONS.footer.hoursValue}
          </div>
        </li>
        
      </ul>
    </div>
  );
};