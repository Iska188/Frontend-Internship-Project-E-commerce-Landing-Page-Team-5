import React from 'react';
import './footer-bottom.css';
import facebook from '../../../assets/footer/facebook.svg'; 
import twitter from '../../../assets/footer/twitter.svg'; 
import skype from '../../../assets/footer/skype.svg';
import instagram from '../../../assets/footer/instagram.svg'; 
import phone from '../../../assets/footer/phone.svg'; 




export const FooterBottom: React.FC = () => {
  return (
<div className='footerbottom'>
  <div className='container'> 
    <div className="bottom">
              <p className="copyright">
                © 2023, Nest - WordPress Ecommerce Template. All rights reserved.
              </p>
              <div className="pg">
                <img src={phone} alt="phone" />
                <div className="phones">
                    <p className="heading">190064666</p>
                    <p>Working 8:00 - 22:00</p>
                </div>
              </div> 

              <div className="pg">
                <img src={phone} alt="phone" />
                <div className="phones">
                    <p className="heading">1900648888</p>
                    <p>24/7 Support Center</p>
                </div>
              </div>
              
                <div className='socials-group'>
                    <div className="socials">
                            <p>Follow Us</p>
                            <img src={facebook} alt="facebook" />
                            <img src={skype} alt="skype" />
                            <img src={twitter} alt="twitter" />
                            <img src={instagram} alt="instagram" />
                    </div>
                    <p>Up to 15% discount on your first subscribe</p>
                </div>
            </div>
  </div>
</div>
  )
}