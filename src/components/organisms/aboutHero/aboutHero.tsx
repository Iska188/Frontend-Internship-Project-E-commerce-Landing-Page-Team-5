import { Text } from '../../atoms';
import { InfoColumn } from '../../molecules';
import { TRANSLATIONS } from '../../../constants/translations';
import collageImageOne from '../../../assets/about/aboutHero/collage-1.jpg';
import collageImageTwo from '../../../assets/about/aboutHero/collage-2.jpg';
import './aboutHero.css';

const INFO_COLUMNS_DATA = [
  { title: TRANSLATIONS.aboutHero.columns.whoWeAre.title, description: TRANSLATIONS.aboutHero.columns.whoWeAre.description },
  { title: TRANSLATIONS.aboutHero.columns.ourHistory.title, description: TRANSLATIONS.aboutHero.columns.ourHistory.description },
  { title: TRANSLATIONS.aboutHero.columns.ourMission.title, description: TRANSLATIONS.aboutHero.columns.ourMission.description },
];

export const AboutHero = () => {
  return (
    <section className="o-about-hero">
      <div className="o-about-hero__container">
        <div className="o-about-hero__top">
          <div className="o-about-hero__collage">
            <img src={collageImageOne} alt="" className="o-about-hero__collage-img o-about-hero__collage-img--back" />
            <img src={collageImageTwo} alt="" className="o-about-hero__collage-img o-about-hero__collage-img--front" />
          </div>

          <div className="o-about-hero__content">
            <Text variant="about-eyebrow" as="span">
              {TRANSLATIONS.aboutHero.eyebrow}
            </Text>

            <Text variant="hero-title" as="h1">
              {TRANSLATIONS.aboutHero.title}
            </Text>

            <Text variant="welcome-body" as="p">
              {TRANSLATIONS.aboutHero.paragraphOne}
            </Text>

            <Text variant="welcome-body" as="p">
              {TRANSLATIONS.aboutHero.paragraphTwo}
            </Text>
          </div>
        </div>

        <div className="o-about-hero__columns">
          {INFO_COLUMNS_DATA.map((col) => (
            <InfoColumn key={col.title} title={col.title} description={col.description} />
          ))}
        </div>
      </div>
    </section>
  );
};