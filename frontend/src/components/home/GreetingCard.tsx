import { Text, View } from "react-native";

export default function GreetingCard() {
  return (
    <View style={{ marginBottom: 24 }}>
      <Text
        style={{
          fontSize: 28,
          fontWeight: "700",
        }}
      >
        👋 Good Morning
      </Text>

      <Text
        style={{
          marginTop: 6,
          color: "#666",
        }}
      >
        Where do you want to transport goods today?
      </Text>
    </View>
  );
}
