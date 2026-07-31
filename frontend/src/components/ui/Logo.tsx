import { Text, View } from "react-native";

export default function Logo() {
  return (
    <View style={{ marginBottom: 40 }}>
      <Text
        style={{
          fontSize: 30,
          fontWeight: "700",
        }}
      >
        🚛 Logistics AI
      </Text>

      <Text
        style={{
          color: "#666",
          marginTop: 6,
          fontSize: 16,
        }}
      >
        Book Vehicles smarter with AI
      </Text>
    </View>
  );
}