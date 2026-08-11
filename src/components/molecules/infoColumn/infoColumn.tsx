import React from 'react';
import { Text, Button } from '../../atoms';
import MapPin from '../../../assets/contact/location.svg';
import './infoColumn.css';

interface InfoColumnProps {
  title: string;
  description?: string;
  address?: string;
  phone?: string;
  email?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  variant?: 'default' | 'location';
}

export const InfoColumn: React.FC<InfoColumnProps> = ({
  title,
  description,
  address,
  phone,
  email,
  buttonText,
  onButtonClick,
  variant = 'default',
}) => {
  if (variant === 'location') {
    return (
      <div className="m-info-column m-info-column--location">
        <Text variant="help-feature-title-green" as="h3" className="m-info-column__title">
          {title}
        </Text>

        <div className="m-info-column__details">
          {address && <p className="m-info-column__address">{address}</p>}
          {phone && (
            <p className="m-info-column__meta">
              <span className="m-info-column__label">Phone:</span> {phone}
            </p>
          )}
          {email && (
            <p className="m-info-column__meta">
              <span className="m-info-column__label">Email:</span> {email}
            </p>
          )}
        </div>

        {buttonText && (
          <Button variant="primary" className="m-info-column__btn" onClick={onButtonClick}>
            <img 
                src={MapPin}
                alt="Location Pin" 
                className="m-info-column__btn-icon" 
            />
            <span>{buttonText}</span>
          </Button>
        )}
      </div>
    );
  }

  return (
    <div className="m-info-column">
      <Text variant="prod-title" as="h3">
        {title}
      </Text>
      {description && (
        <Text variant="welcome-body" as="p">
          {description}
        </Text>
      )}
    </div>
  );
};