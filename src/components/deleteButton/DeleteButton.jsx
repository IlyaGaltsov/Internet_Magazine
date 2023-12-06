import PropTypes from 'prop-types';
import './DeleteButton.css';

import deleteIcon from '../../assets/images/cart-images/delete-button.svg';

function DeleteButton({ onClick }) {
  return (
    <button type="button" className="delete-button" onClick={onClick}>
      <img src={deleteIcon} alt="Delete" />
    </button>
  );
}

DeleteButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default DeleteButton;
