import { View } from "react-native";

export const CenteredView = ({ children }: { children: React.ReactNode }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {children}
    </View>
  );
};

