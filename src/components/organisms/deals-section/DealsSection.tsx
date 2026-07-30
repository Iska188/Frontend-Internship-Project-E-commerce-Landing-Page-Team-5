import { Text } from '../../atoms/text/text'; 
import { DealCard } from '../../molecules/deals-card/DealCard';
import './DealsSection.css';

const DEALS_DATA = [
  {
    imageSrc: 'src/assets/deals/OrganicCage.png',
    title: 'Organic Cage Grade A Large Eggs',
    vendor: 'Hambger Hel',
    currentPrice: '$21.00',
    originalPrice: '$24.00',
    countdown: { days: '00', hours: '12', mins: '30', secs: '00' },
  },
  {
    imageSrc: 'src/assets/deals/NaturallyFlavored.png',
    title: 'Naturally Flavored Cinnamon Vanilla',
    vendor: 'Hambger Hel',
    currentPrice: '$51.00',
    originalPrice: '$55.00',
    countdown: { days: '02', hours: '00', mins: '00', secs: '00' },
  },
  {
    imageSrc: 'src/assets/deals/Seeds.png',
    title: 'Seeds of Change Organic Watermelon',
    vendor: 'Hambger Hel',
    currentPrice: '$61.00',
    originalPrice: '$66.00',
    countdown: { days: '02', hours: '00', mins: '00', secs: '00' },
  },
  {
    imageSrc: 'src/assets/deals/DriedFruit.png',
    title: 'Dried fruit: apricots, figs, prunes',
    vendor: 'Hambger Hel',
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
          Deals Of The Day
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