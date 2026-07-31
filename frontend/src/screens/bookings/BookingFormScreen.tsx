import { ScrollView, Text } from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { RootStackParamList } from "../../types/navigation";

import LocationInput from "../../components/booking/LocationInput";
import LoadInput from "../../components/booking/LoadInput";
import VehicleSelector from "../../components/booking/VehicleSelector";
import DateSelector from "../../components/booking/DateSelector";
import ContinueButton from "../../components/booking/ContinueButton";

type NavigationProp =
  NativeStackNavigationProp<RootStackParamList>;

export default function BookingFormScreen() {
  const navigation = useNavigation<NavigationProp>();

  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [weight, setWeight] = useState("");

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "#fff",
      }}
      contentContainerStyle={{
        padding: 20,
      }}
      showsVerticalScrollIndicator={false}
    >
      <Text
        style={{
          fontSize: 28,
          fontWeight: "700",
          marginBottom: 24,
        }}
      >
        New Booking
      </Text>

      <LocationInput
        label="Pickup Location"
        value={pickup}
        onChangeText={setPickup}
      />

      <LocationInput
        label="Drop Location"
        value={drop}
        onChangeText={setDrop}
      />

      <VehicleSelector />

      <LoadInput
        value={weight}
        onChangeText={setWeight}
      />

      <DateSelector />

      <ContinueButton
        onPress={() =>
          navigation.navigate("BookingSummary")
        }
      />
    </ScrollView>
  );
}