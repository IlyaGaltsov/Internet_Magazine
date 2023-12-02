import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './SearchResult.css';

function SearchResult({ products, onResultSelect }) {
  return (
    <div className="search_result">
      {products.map((product) => (
        <Link
          className="search_result-item"
          to={`/product/${product.id}`}
          key={product.id}
          onClick={onResultSelect}
        >
          {product.title}
        </Link>
      ))}
    </div>
  );
}

SearchResult.propTypes = {
  onResultSelect: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      thumb: PropTypes.string,
      price: PropTypes.number.isRequired,
      originalPrice: PropTypes.number,
      discount: PropTypes.number,
      rating: PropTypes.number.isRequired,
      images: PropTypes.arrayOf(PropTypes.string),
      colors: PropTypes.arrayOf(PropTypes.string),
      sizes: PropTypes.arrayOf(PropTypes.string),
      count: PropTypes.number,
      isNew: PropTypes.bool,
    }),
  ).isRequired,
};

export default SearchResult;
