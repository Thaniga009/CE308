import { Text, Pressable } from "react-native";

type CustomButtonProps = {
  title: string;
  onPress: () => void;
  variant?: "primary" | "secondary" | "danger";
  size?: "sm" | "md" | "lg";
};

export const CustomButton = ({
  title,
  onPress,
  variant = "primary",
  size = "md",
}: CustomButtonProps) => {
  const variantStyle = {
    primary: "#3b82f6",
    secondary: "#6b7280",
    danger: "#ef4444",
  };

  const sizeStyle = {
    sm: { paddingVertical: 6, paddingHorizontal: 14 },
    md: { paddingVertical: 10, paddingHorizontal: 22 },
    lg: { paddingVertical: 14, paddingHorizontal: 30 },
  };

  return (
    <Pressable
      onPress={onPress}
      style={{
        backgroundColor: variantStyle[variant],
        borderRadius: 8,
        marginBottom: 10,
        ...sizeStyle[size],
      }}
    >
      <Text
        style={{
          color: "white",
          fontWeight: "600",
          textAlign: "center",
        }}
      >
        {title}
      </Text>
    </Pressable>
  );
};
