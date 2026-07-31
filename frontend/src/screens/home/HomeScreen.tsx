import { ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import GreetingCard from "../../components/home/GreetingCard";
import BookingCard from "../../components/home/BookingCard";
import RecentBookings from "../../components/home/RecentBookings";
import { RootStackParamList } from "../../types/navigation";

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function HomeScreen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "#FFFFFF",
      }}
      contentContainerStyle={{
        padding: 20,
      }}
      showsVerticalScrollIndicator={false}
    >
      <GreetingCard />

      <BookingCard
        title="🚚 Manual Booking"
        description="Book a vehicle by entering pickup and drop details."
        buttonText="Book Now"
        onPress={() => navigation.navigate("BookingForm")}
      />

      <BookingCard
        title="🤖 AI Booking"
        description="Describe your shipment in natural language and let AI fill the booking details."
        buttonText="Talk to AI"
        onPress={() => {}}
      />

      <RecentBookings />
    </ScrollView>
  );
}