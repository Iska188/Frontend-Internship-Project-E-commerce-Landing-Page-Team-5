import { Text } from '../../atoms/text/text';
import './teamMemberCard.css';

export interface TeamMemberCardProps {
  imageSrc: string;
  name: string;
  role: string;
}

export const TeamMemberCard = ({ imageSrc, name, role }: TeamMemberCardProps) => {
  return (
    <div className="m-team-card">
      <div className="m-team-card__media">
        <img src={imageSrc} alt={name} className="m-team-card__img" />
      </div>

      <div className="m-team-card__content">
        <Text as="h3" variant="prod-title">
          {name}
        </Text>
        <Text as="p" variant="category">
          {role}
        </Text>

        <div className="m-team-card__socials">
          <a href="#" aria-label="Facebook" className="m-team-card__social-icon">
            <img src="src/assets/about/ourTeam/facebook.svg" alt="" />
          </a>
          <a href="#" aria-label="Twitter" className="m-team-card__social-icon">
            <img src="src/assets/about/ourTeam/twitter.svg" alt="" />
          </a>
          <a href="#" aria-label="Instagram" className="m-team-card__social-icon">
            <img src="src/assets/about/ourTeam/instagram.svg" alt="" />
          </a>
          <a href="#" aria-label="YouTube" className="m-team-card__social-icon">
            <img src="src/assets/about/ourTeam/youtube.svg" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};