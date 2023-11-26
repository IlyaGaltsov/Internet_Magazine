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
      name: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      originalPrice: PropTypes.string,
      rating: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Products;
