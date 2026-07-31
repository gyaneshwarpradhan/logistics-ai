import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "../screens/auth/LoginScreen";
import OtpScreen from "../screens/auth/OtpScreen";
import BottomTabs from "./BottomTabs";
import BookingFormScreen from "../screens/bookings/BookingFormScreen";
import BookingSummaryScreen from "../screens/bookings/BookingSummaryScreen";

import { RootStackParamList } from "../types/navigation";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="Login"
          component={LoginScreen}
        />

        <Stack.Screen
          name="OTP"
          component={OtpScreen}
        />

        <Stack.Screen
          name="Home"
          component={BottomTabs}
        />

        <Stack.Screen
          name="BookingForm"
          component={BookingFormScreen}
        />

        <Stack.Screen
          name="BookingSummary"
          component={BookingSummaryScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}