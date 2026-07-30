import { Text } from '../../atoms';
import { NewsletterForm } from '../../molecules';
import { TRANSLATIONS } from '../../../constants/translations';
import './bottomBanner.css';

export const BottomBanner = () => {
  const bannerBgImage = "src/assets/footer/hero-second.png";

  return (
    <section className="o-bottom-banner">
      <div className="o-bottom-banner__container">
        <div 
          className="o-bottom-banner__main-banner"
          style={{ backgroundImage: `url(${bannerBgImage})` }}
        >
          <div className="o-bottom-banner__content">
            <Text variant="hero-title" as="h1">
              {TRANSLATIONS.bottomBanner.title}
            </Text>
            <Text variant="hero-subtitle" as="p">
              {TRANSLATIONS.bottomBanner.subtitlePrefix}{' '}
              <span className="o-bottom-banner__highlight">
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