import { configureStore } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-extraneous-dependencies
import { persistReducer, persistStore } from 'redux-persist';
// eslint-disable-next-line import/no-extraneous-dependencies
import storage from 'redux-persist/lib/storage/session';
import { apiSlice } from '../slices/apiSlice';
import cartReducer from '../slices/cartSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, cartReducer);

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    cart: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'], // ignore PERSIST action
      },
    }).concat(apiSlice.middleware),
  devTools: true,
});

export const persistor = persistStore(store);

export default store;
