import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ListingDetailsScreen from "../../Screens/ListingDetailsScreen";
import ListingScreen from "../../Screens/ListingScreen";

const FeedNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, presentation: "modal" }}
    >
      <Stack.Screen name="Listing" component={ListingScreen} />
      <Stack.Screen name="ListingDetail" component={ListingDetailsScreen} />
    </Stack.Navigator>
  );
};

export default FeedNavigator;

const styles = StyleSheet.create({});
