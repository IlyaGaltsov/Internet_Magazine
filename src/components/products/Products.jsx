import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import ProductItem from '../product-item/ProductItem';

import './Products.css';

function Products({ title, products, link }) {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate(link);
  };

  return (
    <section className="products">
      <div className="container">
        <div className="products_content">
          <h2 className="products_title">{title}</h2>
          <div className="products_list">
            {products.map((product) => (
              <ProductItem product={product} key={product.id} />
            ))}
          </div>
          <div className="view-all-button_wrapper">
            {link && (
              <button type="button" className="view-all-button" onClick={handleButtonClick}>
                View All
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

Products.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string,
  products: PropTypes.arrayOf(
    PropTypes.shape({
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
    }),
  ).isRequired,
};

Products.defaultProps = {
  link: null,
};

export default Products;
