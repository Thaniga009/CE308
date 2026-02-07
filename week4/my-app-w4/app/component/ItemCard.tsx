import { View, Text } from "react-native";
import { CustomButton } from "./CustomButton";

type ItemCardProps = {
  productName: string;
  price: number;
  pcs: number;
  btnSize: "sm" | "md" | "lg";
  btnColor: "primary" | "secondary" | "danger";
};

export const ItemCard = ({
  productName,
  price,
  pcs,
  btnSize,
  btnColor,
}: ItemCardProps) => {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        padding: 16,
        borderRadius: 8,
        marginBottom: 12,
        width: 260,
        elevation: 2,
      }}
    >
      <Text style={{ fontSize: 18, fontWeight: "600" }}>
         ชื่อสินค้า: {productName}
    </Text>

      <Text>ราคา: {price} บาท</Text>
      <Text>จำนวน: {pcs} ชิ้น</Text>

      <CustomButton
        title="Buy"
        size={btnSize}
        variant={btnColor}
        onPress={() => alert(`${productName} clicked`)}
      />
    </View>
  );
};
