import { useState, useEffect } from 'react';
import { Text, Button } from '../../atoms';
import { NewsletterForm } from '../../molecules';
import { TRANSLATIONS } from '../../../constants/translations';
import './hero.css';

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slides = [
    {
      title: TRANSLATIONS.hero.title1,
      subtitle: TRANSLATIONS.hero.subtitle1,
      bgImage: "src/assets/header/hero1.png",
    },
    {
      title: TRANSLATIONS.hero.title2,
      subtitle: TRANSLATIONS.hero.subtitle2,
      bgImage: "src/assets/header/hero2.png",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 4500);

    return () => clearInterval(interval);
  }, [isPaused, slides.length]);

  return (
    <section className="o-hero">
      <div className="o-hero__container">
        <div 
          className="o-hero__main-banner"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {slides.map((slide, index) => {
            const isActive = currentSlide === index;
            return (
              <div
                key={index}
                className={`o-hero__slide ${isActive ? 'o-hero__slide--active' : ''}`}
                style={{ backgroundImage: `url(${slide.bgImage})` }}
              >
                <div className="o-hero__content">
                  <Text variant="hero-title" as="h1">
                    {slide.title}
                  </Text>
                  <Text variant="hero-subtitle" as="p">
                    {slide.subtitle}
                  </Text>
                  
                  <div className="o-hero__newsletter">
                    <NewsletterForm />
                  </div>
                </div>
              </div>
            );
          })}

          <Button
            variant="carousel"
            className="carousel-arrow carousel-arrow--left"
            onClick={prevSlide}
            aria-label="Previous slide"
          >
            ❮
          </Button>
          
          <Button
            variant="carousel"
            className="carousel-arrow carousel-arrow--right"
            onClick={nextSlide}
            aria-label="Next slide"
          >
            ❯
          </Button>

          <div className="carousel-dots">
            {slides.map((slide, index) => {
              const uniqueKey = `${slide.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}-${index}`;
              return (
                <button
                  key={uniqueKey}
                  type="button"
                  className={`carousel-dot ${currentSlide === index ? 'active' : ''}`}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};