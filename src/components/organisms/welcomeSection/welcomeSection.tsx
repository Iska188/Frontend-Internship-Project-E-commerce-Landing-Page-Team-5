import { Text } from '../../atoms';
import { ImageCarousel } from '../../molecules';
import { TRANSLATIONS } from '../../../constants/translations';
import mainImage from '../../../assets/about/welcome/welcome.png';
import gallery1 from '../../../assets/about/welcome/carousel1.png';
import gallery2 from '../../../assets/about/welcome/carousel2.png';
import gallery3 from '../../../assets/about/welcome/carousel3.png';
import './welcomeSection.css';

const GALLERY_IMAGES = [gallery1, gallery2, gallery3,gallery1, gallery2, gallery3];

export const WelcomeSection = () => {
  return (
    <section className="o-welcome-section">
      <div className="o-welcome-section__container">
        <div className="o-welcome-section__image">
          <img src={mainImage} alt={TRANSLATIONS.welcomeSection.title} />
        </div>

        <div className="o-welcome-section__content">
          <Text variant="welcome-title" as="h2">
            {TRANSLATIONS.welcomeSection.title}
          </Text>

          <Text variant="welcome-body" as="p">
            {TRANSLATIONS.welcomeSection.paragraphOne}
          </Text>

          <Text variant="welcome-body" as="p">
            {TRANSLATIONS.welcomeSection.paragraphTwo}
          </Text>

          <ImageCarousel images={GALLERY_IMAGES} visibleCount={3} />
        </div>
      </div>
    </section>
  );
};