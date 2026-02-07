import { View, Text, TextInput } from "react-native";

type CustomInputProps = {
  label: string;
  value: string;
  placeholder?: string;
  onChangeText: (text: string) => void;
};

export const CustomInput = ({
  label,
  value,
  placeholder,
  onChangeText,
}: CustomInputProps) => {
  return (
    <View style={{ marginBottom: 12, width: 260 }}>
      <Text style={{ marginBottom: 4 }}>{label}</Text>
      <TextInput
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          borderRadius: 6,
          padding: 8,
        }}
      />
    </View>
  );
};
