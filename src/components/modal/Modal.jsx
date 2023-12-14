import PropTypes from 'prop-types';
import './Modal.css';

function Modal({ isOpen, onConfirm, children }) {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop">
      <div className="subscribe-modal">
        {children}
        <div className="subscribe-modal-actions">
          <button type="button" onClick={onConfirm}>
            Ок
          </button>
        </div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onConfirm: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
