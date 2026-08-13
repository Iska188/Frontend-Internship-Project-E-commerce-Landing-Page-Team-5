import { Text } from '../../atoms';
import './sidebarCheckboxGroup.css';

interface CheckboxOption {
  id: string;
  label: string;
  count: number;
}

interface SidebarCheckboxGroupProps {
  options: CheckboxOption[];
  selected: string[];
  onChange: (selected: string[]) => void;
}

export const SidebarCheckboxGroup = ({ options, selected, onChange }: SidebarCheckboxGroupProps) => {
  const toggleOption = (id: string) => {
    if (selected.includes(id)) {
      onChange(selected.filter((item) => item !== id));
    } else {
      onChange([...selected, id]);
    }
  };

  return (
    <ul className="m-checkbox-group">
      {options.map((option) => (
        <li key={option.id} className="m-checkbox-group__item">
          <label className="m-checkbox-group__label">
            <input
              type="checkbox"
              checked={selected.includes(option.id)}
              onChange={() => toggleOption(option.id)}
              className="m-checkbox-group__input"
            />
            <Text variant="category" as="span">
              {option.label}
            </Text>
          </label>
          <span className="m-checkbox-group__count">({option.count})</span>
        </li>
      ))}
    </ul>
  );
};