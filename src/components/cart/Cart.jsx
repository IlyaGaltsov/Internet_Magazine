import { useState } from 'react';
import CartTitle from '../cartTitle/CartTitle';
import CartItem from '../cartItem/CartItem';
import OrderSummary from '../orderSummary/OrderSummary';

import './Cart.css';

import cartImg1 from '../../assets/images/cart-images/cart_img1.png';
import cartImg2 from '../../assets/images/cart-images/cart_img2.png';
import cartImg3 from '../../assets/images/cart-images/cart_img3.png';

function Cart() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Gradient Graphic T-shirt',
      image: cartImg1,
      size: 'Large',
      color: 'White',
      price: 145,
      quantity: 1,
    },
    {
      id: 2,
      name: 'Checkered Shirt',
      image: cartImg2,
      size: 'Medium',
      color: 'Red',
      price: 180,
      quantity: 1,
    },
    {
      id: 3,
      name: 'Skinny Fit Jeans',
      image: cartImg3,
      size: 'Large',
      color: 'Blue',
      price: 240,
      quantity: 1,
    },
  ]);

  const handleDelete = (productId) => {
    const updatedProducts = products.filter((product) => product.id !== productId);
    setProducts(updatedProducts);
  };

  const handleQuantityChange = (productId, newQuantity) => {
    const updatedProducts = products.map((product) =>
      product.id === productId ? { ...product, quantity: newQuantity } : product,
    );
    setProducts(updatedProducts);
  };

  return (
    <div>
      <CartTitle />
      <div className="cart-container">
        <div className="products-container">
          {products.map((product) => (
            <CartItem
              key={product.id}
              id={product.id}
              name={product.name}
              image={product.image}
              size={product.size}
              color={product.color}
              price={product.price}
              quantity={product.quantity}
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
