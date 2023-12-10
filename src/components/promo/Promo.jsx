import { Link } from 'react-router-dom';
import PromoImg from '../../assets/images/banners/banner1.png';
import './Promo.css';

function Promo() {
  return (
    <section className="promo" style={{ backgroundImage: `url(${PromoImg})` }}>
      <div className="container">
        <div className="promo_content">
          <div className="promo_text">
            <div className="promo_title">FIND CLOTHES THAT MATCHES YOUR STYLE </div>
            <div className="promo_desc">
              Browse through our diverse range of meticulously crafted garments, designed to bring
              out your individuality and cater to your sense of style.
            </div>
            <div className="promo_btn-wrapper">
              <Link to="/products" className="promo_btn">
                Shop Now
              </Link>
            </div>
            <div className="promo_list-wrapper">
              <ul className="promo_list">
                <li className="promo_list-item">
                  200+
                  <p>International Brands</p>
                </li>
                <li className="promo_list-item">
                  2,000+
                  <p>High-Quality Products</p>
                </li>
                <li className="promo_list-item">
                  30,000+
                  <p>Happy Customers</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Promo;
