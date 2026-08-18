import React from 'react';
import './quantityInput.css';

interface QuantityInputProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  className?: string;
}

export const QuantityInput: React.FC<QuantityInputProps> = ({
  value,
  onChange,
  min = 1,
  max = 99,
  className = '',
}) => {
  const handleIncrement = () => {
    if (value < max) {
      onChange(value + 1);
    }
  };

  const handleDecrement = () => {
    if (value > min) {
      onChange(value - 1);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const parsed = parseInt(e.target.value, 10);
    if (!isNaN(parsed)) {
      if (parsed >= min && parsed <= max) {
        onChange(parsed);
      }
    }
  };

  return (
    <div className={`a-quantity-input ${className}`}>
      <input
        type="number"
        className="a-quantity-input__field"
        value={value}
        onChange={handleInputChange}
        min={min}
        max={max}
        aria-label="Quantity"
      />
      <div className="a-quantity-input__controls">
        <button
          type="button"
          className="a-quantity-input__btn a-quantity-input__btn--up"
          onClick={handleIncrement}
          aria-label="Increase quantity"
        >
          ▲
        </button>
        <button
          type="button"
          className="a-quantity-input__btn a-quantity-input__btn--down"
          onClick={handleDecrement}
          aria-label="Decrease quantity"
        >
          ▼
        </button>
      </div>
    </div>
  );
};
