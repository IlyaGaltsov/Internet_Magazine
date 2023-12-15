import { useState } from 'react';
import PropTypes from 'prop-types';
import ModalCart from '../modalCart/ModalCart';
import './DeleteButton.css';

import deleteIcon from '../../assets/images/cart-images/delete-button.svg';

function DeleteButton({ onClick }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleDelete = () => {
    onClick();
    closeModal();
  };

  return (
    <div>
      <button type="button" className="delete-button" onClick={openModal}>
        <img src={deleteIcon} alt="Delete" />
      </button>

      <ModalCart isOpen={isModalOpen} onClose={closeModal} onConfirm={handleDelete} />
    </div>
  );
}

DeleteButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default DeleteButton;
