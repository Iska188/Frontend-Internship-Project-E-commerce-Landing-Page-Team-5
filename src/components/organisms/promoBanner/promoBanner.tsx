import { PromoCard } from '../../molecules';
import { TRANSLATIONS } from '../../../constants/translations';
import './promoBanner.css';

const BANNERS_DATA = [
  {
    title: TRANSLATIONS.promoBanners.banner1,
    variant: 'cream',
    imageSrc: 'src/assets/body/promobanner/big1.png',
  },
  {
    title: TRANSLATIONS.promoBanners.banner2,
    variant: 'pink',
    imageSrc: 'src/assets/body/promobanner/big2.png',
  },
  {
    title: TRANSLATIONS.promoBanners.banner3,
    variant: 'grey',
    imageSrc: 'src/assets/body/promobanner/big3.png',
  },
];

export const PromoBanners = () => {
  return (
    <section className="o-promo-banners">
      <div className="o-promo-banners__container">
        {BANNERS_DATA.map((banner) => {
          const uniqueKey = banner.title.toLowerCase().replace(/[^a-z0-9]/g, '-');
          return <PromoCard key={uniqueKey} {...banner} />;
        })}
      </div>
    </section>
  );
};