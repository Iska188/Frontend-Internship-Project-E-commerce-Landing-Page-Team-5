import { useState, useMemo, useRef, useEffect } from 'react';
import { Input, Button, Text } from '../../atoms';
import { TRANSLATIONS } from '../../../constants/translations';
import { POPULAR_PRODUCTS_MOCK } from '../../../mocks/popularProductsMocks';
import './searchBar.css';

export const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const results = useMemo(() => {
    if (query.trim().length === 0) {
      return [];
    }
    return POPULAR_PRODUCTS_MOCK.filter((product) =>
      product.title.toLowerCase().includes(query.trim().toLowerCase())
    );
  }, [query]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="m-search-bar-wrapper" ref={wrapperRef}>
      <div className="m-search-bar">
        <Input
          type="text"
          placeholder={TRANSLATIONS.searchBar.placeholder}
          className="m-search-bar__input-override"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
        />
        <Button variant="primary" className="m-search-bar__button-override">
          {TRANSLATIONS.searchBar.buttonText}
        </Button>
      </div>

      {isOpen && results.length > 0 && (
        <ul className="m-search-bar__dropdown">
          {results.map((product) => (
            <li key={product.id} className="m-search-bar__result">
              <img src={product.imageSrc} alt={product.title} className="m-search-bar__result-img" />
                <Text variant="category" as="span" className="m-search-bar__result-title">
                  {product.title}
                </Text>
              <Text variant="price-current" as="span" className="m-search-bar__result-price">
          {product.price}
          </Text>
          </li>
          ))}
        </ul>
      )}

      {isOpen && query.trim().length > 0 && results.length === 0 && (
        <div className="m-search-bar__no-results">
          <Text variant="category" as="span">
            {TRANSLATIONS.searchBar.noResults}
          </Text>
        </div>
      )}
    </div>
  );
};