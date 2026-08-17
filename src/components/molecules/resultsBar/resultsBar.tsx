import { Text } from '../../atoms';
import './resultsBar.css';

export type SortOption = 'featured' | 'price-low' | 'price-high' | 'newest';

interface ResultsBarProps {
  itemCount: number;
  view: 'grid' | 'list';
  onViewChange: (view: 'grid' | 'list') => void;
  showCount: number;
  onShowCountChange: (count: number) => void;
  sortBy: SortOption;
  onSortChange: (sort: SortOption) => void;
}

export const ResultsBar = ({
  itemCount,
  view,
  onViewChange,
  showCount,
  onShowCountChange,
  sortBy,
  onSortChange,
}: ResultsBarProps) => {
  return (
    <div className="m-results-bar">
      <Text variant="category" as="span" className="m-results-bar__count">
        We found <span className="m-results-bar__count-number">{itemCount}</span> items for you!
      </Text>

      <div className="m-results-bar__controls">
        <div className="m-results-bar__view-toggle">
          <button
            type="button"
            className={`m-results-bar__view-btn ${view === 'grid' ? 'is-active' : ''}`}
            onClick={() => onViewChange('grid')}
            aria-label="Grid view"
            aria-pressed={view === 'grid'}
          >
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="7" height="7" rx="1" />
              <rect x="14" y="3" width="7" height="7" rx="1" />
              <rect x="3" y="14" width="7" height="7" rx="1" />
              <rect x="14" y="14" width="7" height="7" rx="1" />
            </svg>
          </button>

          <button
            type="button"
            className={`m-results-bar__view-btn ${view === 'list' ? 'is-active' : ''}`}
            onClick={() => onViewChange('list')}
            aria-label="List view"
            aria-pressed={view === 'list'}
          >
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>

        <select
          className="m-results-bar__dropdown"
          value={showCount}
          onChange={(e) => onShowCountChange(Number(e.target.value))}
          aria-label="Items per page"
        >
          <option value={5}>Show: 5</option>
          <option value={10}>Show: 10</option>
          <option value={20}>Show: 20</option>
          <option value={50}>Show: 50</option>
        </select>

        <select
          className="m-results-bar__dropdown"
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value as SortOption)}
          aria-label="Sort by"
        >
          <option value="featured">Sort by: Featured</option>
          <option value="price-low">Sort by: Price low to high</option>
          <option value="price-high">Sort by: Price high to low</option>
          <option value="newest">Sort by: Newest</option>
        </select>
      </div>
    </div>
  );
};