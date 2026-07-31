import { View, Text } from "react-native";

export default function DateSelector() {
  return (
    <View
      style={{
        marginVertical: 12,
      }}
    >
      <Text
        style={{
          fontSize: 16,
          fontWeight: "600",
        }}
      >
        Pickup Date
      </Text>

      <Text
        style={{
          marginTop: 8,
          color: "#666",
        }}
      >
        📅 Select Date (Coming next)
      </Text>
    </View>
  );
}