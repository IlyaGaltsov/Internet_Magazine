import PropTypes from 'prop-types';
import { products } from '../../../data/products';
import SearchImg from '../../../assets/images/icons/search.svg';
import './SearchInput.css';

function SearchInput({ setResults, inputValue, setInputValue }) {
  const filterData = (value) => {
    const results = products.filter(
      (product) => value && product?.title.toLowerCase().includes(value.toLowerCase()),
    );
    setResults(results);
  };

  const handleChange = (value) => {
    setInputValue(value);
    filterData(value);
  };

  return (
    <div className="search_form">
      <div className="search_icon">
        <img src={SearchImg} alt="search" />
      </div>
      <input
        type="text"
        value={inputValue}
        className="form_control"
        placeholder="Search for products..."
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
}

SearchInput.propTypes = {
  setResults: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
  setInputValue: PropTypes.func.isRequired,
};

export default SearchInput;
