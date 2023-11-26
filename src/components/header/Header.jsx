import { Link } from 'react-router-dom';

import CartSvg from '../../assets/images/icons/cart.svg';
import ProfileSvg from '../../assets/images/icons/profile.svg';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header_row">
          <div className="header_logo">
            <Link to="/">SHOP.CO</Link>
          </div>
          <nav className="header_nav">
            <div className="header_nav-main">
              <ul>
                <li>
                  <select>
                    <option value="">Shop</option>
                    <option value="men">Men</option>
                    <option value="women">Women</option>
                  </select>
                </li>
                <li>
                  <Link to="/">On Sale</Link>
                </li>
                <li>
                  <Link to="/">New Arrivals</Link>
                </li>
                <li>
                  <Link to="/">Brands</Link>
                </li>
              </ul>
            </div>
            <div className="header_nav-profile">
              <ul>
                <li>
                  <Link to="/">
                    <img src={CartSvg} alt="Cart" />
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <img src={ProfileSvg} alt="Profile" />
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
