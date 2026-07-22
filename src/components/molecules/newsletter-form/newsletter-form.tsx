// @ts-ignore
import { Button } from '../../atoms/button/button';
import './newsletter-form.css';

export const NewsletterForm = () => {
  return (
    <div className="m-newsletter-form">
      <input 
        type="email" 
        placeholder="Your email address" 
        className="m-newsletter-form__input" 
      />
      <Button variant="primary" className="m-newsletter-form__btn">
        Subscribe
      </Button>
    </div>
  );
};