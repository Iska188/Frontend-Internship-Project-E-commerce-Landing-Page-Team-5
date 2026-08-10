import { StatColumn } from '../../molecules/index';
import { TRANSLATIONS } from '../../../constants/translations';
import statsBackground from '../../../assets/about/statBanner/background.png';
import './statsBanner.css';

const STATS_DATA = [
  { value: '0+', label: TRANSLATIONS.statsBanner.glorousYears },
  { value: '0+', label: TRANSLATIONS.statsBanner.happyClients },
  { value: '0+', label: TRANSLATIONS.statsBanner.projectsComplete },
  { value: '0+', label: TRANSLATIONS.statsBanner.teamAdvisor },
  { value: '0+', label: TRANSLATIONS.statsBanner.productsSale },
];

export const StatsBanner = () => {
  return (
    <section className="o-stats-banner">
      <div className="o-stats-banner__container">
        <div
          className="o-stats-banner__panel"
          style={{ backgroundImage: `url(${statsBackground})` }}
        >
          <div className="o-stats-banner__overlay" />
          <div className="o-stats-banner__grid">
            {STATS_DATA.map((stat) => (
              <StatColumn key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};