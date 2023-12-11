import { func } from 'prop-types';
import './ProductAddToCart.css';
import { useState } from 'react';

function ProductAddToCart({ onAddToCartFunc }) {
  const [buttonState, setButtonState] = useState({
    style: 'product-atc',
    text: 'Add to Cart',
  });
  const handleAddToCard = () => {
    setButtonState({ style: 'product-atc active', text: 'Item is Added' });

    onAddToCartFunc();

    setTimeout(() => {
      setButtonState({ style: 'product-atc', text: 'Add to Cart' });
    }, 3000);
  };

  return (
    <input
      type="button"
      value={buttonState.text}
      onClick={handleAddToCard}
      className={buttonState.style}
    />
  );
}

ProductAddToCart.propTypes = {
  onAddToCartFunc: func.isRequired,
};

export default ProductAddToCart;
