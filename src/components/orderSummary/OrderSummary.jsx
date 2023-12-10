import { useState } from 'react';
import PropTypes from 'prop-types';
import './OrderSummary.css';

import promoCodeSvg from '../../assets/images/cart-images/promocode.svg';
import checkoutSvg from '../../assets/images/cart-images/checkout.svg';

function OrderSummary({ products }) {
  const [promoCode, setPromoCode] = useState('');
  const [discountApplied, setDiscountApplied] = useState(false);
  const [promoCodeError, setPromoCodeError] = useState('');

  const subtotal = products.reduce((acc, product) => acc + product.price * product.quantity, 0);
  const discount = discountApplied ? subtotal * 0.2 : 0;
  const deliveryFee = 15;
  const total = subtotal - discount + deliveryFee;

  const handlePromoCodeChange = (e) => {
    setPromoCode(e.target.value);
    setPromoCodeError('');
  };

  const handleApplyPromoCode = () => {
    const promoCodeRegex = /^[\p{L}\s-]+$/u;

    if (!promoCodeRegex.test(promoCode.trim())) {
      setPromoCodeError('Invalid promo code. Please use only letters, spaces, hyphens.');
      return;
    }

    setDiscountApplied(true);
  };

  return (
    <div className="order-summary-container">
      <h2>Order Summary</h2>
      <div className="order-summary-details">
        <div>
          <span>Subtotal:</span>
          <span className="price-bold">${subtotal.toFixed(2)}</span>
        </div>
        <div>
          <span>Discount (-20%):</span>
          <span className={`price-bold ${discountApplied ? 'discount-applied' : ''}`}>
            ${discount.toFixed(2)}
          </span>
        </div>
        <div>
          <span>Delivery Fee:</span>
          <span className="price-bold">${deliveryFee.toFixed(2)}</span>
        </div>
        <div className="total">
          <span>Total:</span>
          <span className="total-bold">${total.toFixed(2)}</span>
        </div>
        <div className="promo-code">
          <div className="promo-code-input-container">
            <img src={promoCodeSvg} alt="promocode" className="promo-code-icon" />
            <input
              type="text"
              placeholder="Add promo code"
              value={promoCode}
              onChange={handlePromoCodeChange}
              className={`promo-code-input ${promoCodeError ? 'promo-code-error' : ''}`}
            />
          </div>
          {promoCodeError && <p className="promo-code-error-message">{promoCodeError}</p>}
          <button type="button" onClick={handleApplyPromoCode}>
            Apply
          </button>
        </div>
      </div>
      <button type="button" className="go-to-checkout-button">
        Go to Checkout
        <img src={checkoutSvg} alt="Go to Checkout" />
      </button>
    </div>
  );
}

OrderSummary.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      size: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default OrderSummary;
