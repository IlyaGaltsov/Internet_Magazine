import PropTypes from 'prop-types';
import './SuccessModal.css';

function SuccessModal({ onClose }) {
  return (
    <div className="success-modal">
      <p>Order successfully placed!</p>
      <button type="button" onClick={onClose}>
        Close
      </button>
    </div>
  );
}

SuccessModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default SuccessModal;
