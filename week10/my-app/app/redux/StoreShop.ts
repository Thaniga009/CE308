import couterReducer from  './ShoppingCart';

//1สร้างstoneเก็บ เเละกำหนดReducer
// export const store = configureStore({
//     reducer:{
      
//         cart: couterReducer,
//     }
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

// ใน StoreShop.ts
import { configureStore } from '@reduxjs/toolkit';
import shoppingReducer from './ShoppingCart';
import todoReducer from './todoSlice';

export const store = configureStore({
  reducer: {
    cart: shoppingReducer,
    todo: todoReducer,
  },
});

// ส่งออก Type เพื่อให้หน้า Screen เรียกใช้ได้
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;