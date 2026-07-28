// @ts-ignore
import { Badge } from '../../atoms/badge/badge';
// @ts-ignore
import { Text } from '../../atoms/text/text';
// @ts-ignore
import './header-action.css';

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
        <Badge type="count" label={count.toString()} />
      </div>
      <Text variant="prod-title" as="span">{label}</Text>
    </div>
  );
};