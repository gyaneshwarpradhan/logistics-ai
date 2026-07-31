import { ScrollView, View } from "react-native";

import GreetingCard from "../../components/home/GreetingCard";
import BookingCard from "../../components/home/BookingCard";
import RecentBookings from "../../components/home/RecentBookings";

export default function HomeScreen() {
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
        onPress={() => {}}
      />

      <BookingCard
        title="🤖 AI Booking"
        description="Describe your shipment in natural language and let AI fill the details."
        buttonText="Talk to AI"
        onPress={() => {}}
      />

      <RecentBookings />
    </ScrollView>
  );
}