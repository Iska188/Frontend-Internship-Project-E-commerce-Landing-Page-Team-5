import { Text, Button } from '../../atoms';
import { TeamMemberCard } from '../../molecules';
import { TRANSLATIONS } from '../../../constants/translations';
import memberOne from '../../../assets/about/ourTeam/member1.png';
import memberTwo from '../../../assets/about/ourTeam/member2.png';
import './ourTeam.css';

const TEAM_DATA = [
  { imageSrc: memberOne, name: TRANSLATIONS.ourTeam.members.merinda.name, role: TRANSLATIONS.ourTeam.members.merinda.role },
  { imageSrc: memberTwo, name: TRANSLATIONS.ourTeam.members.specter.name, role: TRANSLATIONS.ourTeam.members.specter.role },
];

export const OurTeam = () => {
  return (
    <section className="o-our-team">
      <div className="o-our-team__container">
        <div className="o-our-team__header">
          <Text variant="sec-title" as="h2">
            {TRANSLATIONS.ourTeam.title}
          </Text>
          <span className="o-our-team__squiggle" aria-hidden="true" />
        </div>

        <div className="o-our-team__body">
          <div className="o-our-team__content">
            <Text variant="about-eyebrow" as="span">
              {TRANSLATIONS.ourTeam.eyebrow}
            </Text>

            <Text variant="welcome-title" as="h3">
              {TRANSLATIONS.ourTeam.subtitle}
            </Text>

            <Text variant="welcome-body" as="p">
              {TRANSLATIONS.ourTeam.paragraphOne}
            </Text>

            <Text variant="welcome-body" as="p">
              {TRANSLATIONS.ourTeam.paragraphTwo}
            </Text>

            <Button variant="primary">{TRANSLATIONS.ourTeam.viewAllMembers}</Button>
          </div>

          <div className="o-our-team__grid">
            {TEAM_DATA.map((member) => (
              <TeamMemberCard
                key={member.name}
                imageSrc={member.imageSrc}
                name={member.name}
                role={member.role}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};