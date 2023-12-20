import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItemIndex = state.items.findIndex(
        (item) =>
          item.itemTitle === newItem.itemTitle &&
          item.itemColor === newItem.itemColor &&
          item.itemSize === newItem.itemSize,
      );

      if (existingItemIndex !== -1) {
        state.items[existingItemIndex].itemQuantity += newItem.itemQuantity;
      } else {
        state.items.push(newItem);
      }
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
