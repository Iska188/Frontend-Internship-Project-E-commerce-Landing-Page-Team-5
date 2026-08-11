import { LocationMap } from '../../molecules';
import { Header,  Footer, AboutBottomBanner, ContactHelp, ContactLocations, ContactForm} from '../../organisms';
import { useEffect } from 'react';
import './contactPage.css';


export const ContactPage = () => {
  useEffect(() => {
    document.body.classList.add('contact');
    
    return () => {
      document.body.classList.remove('contact');
    };
  }, []);
  

  return (
    <>
      <Header currentPage='contact' />

      <ContactHelp />

      <LocationMap />

      <ContactLocations />

      <ContactForm />

      <AboutBottomBanner />

      <Footer />
    </>
  );
}
