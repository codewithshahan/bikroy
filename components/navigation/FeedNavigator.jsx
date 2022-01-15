import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import ListingDetailsScreen from "../../Screens/ListingDetailsScreen";
import ListingScreen from "../../Screens/ListingScreen";

const FeedNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, presentation: "modal" }}
    >
      <Stack.Screen name="Listings" component={ListingScreen} />
      <Stack.Screen name="ListingDetails" component={ListingDetailsScreen} />
    </Stack.Navigator>
  );
};

export default FeedNavigator;
