import { createContext, useContext, useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('userCart')) || []);

  useEffect(() => {
    localStorage.setItem('userCart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = useMemo(
    () => (newItem) => {
      const existingItemIndex = cart.findIndex(
        (item) =>
          item.itemTitle === newItem.itemTitle &&
          item.itemColor === newItem.itemColor &&
          item.itemSize === newItem.itemSize,
      );

      if (existingItemIndex !== -1) {
        const updatedCart = [...cart];
        updatedCart[existingItemIndex].itemQuantity += newItem.itemQuantity;
        setCart(updatedCart);
      } else {
        setCart([...cart, newItem]);
      }
    },
    [cart],
  );

  const getTotalItems = useMemo(
    () => () => cart.reduce((total, item) => total + item.itemQuantity, 0),
    [cart],
  );

  return useMemo(
    () => (
      <CartContext.Provider value={{ cart, addToCart, getTotalItems }}>
        {children}
      </CartContext.Provider>
    ),
    [cart, addToCart, getTotalItems, children],
  );
}

export const useCart = () => useContext(CartContext);

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
