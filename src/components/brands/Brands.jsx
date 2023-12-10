import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './Brands.css';

function Brands({ title, brands, theme }) {
  return (
    <section className={`${theme} brands`}>
      <div className="container">
        {title && <h2 className="brands_title">{title}</h2>}
        <div className="brands_content">
          {brands.map((brand) => (
            <Link key={brand.id} className="brand-logo" to={`/products?brand=${brand.slug}`}>
              <img src={`/assets/images/brands/${brand.slug}.svg`} alt={brand.name} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

Brands.propTypes = {
  theme: PropTypes.string,
  title: PropTypes.string,
  brands: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      brandname: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

Brands.defaultProps = {
  title: null,
  theme: 'light',
};

export default Brands;
