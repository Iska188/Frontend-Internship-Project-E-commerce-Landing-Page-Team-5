import { Text } from '../../atoms';
import { NewsletterForm } from '../../molecules';
import { TRANSLATIONS } from '../../../constants/translations';
import bannerImage from '../../../assets/about/bottomBanner/bgimage.png';
import './aboutBottomBanner.css';

export const AboutBottomBanner = () => {
  return (
    <section className="o-about-bottom-banner">
      <div className="o-about-bottom-banner__container">
        <div className="o-about-bottom-banner__main-banner">
          <img
            src={bannerImage}
            alt=""
            className="o-about-bottom-banner__image"
          />

          <div className="o-about-bottom-banner__content">
            <Text variant="hero-title" as="h1">
              {TRANSLATIONS.bottomBanner.title}
            </Text>
            <Text variant="hero-subtitle" as="p">
              {TRANSLATIONS.bottomBanner.subtitlePrefix}{' '}
              <span className="o-about-bottom-banner__highlight">
                {TRANSLATIONS.bottomBanner.subtitleHighlight}
              </span>
            </Text>
            <NewsletterForm />
          </div>
        </div>
      </div>
    </section>
  );
};