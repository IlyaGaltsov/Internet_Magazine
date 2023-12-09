import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import Rating from '../rating/Rating';
import './ProductItem.css';

function ProductItem({ product }) {
  return (
    <Link to={`/product/${product.id}`} key={product.title} className="product">
      <div className="image-wrapper">
        <img
          src={`/assets/images/products/${product.thumb}.png`}
          alt={product.title}
          className="product_image"
        />
      </div>
      <h3 className="product_name">{product.title}</h3>
      <Rating rating={product.rating} />
      <div className="product_price">
        {product.discountedPrice ? (
          <>
            <span className="price">${product.discountedPrice}</span>
            <span className="price discounted">${product.price}</span>
            <span className="discount">
              -{(((product.price - product.discountedPrice) / product.price) * 100).toFixed(0)}%
            </span>
          </>
        ) : (
          <span className="price">${product.price}</span>
        )}
      </div>
    </Link>
  );
}

ProductItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    thumb: PropTypes.string,
    price: PropTypes.number.isRequired,
    discountedPrice: PropTypes.number,
    discount: PropTypes.number,
    rating: PropTypes.number.isRequired,
    images: PropTypes.arrayOf(PropTypes.string),
    colors: PropTypes.arrayOf(PropTypes.string),
    sizes: PropTypes.arrayOf(PropTypes.string),
    count: PropTypes.number,
    isNew: PropTypes.bool,
    isSale: PropTypes.bool,
  }).isRequired,
};

export default ProductItem;
