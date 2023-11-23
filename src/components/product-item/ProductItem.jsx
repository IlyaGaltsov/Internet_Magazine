import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfStroke } from '@fortawesome/free-regular-svg-icons';
// import { faStar } from '@fortawesome/free-solid-svg-icons';

import './ProductItem.css';

function ProductItem({ product }) {
  const renderStars = (rating, productName) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    return (
      <>
        {Array.from({ length: fullStars }, (_, i) => (
          <FontAwesomeIcon key={`${productName}-full-${i}`} icon={faStar} className="full" />
        ))}
        {halfStar && (
          <FontAwesomeIcon key={`${productName}-half`} icon={faStarHalfStroke} className="half" />
        )}
        {Array.from({ length: emptyStars }, (_, i) => (
          <FontAwesomeIcon key={`${productName}-empty-${i}`} icon={faStar} className="empty" />
        ))}
      </>
    );
  };

  return (
    <div key={product.name} className="product">
      <div className="image-wrapper">
        <img src={product.url} alt={product.name} className="product_image" />
      </div>

      <h3 className="product_name">{product.name}</h3>
      <div className="product_rating">
        {renderStars(product.rating, product.name)}
        <span className="rating-number">({product.rating} / 5)</span>
      </div>
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
    </div>
  );
}

ProductItem.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    originalPrice: PropTypes.string,
    rating: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductItem;
