import React from 'react';
import { Text } from '../../atoms';
import './helpItem.css';

interface HelpItemProps {
  title: string;
  description: string;
  isGreen?: boolean;
}

export const HelpItem: React.FC<HelpItemProps> = ({ title, description, isGreen = false }) => {
  return (
    <div className="m-help-item">
      <Text 
        variant={isGreen ? 'help-feature-title-green' : 'help-feature-title'} 
        as="h4"
      >
        {title}
      </Text>
      <Text variant="help-desc" as="p">
        {description}
      </Text>
    </div>
  );
};