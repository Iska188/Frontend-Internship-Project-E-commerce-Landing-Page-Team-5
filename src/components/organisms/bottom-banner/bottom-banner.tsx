import React from 'react';
// @ts-ignore
import { Text } from '../../atoms/text/text';
// @ts-ignore
import { NewsletterForm } from '../../molecules/newsletter-form/newsletter-form';
import { TRANSLATIONS } from '../../../constants/translations';
// @ts-ignore
import './bottom-banner.css';

export const BottomBanner = () => {
  const bannerBgImage = "src/assets/footer/hero-second.png";

  return (
    <section className="o-bottom-banner">
      <div className="o-bottom-banner__container">
        <div 
          className="o-bottom-banner__main-banner"
          style={{ backgroundImage: `url(${bannerBgImage})` }}
        >
          <div className="o-bottom-banner__content">
            <Text variant="hero-title" as="h1">
              {TRANSLATIONS.bottomBanner.title}
            </Text>
            <Text variant="hero-subtitle" as="p">
              {TRANSLATIONS.bottomBanner.subtitlePrefix}{' '}
              <span className="o-bottom-banner__highlight">
                {TRANSLATIONS.bottomBanner.subtitleHighlight}
              </span>
            </Text>
            
            <NewsletterForm />
          </div>
        </div>
      </div>
    </section>
  );
};