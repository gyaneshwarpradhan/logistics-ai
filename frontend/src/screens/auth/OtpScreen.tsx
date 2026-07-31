import { View, Text } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import { RootStackParamList } from "../../types/navigation";
import { useState } from "react";

type Props = NativeStackScreenProps<RootStackParamList, "OTP">;

export default function OtpScreen({
  navigation,
  route,
}: Props) {
  const [otp, setOtp] = useState("");

  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 120,
      }}
    >
      <Text
        style={{
          fontSize: 28,
          fontWeight: "700",
          marginBottom: 8,
        }}
      >
        Verify OTP
      </Text>

      <Text
        style={{
          color: "#666",
          marginBottom: 30,
        }}
      >
        OTP sent to {route.params.phone}
      </Text>

      <Input
        label="Enter OTP"
        value={otp}
        onChangeText={setOtp}
        keyboardType="numeric"
      />

      <Button
        title="Verify"
        onPress={() => navigation.replace("Home")}
      />
    </View>
  );
}