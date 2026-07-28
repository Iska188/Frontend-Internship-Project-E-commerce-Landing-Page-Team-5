import React from 'react';
import './footer-contact.css';
import logo from '../../../assets/logo.png';
import WaypointLogo from '../../../assets/footer/waypoint.svg'; 
import Headset from '../../../assets/footer/support.svg'; 
import Mail from '../../../assets/footer/mail.svg'; 
import Clock from '../../../assets/footer/clock.svg'; 


export const FooterContact: React.FC = () => {
  return (
    <div className="m-footer-contact">
      <a href="/" className="m-footer-contact__logo-link">
        <img src={logo} alt="Nest Logo" className="m-footer-contact__logo" />
      </a>
      
      <p className="m-footer-contact__description">
        Awesome grocery store website template
      </p>
      
      <ul className="m-footer-contact__list">
        
        <li className="m-footer-contact__item">
          <img src={WaypointLogo} alt="waypoint" className="m-footer-contact__logo" />
          <div className="m-footer-contact__text">
            <strong>Address: </strong> 5171 W Campbell Ave undefined Kent, Utah 53127 United States
          </div>
        </li>
        
        <li className="m-footer-contact__item">
          <img src={Headset} alt="support" className="m-footer-contact__logo" />
          <div className="m-footer-contact__text">
            <strong>Call Us: </strong> 
            <a href="tel:+91540025124553" className="m-footer-contact__link">
              (+91)-540-025-124553
            </a>
          </div>
        </li>
        
        <li className="m-footer-contact__item">
          <img src={Mail} alt="mail" className="m-footer-contact__logo" />
          <div className="m-footer-contact__text">
            <strong>Email: </strong> 
            <a href="mailto:sale@Nest.com" className="m-footer-contact__link">
              sale@Nest.com
            </a>
          </div>
        </li>
        
        <li className="m-footer-contact__item">
          <img src={Clock} alt="clock" className="m-footer-contact__logo" />
          <div className="m-footer-contact__text">
            <strong>Hours: </strong> 10:00 - 18:00, Mon - Sat
          </div>
        </li>
        
      </ul>
    </div>
  );
};