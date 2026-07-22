// @ts-ignore
import { Input } from '../../atoms/input/input';
// @ts-ignore
import { Button } from '../../atoms/button/button';
// @ts-ignore
import './search-bar.css';

export const SearchBar = () => {
  return (
    <div className="m-search-bar">
      <Input 
        type="text" 
        placeholder="Search for products..."  
        className="m-search-bar__input-override" 
      />
      <Button variant="primary" className="m-search-bar__button-override">
        Search
      </Button>
    </div>
  );
};