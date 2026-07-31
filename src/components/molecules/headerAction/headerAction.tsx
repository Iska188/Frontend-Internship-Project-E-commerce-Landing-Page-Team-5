import { Text, Badge } from '../../atoms';
import './headerAction.css';

interface HeaderActionProps {
  icon: React.ReactNode;    
  label: string;   
  count: number;
}

export const HeaderAction = ({ icon, label, count }: HeaderActionProps) => {
  return (
    <div className="m-header-action">
      <div className="m-header-action__icon-wrapper">
        <span className="m-header-action__icon">{icon}</span>
        {count !== undefined && count > -1 && (
          <Badge type="count" label={count.toString()} />
        )}
      </div>
      <Text variant="prod-title" as="span" className="m-header-action__label">{label}</Text>
    </div>
  );
};