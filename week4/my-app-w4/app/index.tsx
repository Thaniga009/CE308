// import { FlatList } from "react-native";
// import { CenteredView } from "./component/CenteredView";
// import { ItemCard } from "./component/ItemCard";

// type Item = {
//   id: string;
//   productName: string;
//   price: number;
//   pcs: number;
//   btnSize: "sm" | "md" | "lg";
//   btnColor: "primary" | "secondary" | "danger";
// };

// const items: Item[] = [
//   {
//     id: "1",
//     productName: "Banana",
//     price: 2000,
//     pcs: 10,
//     btnSize: "sm",
//     btnColor: "primary",
//   },
//   {
//     id: "2",
//     productName: "Mango",
//     price: 2500,
//     pcs: 5,
//     btnSize: "md",
//     btnColor: "secondary",
//   },
//   {
//     id: "3",
//     productName: "Apple",
//     price: 3000,
//     pcs: 3,
//     btnSize: "lg",
//     btnColor: "danger",
//   },
// ];

// export default function Index() {
//   return (
//     <CenteredView>
//       <FlatList
//         data={items}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//           <ItemCard
//             productName={item.productName}
//             price={item.price}
//             pcs={item.pcs}
//             btnSize={item.btnSize}
//             btnColor={item.btnColor}
//           />
//         )}
//       />
//     </CenteredView>
//   );
// }
import { useState } from "react";
import { View, Text } from "react-native";
import { CenteredView } from "./component/CenteredView";
import { CustomInput } from "./component/CustomInput";
import { CustomButton } from "./component/CustomButton";

export default function Index() {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [pcs, setPcs] = useState("");

  const handleSubmit = () => {
    alert(
      `ชื่อสินค้า: ${productName}\nราคา: ${price}\nจำนวน: ${pcs}`
    );
  };

  return (
    <CenteredView>
      {/* หัวข้อ */}
      <Text
        style={{
          fontSize: 20,
          fontWeight: "600",
          marginBottom: 16,
        }}
      >
        กรอกข้อมูลสินค้า
      </Text>

      {/* ฟอร์มกรอกข้อมูล */}
      <CustomInput
        label="ชื่อสินค้า"
        value={productName}
        placeholder="กรอกชื่อสินค้า"
        onChangeText={setProductName}
      />

      <CustomInput
        label="ราคา"
        value={price}
        placeholder="กรอกราคา"
        onChangeText={setPrice}
      />

      <CustomInput
        label="จำนวน"
        value={pcs}
        placeholder="กรอกจำนวน"
        onChangeText={setPcs}
      />

      {/* ปุ่มยืนยัน */}
      <View style={{ marginTop: 12 }}>
        <CustomButton
          title="ยืนยัน"
          size="md"
          variant="primary"
          onPress={handleSubmit}
        />
      </View>
    </CenteredView>
  );
}
