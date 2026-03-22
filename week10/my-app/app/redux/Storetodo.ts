import { configureStore } from '@reduxjs/toolkit';
import shoppingReducer from './ShoppingCart';
import todoReducer from './todoSlice';

export const store = configureStore({
  reducer: {
    cart: shoppingReducer,
    todo: todoReducer,
  },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;