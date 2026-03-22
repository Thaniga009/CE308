import couterReducer from  './ShoppingCart';
import { configureStore } from '@reduxjs/toolkit';


export const store = configureStore({
    reducer:{
      
        cart: couterReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;



  