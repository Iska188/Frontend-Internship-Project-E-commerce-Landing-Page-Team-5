import { Text } from '../../atoms';
import './provideCard.css';

interface ProvideCardProps {
  icon: string;
  title: string;
  description: string;
  linkLabel: string;
}

export const ProvideCard = ({ icon, title, description, linkLabel }: ProvideCardProps) => {
  return (
    <div className="m-provide-card">
      <img src={icon} alt={title} className="m-provide-card__icon" />

      <Text variant="prod-title" as="h3">
        {title}
      </Text>

      <Text variant="welcome-body" as="p">
        {description}
      </Text>

      <a href="#" className="m-provide-card__link">
        {linkLabel}
      </a>
    </div>
  );
};