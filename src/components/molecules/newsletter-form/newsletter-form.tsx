import { Button } from '../../atoms';
import { TRANSLATIONS } from '../../../constants/translations';
import './newsletter-form.css';

export const NewsletterForm = () => {
  return (
    <div className="m-newsletter-form">
      <input 
        type="email" 
        placeholder={TRANSLATIONS.newsletter.emailPlaceholder} 
        className="m-newsletter-form__input" 
      />
      <Button variant="primary" className="m-newsletter-form__btn">
        {TRANSLATIONS.newsletter.subscribeBtn}
      </Button>
    </div>
  );
};