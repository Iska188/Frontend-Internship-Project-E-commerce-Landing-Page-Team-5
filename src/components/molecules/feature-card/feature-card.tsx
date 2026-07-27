import { Text } from '../../atoms/text/text';
import './feature-card.css';

export interface FeatureCardProps {
  iconSrc?: string;
  title?: string;
  subtitle?: string;
}

export const FeatureCard = ({
  iconSrc = "https://via.placeholder.com/50",
  title = "Placeholder Title",
  subtitle = "Placeholder Subtitle"
}: FeatureCardProps) => {
  return (
    <div className="m-feature-card">
      <img src={iconSrc} alt={title} className="m-feature-card__icon" />
      
      <div className="m-feature-card__content">
        <Text as="h3" variant="prod-title">{title}</Text>
        <Text as="p" variant="category">{subtitle}</Text>
      </div>
    </div>
  );
};