import { Text } from '../../atoms';
import { ProvideCard } from '../../molecules/index';
import { TRANSLATIONS } from '../../../constants/translations';
import bestPricesIcon from '../../../assets/about/provideIcons/bestPrices.svg';
import wideAssortmentIcon from '../../../assets/about/provideIcons/wide.svg';
import freeDeliveryIcon from '../../../assets/about/provideIcons/freeDelivery.svg';
import easyReturnsIcon from '../../../assets/about/provideIcons/easyReturns.svg';
import satisfactionIcon from '../../../assets/about/provideIcons/satisfaction.svg';
import dailyDealIcon from '../../../assets/about/provideIcons/greatDeal.svg';
import './whatWeProvide.css';

const PROVIDE_DATA = [
  { icon: bestPricesIcon, title: TRANSLATIONS.whatWeProvide.items.bestPrices.title, description: TRANSLATIONS.whatWeProvide.items.bestPrices.description },
  { icon: wideAssortmentIcon, title: TRANSLATIONS.whatWeProvide.items.wideAssortment.title, description: TRANSLATIONS.whatWeProvide.items.wideAssortment.description },
  { icon: freeDeliveryIcon, title: TRANSLATIONS.whatWeProvide.items.freeDelivery.title, description: TRANSLATIONS.whatWeProvide.items.freeDelivery.description },
  { icon: easyReturnsIcon, title: TRANSLATIONS.whatWeProvide.items.easyReturns.title, description: TRANSLATIONS.whatWeProvide.items.easyReturns.description },
  { icon: satisfactionIcon, title: TRANSLATIONS.whatWeProvide.items.satisfaction.title, description: TRANSLATIONS.whatWeProvide.items.satisfaction.description },
  { icon: dailyDealIcon, title: TRANSLATIONS.whatWeProvide.items.dailyDeal.title, description: TRANSLATIONS.whatWeProvide.items.dailyDeal.description },
];

export const WhatWeProvide = () => {
  return (
    <section className="o-what-we-provide">
      <div className="o-what-we-provide__container">
        <div className="o-what-we-provide__header">
          <Text variant="sec-title" as="h2">
            {TRANSLATIONS.whatWeProvide.title}
          </Text>
          <span className="o-what-we-provide__squiggle" aria-hidden="true" />
        </div>

        <div className="o-what-we-provide__grid">
          {PROVIDE_DATA.map((item) => (
            <ProvideCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
              linkLabel={TRANSLATIONS.whatWeProvide.readMore}
            />
          ))}
        </div>
      </div>
    </section>
  );
};