import PropTypes from 'prop-types';

import Counter from '../counter/Counter';
import DeleteButton from '../deleteButton/DeleteButton';

import './CartItem.css';

function CartItem({ id, name, image, size, color, price, quantity, onQuantityChange, onDelete }) {
  return (
    <div className="cart-item">
      <img src={image} alt={`Product ${id}`} className="cart-item-image" />
      <div className="cart-item-info column-align">
        <p className="name">{name}</p>
        <p>Size: {size}</p>
        <p>Color: {color}</p>
        <p className="price">${price}</p>
        <Counter
          quantity={quantity}
          onIncrement={() => onQuantityChange(id, quantity + 1)}
          onDecrement={() => onQuantityChange(id, quantity - 1)}
        />
        <DeleteButton onClick={() => onDelete(id)} />
      </div>
    </div>
  );
}

CartItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  onQuantityChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default CartItem;
