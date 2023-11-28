import { func } from 'prop-types';
import './ProductAddToCart.css';

function ProductAddToCart({ onAddToCartFunc }) {
  const handleAddToCard = () => {
    onAddToCartFunc();
  };

  return (
    <input type="button" value="Add to Cart" onClick={handleAddToCard} className="product-atc" />
  );
}

ProductAddToCart.propTypes = {
  onAddToCartFunc: func.isRequired,
};

export default ProductAddToCart;
