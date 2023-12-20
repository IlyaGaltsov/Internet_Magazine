import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: JSON.parse(localStorage.getItem('userCart')) || [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload);
    },
    updateQuantity: (state, action) => {
      const { itemId, quantity } = action.payload;
      const foundItem = state.items.find((item) => item.itemId === itemId);
      if (foundItem) {
        foundItem.itemQuantity = quantity;
        localStorage.setItem('userCart', JSON.stringify(state.items));
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.itemId !== action.payload);
      localStorage.setItem('userCart', JSON.stringify(state.items));
    },

    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, updateQuantity, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
