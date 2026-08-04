import { Text } from '../../atoms/text/text';
import { DealCard } from '../../molecules/dealsCard/DealCard';
import { DEALS_DATA } from '../../../mocks/mockedDeals';
import { TRANSLATIONS } from '../../../constants/translations';
import './DealsSection.css';

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