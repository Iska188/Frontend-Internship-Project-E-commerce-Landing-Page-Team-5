import React from 'react';
// @ts-ignore
import { Text } from '../../atoms/text/text';
// @ts-ignore
import { NewsletterForm } from '../../molecules/newsletter-form/newsletter-form';
// @ts-ignore
import './bottom-banner.css';

export const BottomBanner = () => {
  const bannerData = {
    title: (
      <>
        Stay home &amp; get your daily <br /> needs from our shop
      </>
    ),
    subtitle: (
      <>
        Start Your Daily Shopping with <span className="o-bottom-banner__highlight">Nest Mart</span>
      </>
    ),
    bgImage: "src/assets/footer/hero-second.png",
  };

  return (
    <section className="o-bottom-banner">
      <div className="o-bottom-banner__container">
        <div 
          className="o-bottom-banner__main-banner"
          style={{ backgroundImage: `url(${bannerData.bgImage})` }}
        >
          <div className="o-bottom-banner__content">
            <Text variant="hero-title" as="h1">
              {bannerData.title}
            </Text>
            <Text variant="hero-subtitle" as="p">
              {bannerData.subtitle}
            </Text>
            
            <NewsletterForm />
          </div>
        </div>
      </div>
    </section>
  );
};