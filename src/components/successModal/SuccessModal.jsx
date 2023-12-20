import PropTypes from 'prop-types';
import './SuccessModal.css';
import { useDispatch } from 'react-redux';
import { clearCart } from '../../slices/cartSlice';

function SuccessModal({ onClose }) {
  const dispatch = useDispatch();

  const handleModalClose = () => {
    // Інша логіка для закриття модального вікна
    dispatch(clearCart()); // Очищення корзини при закритті модального вікна
    onClose(); // Викликати колбек для закриття модального вікна
  };

  return (
    <div className="success-modal">
      <p>Order successfully placed!</p>
      <button type="button" onClick={handleModalClose}>
        Close
      </button>
    </div>
  );
}

SuccessModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default SuccessModal;
