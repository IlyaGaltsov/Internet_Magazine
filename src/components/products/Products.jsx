import PropTypes from 'prop-types';

import './Products.css';
import ProductItem from '../product-item/ProductItem';

function Products({ title, products }) {
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
          <div className="view-all-button">
            <button type="button">View All</button>
          </div>
        </div>
      </div>
    </section>
  );
}

Products.propTypes = {
  title: PropTypes.string.isRequired,
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

export default Products;
