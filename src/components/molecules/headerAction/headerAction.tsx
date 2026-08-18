import { Text, Badge } from '../../atoms';
import './headerAction.css';

interface HeaderActionProps {
  icon: React.ReactNode;    
  label: string;   
  count: number;
  href?: string;
  onClick?: () => void;
}

export const HeaderAction = ({ icon, label, count, href, onClick }: HeaderActionProps) => {
  const content = (
    <div className="m-header-action" onClick={onClick}>
      <div className="m-header-action__icon-wrapper">
        <span className="m-header-action__icon">{icon}</span>
        {count !== undefined && count > -1 && (
          <Badge type="count" label={count.toString()} className="m-header-action__badge" />
        )}
      </div>
      <Text variant="prod-title" as="span" className="m-header-action__label">{label}</Text>
    </div>
  );

  if (href) {
    return (
      <a href={href} style={{ textDecoration: 'none', color: 'inherit' }}>
        {content}
      </a>
    );
  }

  return content;
};