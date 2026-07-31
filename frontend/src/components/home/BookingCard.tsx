import { View, Text } from "react-native";
import Button from "../ui/Button";

type Props = {
  title: string;
  description: string;
  buttonText: string;
  onPress: () => void;
};

export default function BookingCard({
  title,
  description,
  buttonText,
  onPress,
}: Props) {
  return (
    <View
      style={{
        backgroundColor: "#F5F5F5",
        borderRadius: 16,
        padding: 20,
        marginBottom: 20,
      }}
    >
      <Text
        style={{
          fontSize: 20,
          fontWeight: "700",
        }}
      >
        {title}
      </Text>

      <Text
        style={{
          marginVertical: 10,
          color: "#666",
        }}
      >
        {description}
      </Text>

      <Button title={buttonText} onPress={onPress} />
    </View>
  );
}