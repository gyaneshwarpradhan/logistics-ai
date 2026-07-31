import { View, Text } from "react-native";

export default function VehicleSelector() {
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
        Vehicle Type
      </Text>

      <Text
        style={{
          marginTop: 8,
          color: "#666",
        }}
      >
        🚚 Mini Truck (Dropdown coming next)
      </Text>
    </View>
  );
}