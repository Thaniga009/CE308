import { View, Text, FlatList } from "react-native";

type ItemListProps = {
  items: { id: string; title: string; pcs: number }[];
};

export const ItemList = ({ items }: ItemListProps) => {
  return (
    <View style={{ width: 250 }}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={{
              padding: 12,
              borderBottomWidth: 1,
              borderColor: "#ccc",
            }}
          >
            <Text style={{ textAlign: "center" }}>
              {item.title} - {item.pcs}
            </Text>
          </View>
        )}
      />
    </View>
  );
};
