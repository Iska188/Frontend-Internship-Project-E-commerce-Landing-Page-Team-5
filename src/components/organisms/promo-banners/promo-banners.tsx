import { PromoCard } from '../../molecules/promo-card/promo-card';
import './promo-banners.css';

const BANNERS_DATA = [
  {
    title: 'Everyday Fresh & Clean with Our Products',
    bgColor: '#F0E8D5',
    imageSrc: 'src/assets/promoBanners/big1.png',
  },
  {
    title: 'Make your Breakfast Healthy and Easy',
    bgColor: '#F3E8E8',
    imageSrc: 'src/assets/promoBanners/big2.png',
  },
  {
    title: 'The best Organic Products Online',
    bgColor: '#E7EAF3',
    imageSrc: 'src/assets/promoBanners/big3.png',
  },
];

export const PromoBanners = () => {
  return (
    <section className="o-promo-banners">
      <div className="o-promo-banners__container">
        {BANNERS_DATA.map((banner, index) => (
          <PromoCard key={index} {...banner} />
        ))}
      </div>
    </section>
  );
};