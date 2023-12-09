import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import SearchImg from '../../../assets/images/icons/search.svg';

import { useGetSearchProductsQuery } from '../../../slices/productsApiSlice';

import './SearchInput.css';

function SearchInput({ setResults, inputValue, setInputValue }) {
  const [debouncedValue, setDebouncedValue] = useState('');
  const { data: results } = useGetSearchProductsQuery(debouncedValue, {
    skip: !debouncedValue || debouncedValue.length < 3,
  });

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedValue(inputValue);
    }, 450);

    return () => clearTimeout(timerId);
  }, [inputValue]);

  useEffect(() => {
    if (results) {
      setResults(results);
    }
  }, [results, setResults]);

  const handleChange = (value) => {
    setInputValue(value);
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
