import { useState, useEffect, useRef } from 'react';
import SearchInput from './search-input/SearchInput';
import SearchResult from './search-result/SearchResult';
import './Search.css';

function Search() {
  const [products, setProducts] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [showResults, setShowResults] = useState(false);
  const wrapperRef = useRef(null);

  const handleClickOutside = (event) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setShowResults(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSearch = (results) => {
    if (inputValue) {
      setProducts(results);
      setShowResults(results.length > 0);
    }
  };

  const handleResultSelect = () => {
    setShowResults(false);
    setInputValue('');
  };

  return (
    <div className="search_container" ref={wrapperRef}>
      <SearchInput
        setResults={handleSearch}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
      {showResults && <SearchResult products={products} onResultSelect={handleResultSelect} />}
    </div>
  );
}

export default Search;
