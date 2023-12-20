import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
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
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.itemId !== action.payload);
    },

    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, updateQuantity, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
