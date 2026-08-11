import { Text } from '../../atoms/text/text';
import './teamMemberCard.css';

export interface TeamMemberCardProps {
  imageSrc: string;
  name: string;
  role: string;
}

interface SocialLink {
  platform: string;
  iconSrc: string;
  url: string;
}

const SOCIAL_LINKS: SocialLink[] = [
  { platform: 'Facebook', iconSrc: 'src/assets/about/ourTeam/facebook.svg', url: '#' },
  { platform: 'Twitter', iconSrc: 'src/assets/about/ourTeam/twitter.svg', url: '#' },
  { platform: 'Instagram', iconSrc: 'src/assets/about/ourTeam/instagram.svg', url: '#' },
  { platform: 'YouTube', iconSrc: 'src/assets/about/ourTeam/youtube.svg', url: '#' },
];

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
          {SOCIAL_LINKS.map((social) => {
            const uniqueKey = `${name.toLowerCase().replace(/[^a-z0-9]/g, '-')}-${social.platform.toLowerCase()}`;

            return (
              <a
                key={uniqueKey}
                href={social.url}
                aria-label={social.platform}
                className="m-team-card__social-icon"
              >
                <img src={social.iconSrc} alt={`${social.platform} icon`} />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};