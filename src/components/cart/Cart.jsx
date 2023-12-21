import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../../slices/cartSlice';
import CartTitle from '../cartTitle/CartTitle';
import CartItem from '../cartItem/CartItem';
import OrderSummary from '../orderSummary/OrderSummary';

import './Cart.css';

function Cart() {
  const products = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleQuantityChange = (id, quantity) => {
    dispatch(updateQuantity({ itemId: id, quantity }));
  };

  return (
    <div>
      <CartTitle />
      <div className="cart-container">
        <div className="products-container">
          {products.map((product) => (
            <CartItem
              key={product.itemId}
              id={product.itemId}
              name={product.itemTitle}
              image={product.itemThumb}
              size={product.itemSize}
              color={product.itemColor}
              price={product.itemPrice}
              quantity={product.itemQuantity}
              onQuantityChange={handleQuantityChange}
              onDelete={handleDelete}
            />
          ))}
        </div>
        <OrderSummary products={products} />
      </div>
    </div>
  );
}

export default Cart;
