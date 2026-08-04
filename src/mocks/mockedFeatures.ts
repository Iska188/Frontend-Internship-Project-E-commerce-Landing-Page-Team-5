import { TRANSLATIONS } from '../constants/translations';

export interface FeatureItem {
  iconSrc: string;
  title: string;
  subtitle: string;
}

export const FEATURES_DATA: FeatureItem[] = [
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