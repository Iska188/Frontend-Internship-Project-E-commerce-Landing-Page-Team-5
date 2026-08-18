import { TRANSLATIONS } from '../../../constants/translations';
import './newsletterForm.css';

export const NewsletterForm = () => {
  return (
    <form className="m-newsletter-form" onSubmit={(e) => e.preventDefault()}>
      <input 
        type="email" 
        placeholder={TRANSLATIONS.newsletter.emailPlaceholder} 
        className="m-newsletter-form__input" 
      />
      <button type="submit" className="m-newsletter-form__btn">
        {TRANSLATIONS.newsletter.subscribeBtn}
      </button>
    </form>
  );
};