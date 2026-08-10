import { Text } from '../../atoms';
import './infoColumn.css';

interface InfoColumnProps {
  title: string;
  description: string;
}

export const InfoColumn = ({ title, description }: InfoColumnProps) => {
  return (
    <div className="m-info-column">
      <Text variant="prod-title" as="h3">
        {title}
      </Text>
      <Text variant="welcome-body" as="p">
        {description}
      </Text>
    </div>
  );
};