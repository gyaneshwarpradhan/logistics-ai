import { useState } from "react";
import { View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
import Logo from "../../components/ui/Logo";
import { RootStackParamList } from "../../types/navigation";

type Props = NativeStackScreenProps<RootStackParamList, "Login">;

export default function LoginScreen({ navigation }: Props) {
  const [phone, setPhone] = useState("");

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "left",
        padding: 200,
      }}
    >
      <Logo />

      <Input
        label="Mobile Number"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />

      <Button
         title="Continue"
         onPress={() =>
            navigation.navigate("OTP", {
              phone,
          })
      }
    />
    </View>
  );
}