import { Header, Footer, WelcomeSection, WhatWeProvide, AboutHero, StatsBanner, OurTeam, AboutBottomBanner } from '../../organisms';
import { useEffect } from 'react';
import './aboutPage.css';

export const AboutPage = () => {
  useEffect(() => {
    document.body.classList.add('about');
    
    return () => {
      document.body.classList.remove('about');
    };
  }, []);

  return (
    <>
      <Header currentPage='about' />
      
      <WelcomeSection />

      <WhatWeProvide />

      <AboutHero />

      <StatsBanner />

      <OurTeam />

      <AboutBottomBanner />

      <Footer />
    </>
  );
};