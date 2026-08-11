import { Text } from '../../atoms';
import './statColumn.css';

interface StatColumnProps {
  value: string;
  label: string;
}

export const StatColumn = ({ value, label }: StatColumnProps) => {
  return (
    <div className="m-stat-column">
      <Text variant="stat-value" as="span">
        {value}
      </Text>
      <Text variant="stat-label" as="span">
        {label}
      </Text>
    </div>
  );
};