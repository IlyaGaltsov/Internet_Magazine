import { useState } from 'react';
import { arrayOf, func, string } from 'prop-types';
import './ProductSizes.css';

function ProductSizes({ sizes, onSizeFunc }) {
  const [selectedSize, setSelectedSize] = useState(0);

  const handleSizeClick = (size, index) => {
    onSizeFunc(size);
    setSelectedSize(index);
  };

  return (
    <div>
      <p>Choose Size</p>
      {sizes.map((size, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <input
          type="button"
          key={index}
          value={size}
          onClick={() => {
            handleSizeClick(size, index);
          }}
          className={`size-btn ${index === selectedSize ? 'active' : ''}`}
        />
      ))}
    </div>
  );
}

ProductSizes.propTypes = {
  sizes: arrayOf(string).isRequired,
  onSizeFunc: func.isRequired,
};

export default ProductSizes;
