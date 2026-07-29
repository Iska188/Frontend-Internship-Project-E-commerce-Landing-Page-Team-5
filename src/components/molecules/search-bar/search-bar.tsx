import { Input, Button } from '../../atoms';
import { TRANSLATIONS } from '../../../constants/translations';
import './search-bar.css';

export const SearchBar = () => {
  return (
    <div className="m-search-bar">
      <Input 
        type="text" 
        placeholder={TRANSLATIONS.searchBar.placeholder}  
        className="m-search-bar__input-override" 
      />
      <Button variant="primary" className="m-search-bar__button-override">
        {TRANSLATIONS.searchBar.buttonText}
      </Button>
    </div>
  );
};