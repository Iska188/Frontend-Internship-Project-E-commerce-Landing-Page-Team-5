import { FeatureCard } from '../../molecules/feature-card/feature-card';
import './feature-section.css';

export const FeatureSection = () => {
  return (
    <section className="o-features">
      <div className="featurecontainer">
        
        <div className="featurecontainer__grid">
          
          <FeatureCard 
            iconSrc="src/assets/featureSection/price.svg"
            title="Best prices & offers"
            subtitle="Orders $50 or more"
          />
          
          <FeatureCard 
            iconSrc="src/assets/featureSection/delivery.svg"
            title="Free delivery"
            subtitle="24/7 amazing services"
          />
          
          <FeatureCard 
            iconSrc="src/assets/featureSection/deal.svg"
            title="Great daily deal"
            subtitle="When you sign up"
          />
          
          <FeatureCard 
            iconSrc="src/assets/featureSection/assortment.svg"
            title="Wide assortment"
            subtitle="Mega Discounts"
          />
          
          <FeatureCard 
            iconSrc="src/assets/featureSection/returns.svg"
            title="Easy returns"
            subtitle="Within 30 days"
          />

        </div>
      </div>
    </section>
  );
};