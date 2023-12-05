import { useState } from 'react';
import PropTypes from 'prop-types';
import './OrderSummary.css';

function OrderSummary({ products }) {
  const [promoCode, setPromoCode] = useState('');
  const [discountApplied, setDiscountApplied] = useState(false);

  const subtotal = products.reduce((acc, product) => acc + product.price * product.quantity, 0);
  const discount = discountApplied ? subtotal * 0.2 : 0;
  const deliveryFee = 15;
  const total = subtotal - discount + deliveryFee;

  const handlePromoCodeChange = (e) => {
    setPromoCode(e.target.value);
  };

  const handleApplyPromoCode = () => {
    setDiscountApplied(true);
  };

  return (
    <div className="order-summary-container">
      <h2>Order Summary</h2>
      <div className="order-summary-details">
        <div>
          <span>Subtotal:</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div>
          <span>Discount (-20%):</span>
          <span>${discount.toFixed(2)}</span>
        </div>
        <div>
          <span>Delivery Fee:</span>
          <span>${deliveryFee.toFixed(2)}</span>
        </div>
        <div className="total">
          <span>Total:</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <div className="promo-code">
          <input
            type="text"
            placeholder="Add promo code"
            value={promoCode}
            onChange={handlePromoCodeChange}
          />
          <button type="button" onClick={handleApplyPromoCode}>
            Apply
          </button>
        </div>
      </div>
      <button type="button" className="go-to-checkout-button">
        Go to Checkout
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
