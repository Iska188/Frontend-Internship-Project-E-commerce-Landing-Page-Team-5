import { TRANSLATIONS } from '../../../constants/translations';
import { FeatureCard } from '../../molecules/featureCard/featureCard';
import './featureSection.css';

const FEATURES_DATA = [
  {
    iconSrc: 'src/assets/featureSection/price.svg',
    title: TRANSLATIONS.featureSection.banner1.title,
    subtitle: TRANSLATIONS.featureSection.banner1.subtitle,
  },
  {
    iconSrc: 'src/assets/featureSection/delivery.svg',
    title: TRANSLATIONS.featureSection.banner2.title,
    subtitle: TRANSLATIONS.featureSection.banner2.subtitle,
  },
  {
    iconSrc: 'src/assets/featureSection/deal.svg',
    title: TRANSLATIONS.featureSection.banner3.title,
    subtitle: TRANSLATIONS.featureSection.banner3.subtitle,
  },
  {
    iconSrc: 'src/assets/featureSection/assortment.svg',
    title: TRANSLATIONS.featureSection.banner4.title,
    subtitle: TRANSLATIONS.featureSection.banner4.subtitle,
  },
  {
    iconSrc: 'src/assets/featureSection/returns.svg',
    title: TRANSLATIONS.featureSection.banner5.title,
    subtitle: TRANSLATIONS.featureSection.banner5.subtitle,
  },
];

export const FeatureSection = () => {
  return (
    <section className="o-features">
      <div className="featurecontainer">
        <div className="featurecontainer__grid">
          {FEATURES_DATA.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};