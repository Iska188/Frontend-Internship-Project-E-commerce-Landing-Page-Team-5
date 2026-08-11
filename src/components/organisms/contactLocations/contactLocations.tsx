import React from 'react';
import { InfoColumn } from '../../molecules';
import { TRANSLATIONS } from '../../../constants/translations';
import './contactLocations.css';

interface LocationItem {
  title: string;
  address: string;
  phone: string;
  email: string;
}

interface ContactLocationsProps {
  locations?: LocationItem[];
}

const DEFAULT_LOCATIONS: LocationItem[] = [
  {
    title: TRANSLATIONS.contactPage.office,
    address: TRANSLATIONS.contactPage.adress,
    phone: TRANSLATIONS.contactPage.number,
    email: TRANSLATIONS.contactPage.email
  },
  {
    title: TRANSLATIONS.contactPage.studio,
    address: TRANSLATIONS.contactPage.adress,
    phone: TRANSLATIONS.contactPage.number,
    email: TRANSLATIONS.contactPage.email
  },
  {
    title: TRANSLATIONS.contactPage.studio,
    address: TRANSLATIONS.contactPage.adress,
    phone: TRANSLATIONS.contactPage.number,
    email: TRANSLATIONS.contactPage.email
  }
];

export const ContactLocations: React.FC<ContactLocationsProps> = ({ 
  locations = DEFAULT_LOCATIONS 
}) => {
  return (
    <section className="o-contact-locations">
      <div className="o-contact-locations__container">
        {locations.map((loc, index) => (
          <InfoColumn
            key={index}
            variant="location"
            title={loc.title}
            address={loc.address}
            phone={loc.phone}
            email={loc.email}
            buttonText="View map"
          />
        ))}
      </div>
    </section>
  );
};