import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface CartItem {
  id: string;
  name: string;
  quantity: number; 
  price: number;
}

interface CartState {
  items: CartItem[];
  totalAmount: number;
}


const initialState: CartState = {
 
  items: [], // เริ่มต้นเป็นรายการว่าง 
  totalAmount: 0, 
};


const ShoppingCartSlice = createSlice({
  name: "shoping",
  initialState, 
  reducers: {
    
    addItem: (state, action: PayloadAction<CartItem>) => {
      state.items.push(action.payload);
      state.totalAmount += action.payload.price * action.payload.quantity;
    },
    //Action 
    removeItem: (state, action: PayloadAction<string>) => {
     
      const itemToRemove = state.items.find(
        (item) => item.id === action.payload,
      );
      if (itemToRemove) {
        state.totalAmount -= itemToRemove.price * itemToRemove.quantity;
      }
       
        state.items = state.items.filter((item) => item.id !== action.payload);
    },
    //ล้างตะกร้า ทั้งหมด
    clearCart: (state) => {
      state.items = [];
      state.totalAmount = 0;
    },
  },
});

export const {addItem, removeItem, clearCart} = ShoppingCartSlice.actions;
//export Reducer ไปใส่ใน store
export default ShoppingCartSlice.reducer;