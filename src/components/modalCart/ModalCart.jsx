import PropTypes from 'prop-types';
import './ModalCart.css';

function ModalCart({ isOpen, onClose, onConfirm }) {
  return (
    isOpen && (
      <div className="modal">
        <div className="modal-content">
          <p>Are you sure you want to delete this item from the cart?</p>
          <button type="button" onClick={onConfirm}>
            Yes
          </button>
          <button type="button" onClick={onClose}>
            No
          </button>
        </div>
      </div>
    )
  );
}

ModalCart.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
};

export default ModalCart;
