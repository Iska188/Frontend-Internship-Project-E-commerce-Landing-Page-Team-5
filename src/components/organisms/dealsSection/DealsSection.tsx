import { Text } from '../../atoms/text/text'; 
import { DealCard } from '../../molecules/dealsCard/DealCard';
import { TRANSLATIONS } from '../../../constants/translations';
import './DealsSection.css';

const DEALS_DATA = [
  {
    imageSrc: 'src/assets/deals/OrganicCage.png',
    title: TRANSLATIONS.deals.card1.title,
    vendor: TRANSLATIONS.deals.card1.vendor,
    currentPrice: '$21.00',
    originalPrice: '$24.00',
    countdown: { days: '00', hours: '12', mins: '30', secs: '00' },
  },
  {
    imageSrc: 'src/assets/deals/NaturallyFlavored.png',
    title: TRANSLATIONS.deals.card2.title,
    vendor: TRANSLATIONS.deals.card2.vendor,
    currentPrice: '$51.00',
    originalPrice: '$55.00',
    countdown: { days: '02', hours: '00', mins: '00', secs: '00' },
  },
  {
    imageSrc: 'src/assets/deals/Seeds.png',
    title: TRANSLATIONS.deals.card3.title,
    vendor: TRANSLATIONS.deals.card3.vendor,
    currentPrice: '$61.00',
    originalPrice: '$66.00',
    countdown: { days: '02', hours: '00', mins: '00', secs: '00' },
  },
  {
    imageSrc: 'src/assets/deals/DriedFruit.png',
    title: TRANSLATIONS.deals.card4.title,
    vendor: TRANSLATIONS.deals.card4.vendor,
    currentPrice: '$56.00',
    originalPrice: '$76.00',
    countdown: { days: '02', hours: '00', mins: '00', secs: '00' },
  },
];

export const DealsSection = () => {
  return (
    <section className="o-deals">
      <div className="dealcontainer">
        <Text as="h2" variant="sec-title">
        {TRANSLATIONS.deals.bigtitle}
        </Text>

        <div className="dealcontainer__grid">
          {DEALS_DATA.map((deal) => (
            <DealCard key={deal.title} {...deal} />
          ))}
        </div>
      </div>
    </section>
  );
};