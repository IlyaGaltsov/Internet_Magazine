import { Link } from 'react-router-dom';
import { socialIcons, footerItems, paymentsIcons } from '../../constants/footer';
import Subscribe from '../subscribe/Subscribe';

import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <Subscribe />
        <div className="footer_container ">
          <div>
            <h2 className="footer_title">Shop.co</h2>
            <span className="footer_description">
              We have clothes that suits your style and which you&apos;re proud to wear. From women
              to men.
            </span>
            <div className="footer_social-icons">
              {socialIcons.map((icon) => (
                <div className="icon-wrapper icon-wrapper-social" key={icon.id}>
                  <img src={icon.image} alt={icon.name} />
                </div>
              ))}
            </div>
          </div>

          {footerItems.map((footerItem) => (
            <div key={footerItem.id}>
              <h3 className="footer_item-title">{footerItem.title}</h3>
              <ul>
                {footerItem.items.map((item) => (
                  <li className="footer_item-link" key={item.id}>
                    <Link to={item.link}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="footer_bottom">
          <span className="footer_bottom-title">Shop.co © 2000-2023, All Rights Reserved</span>
          <div className="footer_bottom-payments">
            {paymentsIcons.map((icon) => (
              <div className="icon-wrapper icon-wrapper-payments" key={icon.id}>
                <img src={icon.image} alt={icon.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
