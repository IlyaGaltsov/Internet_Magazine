import { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { clearCart } from '../../slices/cartSlice';
import CheckoutForm from '../checkoutForm/CheckoutForm';
import './OrderSummary.css';

import promoCodeSvg from '../../assets/images/cart-images/promocode.svg';
import checkoutSvg from '../../assets/images/cart-images/checkout.svg';

function OrderSummary({ products }) {
  const dispatch = useDispatch();
  const [promoCode, setPromoCode] = useState('');
  const [discountApplied, setDiscountApplied] = useState(false);
  const [promoCodeError, setPromoCodeError] = useState('');
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);

  const handleGoToCheckout = () => {
    setShowCheckoutForm(true);
  };

  const handleCheckoutSubmit = async (checkoutData, formikProps) => {
    try {
      if (formikProps.resetForm) {
        formikProps.resetForm();
      }
    } catch (error) {
      // Handle errors
    } finally {
      formikProps.setSubmitting(false);
      setShowCheckoutForm(false);
      dispatch(clearCart());
    }
  };

  const subtotal = products.reduce(
    (acc, product) => acc + product.itemPrice * product.itemQuantity,
    0,
  );
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
      {products.length > 0 ? (
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
      ) : (
        <p>No products in the order.</p>
      )}
      <button
        type="button"
        onClick={handleGoToCheckout}
        className="go-to-checkout-button"
        disabled={products.length === 0}
      >
        Go to Checkout
        <img src={checkoutSvg} alt="Go to Checkout" />
      </button>
      {showCheckoutForm && <CheckoutForm onSubmit={handleCheckoutSubmit} />}
    </div>
  );
}

OrderSummary.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      image: PropTypes.string,
      size: PropTypes.string,
      color: PropTypes.string,
      price: PropTypes.number,
      quantity: PropTypes.number,
    }),
  ).isRequired,
};

export default OrderSummary;
