import { FeatureCard } from '../../molecules/featureCard/featureCard';
import { FEATURES_DATA } from '../../../mocks/mockedFeatures';
import './featureSection.css';

export const FeatureSection = () => {
  return (
    <section className="o-features">
      <div className="featurecontainer">
        <div className="featurecontainer__grid">
          {FEATURES_DATA.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};