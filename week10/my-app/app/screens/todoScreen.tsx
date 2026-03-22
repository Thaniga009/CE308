import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../redux/StoreShop";
import { addItem, removeItem } from "../redux/ShoppingCart";

const ShopScreen = () => {
  const cart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch<AppDispatch>();

  const [name, setName] = useState("");

  const handleAddItem = () => {
    if (name.trim()) {
      const newItem = {
        id: Date.now().toString(),
        name: name,
        quantity: 1, 
        price: 0,
      };
      dispatch(addItem(newItem));
      setName("");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>index</Text>

      <View style={styles.inputSection}>
        <TextInput 
          style={styles.input} 
          placeholder="เพิ่มงาน..." 
          value={name} 
          onChangeText={setName} 
        />
        
        <TouchableOpacity style={styles.addButton} onPress={handleAddItem}>
          <Text style={styles.buttonText}>เพิ่มงาน</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={cart.items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
  
            <Text style={styles.itemText}>{item.name}</Text>
            
            <TouchableOpacity 
              style={styles.deleteButton} 
              onPress={() => dispatch(removeItem(item.id))}
            >
              <Text style={{ color: 'white' }}>ลบ</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#f5f5f5" },
  header: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
  inputSection: { marginBottom: 10 },
  input: { 
    borderWidth: 1, 
    borderColor: "#333", 
    padding: 10, 
    backgroundColor: "#fff",
    marginBottom: 5 
  },
  addButton: { 
    backgroundColor: "#2196F3", 
    padding: 12, 
    alignItems: "center",
    borderRadius: 2 
  },
  buttonText: { color: "white", fontWeight: "bold" },
  cartItem: { 
    flexDirection: "row", 
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 0, // ปรับตามภาพไม่มีเส้นคั่นชัดเจน
  },
  itemText: { fontSize: 16, flex: 1 },
  deleteButton: { 
    backgroundColor: "#2196F3", 
    paddingVertical: 8, 
    paddingHorizontal: 15,
    borderRadius: 2 
  },
});

export default ShopScreen;