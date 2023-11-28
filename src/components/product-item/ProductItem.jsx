import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Rating from '../rating/Rating';
import './ProductItem.css';

function ProductItem({ product }) {
  return (
    <Link to={`/product/${product.id}`} key={product.name} className="product">
      <div className="image-wrapper">
        <img src={product.img} alt={product.name} className="product_image" />
      </div>
      <h3 className="product_name">{product.name}</h3>
      <Rating rating={product.rating} />
      <div className="product_price">
        {product.originalPrice ? (
          <>
            <span className="price">{product.price}</span>
            <span className="price discounted">{product.originalPrice}</span>
          </>
        ) : (
          <span className="price">{product.price}</span>
        )}
      </div>
    </Link>
  );
}

ProductItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    originalPrice: PropTypes.string,
    rating: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductItem;
