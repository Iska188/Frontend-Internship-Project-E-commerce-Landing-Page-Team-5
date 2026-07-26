import { Button } from '../../atoms/button/button'; 
import { Text } from '../../atoms/text/text';
import './DealCard.css';

export interface DealCardProps {
  imageSrc?: string;
  title?: string;
  vendor?: string;
  currentPrice?: string;
  originalPrice?: string;
  countdown?: { days: string; hours: string; mins: string; secs: string };
  containerBgColor?: string;
  titleColor?: string;
}

export const DealCard = ({
  imageSrc = "https://via.placeholder.com/250",
  title = "Placeholder Title",
  vendor = "Default Vendor",
  currentPrice = "$0.00",
  originalPrice = "$0.00",
  countdown = { days: "00", hours: "00", mins: "00", secs: "00" },
  containerBgColor = "transparent",
  titleColor
}: DealCardProps) => {
  return (
    <div 
      className="m-deal-card" 
      style={{ backgroundColor: containerBgColor }}
    >
      <div className="m-deal-card__media">
        <img src={imageSrc} alt={title} className="m-deal-card__img" />
        
        <div className="m-deal-card__countdown">
          {Object.entries(countdown).map(([unit, value]) => (
            <div key={unit} className="countdown-box">
              <span className="countdown-value">{String(value)}</span>
              <span className="countdown-unit">{unit}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="m-deal-card__content">
        <Text as="h3" variant="prod-title" style={{ color: titleColor }}>
          {title}
        </Text>
        
        <Text as="p" variant="category">
          By <span className="vendor-name">{vendor}</span>
        </Text>

        <div className="m-deal-card__footer">
          <div className="m-deal-card__prices">
            <Text as="span" variant="price-current">{currentPrice}</Text>
            <Text as="span" variant="price-old">{originalPrice}</Text>
          </div>
          
          <Button variant="add-short">
            Add
          </Button>
        </div>
      </div>
    </div>
  );
};