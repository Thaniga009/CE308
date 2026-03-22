import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../redux/StoreShop";
import { addItem, removeItem, clearCart } from "../redux/ShoppingCart";

const ShopScreen = () => {
  // 1. ดึง State จาก Redux 
  const cart = useSelector((state: RootState) => state.cart); 
  const dispatch = useDispatch<AppDispatch>();

  // 2. Local State สำหรับเก็บค่าจาก Input
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");

  const handleAddItem = () => {
    if (name && quantity && price) {
      const newItem = {
        id: Date.now().toString(), // สร้าง ID แบบสุ่ม
        name: name,
        quantity: parseInt(quantity),
        price: parseFloat(price),
      };
      dispatch(addItem(newItem));
      // ล้างช่อง Input หลังเพิ่มเสร็จ
      setName("");
      setQuantity("");
      setPrice("");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>index</Text>

      {/* ส่วนกรอกข้อมูล ช่องสี่เหลี่ยม*/}
      <View style={styles.inputSection}>
        <TextInput style={styles.input} placeholder="ชื่อสินค้า" value={name} onChangeText={setName} />
        <TextInput style={styles.input} placeholder="จำนวน" value={quantity} keyboardType="numeric" onChangeText={setQuantity} />
        <TextInput style={styles.input} placeholder="ราคา" value={price} keyboardType="numeric" onChangeText={setPrice} />
        
        <TouchableOpacity style={styles.addButton} onPress={handleAddItem}>
          <Text style={styles.buttonText}>เพิ่มลงตะกร้า</Text>
        </TouchableOpacity>
      </View>

      {/* ส่วนแสดงรายการสินค้า  เป้นช่องสีๆ  ใช้falst lisrt*/}
      <FlatList
        data={cart.items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
            <View style={{ flex: 1 }}>
              <Text>{item.name} x{item.quantity} ราคาต่อหน่วย {item.price} บาท</Text>
            </View>
            <TouchableOpacity 
              style={styles.deleteButton} 
              onPress={() => dispatch(removeItem(item.id))}
            >
              <Text style={{ color: 'white' }}>ลบ</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      {/* ยอดรวมและปุ่มล้างตะกร้า */}
      <View style={styles.footer}>
        <Text style={styles.totalText}>ยอดรวม: {cart.totalAmount} บาท</Text>
        <TouchableOpacity style={styles.clearButton} onPress={() => dispatch(clearCart())}>
          <Text style={styles.buttonText}>ล้างตะกร้า</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  header: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
  inputSection: { marginBottom: 20 },
  input: { borderWidth: 1, borderColor: "#ccc", padding: 8, marginBottom: 10, borderRadius: 5 },
  addButton: { backgroundColor: "#2196F3", padding: 12, alignItems: "center" },
  buttonText: { color: "white", fontWeight: "bold" },
  cartItem: { 
    flexDirection: "row", 
    backgroundColor: "#e3f2fd", 
    padding: 10, 
    marginBottom: 5, 
    alignItems: "center" 
  },
  deleteButton: { backgroundColor: "#2196F3", padding: 8, marginLeft: 10 },
  footer: { marginTop: 10 },
  totalText: { fontSize: 18, marginBottom: 10 },
  clearButton: { backgroundColor: "#2196F3", padding: 12, alignItems: "center" },
});

export default ShopScreen;