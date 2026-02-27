import { View, Text, Button, StyleSheet, Pressable, ScrollView } from "react-native";
import { router } from "expo-router";

const products = [
  {id: '1', name: 'iphone 15', price: '32,900' },
  {id: '2', name: 'iPad Air', price: '23,900' },

];

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContent}>
      <Text style={styles.title}>Welcome Home!</Text>

      <Button
        title="Go to Details"
        onPress={() => router.push("/detail")}
      />

      <Button
        title="Go to Profile (Purple Header)"
        onPress={() => router.push("/profile")}
      />

      <Button
        title="Go to Settings (Orange Header)"
        onPress={() => router.push("/settings")}
      />

      <Button
        title="Open Login Modal"
        onPress={() => router.push("/login")}
      />

      <Text style={styles.sectionTitle}>รายการสินค้า</Text>
        {products.map((item) => (
          <Pressable
            key={item.id}
            onPress={() => {
              router.push({
                pathname: '/product/[id]',
                params: {
                  id: item.id,
                  name: item.name,
                  price: item.price,
                },
              });
            }}
            style={styles.productCard}
          >
            <Text>{item.name}</Text>
            <Text style={styles.price}>{item.price} บาท</Text>
          </Pressable>
        ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});