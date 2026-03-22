import { createSlice, PayloadAction } from "@reduxjs/toolkit";

//1.กำหนดstate
interface CartItem {
  id: string;
  name: string;
  quantity: number; //จำนวน
  price: number; //ราคา
}

interface CartState {
  items: CartItem[];
  totalAmount: number;
}

//2.การกำหนดState ในรถเข็นเป็นตะกร้าว่างเปล่า
const initialState: CartState = {
  // initialStateการตั้งชื่ออะไรก็ได้
  items: [], // เริ่มต้นเป็นรายการว่าง (Array เปล่า)
  totalAmount: 0, // เริ่มต้นราคารวมเป็น 0
};

//3.use createSlice สร้างReduce เเละAction
const ShoppingCartSlice = createSlice({
  name: "shoping",
  initialState, //บังคับตั้งชื่อนนี้เท่านั้น  ดึงจากข้อสองมาใช้
  reducers: {
    //Action เพิ่มสินค้า
    addItem: (state, action: PayloadAction<CartItem>) => {
      state.items.push(action.payload);
      state.totalAmount += action.payload.price * action.payload.quantity;
    },
    //Action ลบสินค้า (ลบidของสินค้า)
    removeItem: (state, action: PayloadAction<string>) => {
      // 1. หาว่าของที่จะลบราคาเท่าไหร่ เพื่อเอาไปลบออกจากยอดรวมก่อน
      const itemToRemove = state.items.find(
        (item) => item.id === action.payload,
      );
      if (itemToRemove) {
        state.totalAmount -= itemToRemove.price * itemToRemove.quantity;
      }
        // 2. กรองเอาเฉพาะตัวที่ id ไม่ตรงกับที่ส่งมาเก็บไว้ 
        state.items = state.items.filter((item) => item.id !== action.payload);
    },
    //ล้างตะกร้า ทั้งหมด
    clearCart: (state) => {
      state.items = [];
      state.totalAmount = 0;
    },
  },
});
//Action
export const {addItem, removeItem, clearCart} = ShoppingCartSlice.actions;
//export Reducer ไปใส่ใน store
export default ShoppingCartSlice.reducer;