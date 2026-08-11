import React from 'react';
import { Text } from '../../atoms';
import { HelpItem } from '../../molecules';
import { TRANSLATIONS } from '../../../constants/translations';
import './contactHelp.css';

interface ContactHelpProps {
  eyebrow?: string;
  title?: string;
  descriptions?: string[];
  features?: {
    title: string;
    description: string;
    isGreen?: boolean;
  }[];
}

export const ContactHelp: React.FC<ContactHelpProps> = ({
  eyebrow = TRANSLATIONS.contactPage.eyebrow,
  title = TRANSLATIONS.contactPage.title,
  descriptions = [
    TRANSLATIONS.contactPage.description,
    TRANSLATIONS.contactPage.description
  ],
  features = [
    {
      title: TRANSLATIONS.contactPage.title1,
      description: TRANSLATIONS.contactPage.description
    },
    {
      title: TRANSLATIONS.contactPage.title2,
      description: TRANSLATIONS.contactPage.description
    },
    {
      title: TRANSLATIONS.contactPage.title3,
      description: TRANSLATIONS.contactPage.description,
      isGreen: true
    },
    {
      title: TRANSLATIONS.contactPage.title4,
      description: TRANSLATIONS.contactPage.description
    }
  ]
}) => {
  return (
    <section className="o-contact-help">
      <div className="o-contact-help__container">
        
        <div className="o-contact-help__left">
          <Text variant="help-eyebrow" as="span">{eyebrow}</Text>
          <Text variant="help-title" as="h2">{title}</Text>
          <div className="o-contact-help__left-desc">
            {descriptions.map((text, idx) => (
              <Text key={idx} variant="help-desc" as="p">
                {text}
              </Text>
            ))}
          </div>
        </div>

        <div className="o-contact-help__right">
          {features.map((item, idx) => (
            <HelpItem 
              key={idx}
              title={item.title}
              description={item.description}
              isGreen={item.isGreen}
            />
          ))}
        </div>

      </div>
    </section>
  );
};