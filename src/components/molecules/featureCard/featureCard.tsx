import { Text } from '../../atoms/text/text';
import './featureCard.css';

export interface FeatureCardProps {
  iconSrc?: string;
  title?: string;
  subtitle?: string;
  variant?: 'default' | 'category';
}

export const FeatureCard = ({
  iconSrc = "https://via.placeholder.com/50",
  title = "Placeholder Title",
  subtitle,
  variant = 'default'
}: FeatureCardProps) => {
  return (
    <div className={`m-feature-card m-feature-card--${variant}`}>
      <img src={iconSrc} alt={title} className="m-feature-card__icon" />
      
      <div className="m-feature-card__content">
        <Text as="h3" variant="prod-title">{title}</Text>
        {subtitle && <Text as="p" variant="category">{subtitle}</Text>}
      </div>
    </div>
  );
};