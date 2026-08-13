import { Text } from '../../atoms';
import './sidebarPriceRange.css';

interface SidebarPriceRangeProps {
  min: number;
  max: number;
  currentMin: number;
  currentMax: number;
  onChange: (min: number, max: number) => void;
}

export const SidebarPriceRange = ({ min, max, currentMin, currentMax, onChange }: SidebarPriceRangeProps) => {
  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Number(e.target.value), currentMax - 1);
    onChange(value, currentMax);
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(Number(e.target.value), currentMin + 1);
    onChange(currentMin, value);
  };

  return (
    <div className="m-price-range">
      <div className="m-price-range__track-wrap">
        <input
          type="range"
          min={min}
          max={max}
          value={currentMin}
          onChange={handleMinChange}
          className="m-price-range__slider"
        />
        <input
          type="range"
          min={min}
          max={max}
          value={currentMax}
          onChange={handleMaxChange}
          className="m-price-range__slider"
        />
      </div>

      <div className="m-price-range__labels">
        <Text variant="category" as="span">
          From ${currentMin}
        </Text>
        <Text variant="category" as="span">
          To ${currentMax}
        </Text>
      </div>
    </div>
  );
};