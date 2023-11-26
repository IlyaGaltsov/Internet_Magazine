import { Link } from 'react-router-dom';

import CartSvg from '../../assets/images/icons/cart.svg';
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
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
