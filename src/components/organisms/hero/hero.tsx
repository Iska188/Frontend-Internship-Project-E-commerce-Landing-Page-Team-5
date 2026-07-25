import { useState } from 'react';
// @ts-ignore
import { Text } from '../../atoms/text/text';
//@ts-ignore
import { Button } from '../../atoms/button/button';
// @ts-ignore
import { NewsletterForm } from '../../molecules/newsletter-form/newsletter-form';
// @ts-ignore
import './hero.css';

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Fresh Vegetables Big discount",
      subtitle: "Save up to 50% off on your first order",
      bgImage: "src/assets/header/hero1.png",
    },
    {
      title: "Don’t miss our daily fresh products",
      subtitle: "Sign up for the daily newsletter",
      bgImage: "src/assets/header/hero2.png",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <section className="o-hero">
      <div className="o-hero__container">
        <div 
          className="o-hero__main-banner"
          style={{ backgroundImage: `url(${slides[currentSlide].bgImage})` }}
        >
         <Button variant="carousel" className="carousel-arrow carousel-arrow--left" onClick={prevSlide}>❮</Button>
          
          <div className="o-hero__content">
            <Text variant="hero-title" as="h1">
              {slides[currentSlide].title}
            </Text>
            <Text variant="hero-subtitle" as="p">
              {slides[currentSlide].subtitle}
            </Text>
            
            <NewsletterForm />
          </div>

          <Button variant="carousel" className="carousel-arrow carousel-arrow--right" onClick={nextSlide}>❯</Button>

          <div className="carousel-dots">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${currentSlide === index ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};