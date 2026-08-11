import { useState } from 'react';
import { Button } from '../../atoms';
import { Arrow } from '../../../assets';
import './imageCarousel.css';

interface ImageCarouselProps {
  images: string[];
  visibleCount?: number;
}

export const ImageCarousel = ({ images, visibleCount = 3 }: ImageCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = Math.max(images.length - visibleCount, 0);

  const handlePrev = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));
  const handleNext = () => setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));

  const itemWidth = 100 / images.length;
  const trackWidth = (images.length / visibleCount) * 100;
  const translateX = currentIndex * itemWidth;

  return (
    <div className="m-carousel">
      <Button variant="carousel" onClick={handlePrev} disabled={currentIndex === 0}>
        <img src={Arrow} alt="Previous" className="m-carousel__arrow m-carousel__arrow--prev" />
      </Button>

      <div className="m-carousel__viewport">
        <div
          className="m-carousel__track"
          style={{ width: `${trackWidth}%`, transform: `translateX(-${translateX}%)` }}
        >
          {images.map((src, index) => {
            const uniqueKey = `${src.toLowerCase().replace(/[^a-z0-9]/g, '-')}-${index}`;

            return (
              <div className="m-carousel__item" key={uniqueKey} style={{ width: `${itemWidth}%` }}>
                <img src={src} alt={`Gallery image ${index + 1}`} />
              </div>
            );
          })}
        </div>
      </div>

      <Button variant="carousel" onClick={handleNext} disabled={currentIndex === maxIndex}>
        <img src={Arrow} alt="Next" className="m-carousel__arrow m-carousel__arrow--next" />
      </Button>
    </div>
  );
};