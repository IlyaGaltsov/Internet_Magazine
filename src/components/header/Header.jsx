import { NavLink } from 'react-router-dom';
import Search from '../search/Search';
import CartSvg from '../../assets/images/icons/cart.svg';
import { useCart } from '../cartContext/CartContext';
import './Header.css';

function Header() {
  const { getTotalItems } = useCart();
  return (
    <header className="header">
      <div className="container">
        <div className="header_row">
          <div className="header_logo">
            <NavLink to="/">SHOP.CO</NavLink>
          </div>
          <nav className="header_nav">
            <div className="header_nav-main">
              <ul>
                <li>
                  <NavLink to="/products?isSale=true">On Sale</NavLink>
                </li>
                <li>
                  <NavLink to="/products?isNew=true">New Arrivals</NavLink>
                </li>
                <li>
                  <NavLink to="/brands">Brands</NavLink>
                </li>
              </ul>
            </div>
            <Search />
            <div className="header_nav-profile">
              <ul>
                <li>
                  <div className="cart-icon">
                    <NavLink to="/cart">
                      <span className="cart-count">{getTotalItems()}</span>
                      <img src={CartSvg} alt="Cart" />
                    </NavLink>
                  </div>
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
