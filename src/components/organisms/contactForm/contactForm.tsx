import React, { useState } from 'react';
import { Text, Button } from '../../atoms';
import './contactFrom.css';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section className="o-contact-form">
      <div className="o-contact-form__container">

        <div className="o-contact-form__left">
          <Text variant="help-eyebrow" as="span">Contact form</Text>
          <Text variant="help-title" as="h2">Drop Us a Line</Text>
          <Text variant="help-desc" as="p" className="o-contact-form__subtitle">
            Your email address will not be published. Required fields are marked *
          </Text>

          <form onSubmit={handleSubmit} className="o-contact-form__form">
            <div className="o-contact-form__grid">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                className="o-contact-form__input"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="o-contact-form__input"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone"
                className="o-contact-form__input"
                value={formData.phone}
                onChange={handleChange}
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="o-contact-form__input"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>

            <textarea
              name="message"
              placeholder="Message"
              rows={6}
              className="o-contact-form__textarea"
              value={formData.message}
              onChange={handleChange}
              required
            />

            <div className="o-contact-form__btn-wrapper">
              <Button type="submit" variant="dark">
                Send message
              </Button>
            </div>
          </form>
        </div>

        <div className="o-contact-form__right">
          <img 
            src='src/assets/contact/contactfrom.png'
            alt="Customer Support Representative" 
            className="o-contact-form__image"
          />
        </div>

      </div>
    </section>
  );
};