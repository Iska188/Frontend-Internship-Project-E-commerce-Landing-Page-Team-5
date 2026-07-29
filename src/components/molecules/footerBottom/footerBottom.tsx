import React from 'react';
import { facebook, twitter, skype, instagram, phone } from '../../../assets';
import { TRANSLATIONS } from '../../../constants/translations';
import './footerBottom.css';

export const FooterBottom: React.FC = () => {
  return (
    <div className='footerbottom'>
      <div className='container'> 
        <div className="bottom">
          <p className="copyright">
            {TRANSLATIONS.footer.copyright}
          </p>
          
          <div className="pg">
            <img src={phone} alt="phone" />
            <div className="phones">
              <p className="heading">190064666</p>
              <p>{TRANSLATIONS.footer.workingHours}</p>
            </div>
          </div> 

          <div className="pg">
            <img src={phone} alt="phone" />
            <div className="phones">
              <p className="heading">1900648888</p>
              <p>{TRANSLATIONS.footer.supportCenter}</p>
            </div>
          </div>
          
          <div className='socials-group'>
            <div className="socials">
              <p>{TRANSLATIONS.footer.followUs}</p>
              <img src={facebook} alt="facebook" />
              <img src={skype} alt="skype" />
              <img src={twitter} alt="twitter" />
              <img src={instagram} alt="instagram" />
            </div>
            <p>{TRANSLATIONS.footer.discountSubscribe}</p>
          </div>
        </div>
      </div>
    </div>
  );
};