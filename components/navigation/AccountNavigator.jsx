import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../../config/colors";
import AccountScreen from "../../Screens/AccountScreen";
import MessagesScreen from "../../Screens/MessagesScreen";
import * as Notifications from "expo-notifications";
import rootNavigation from "./rootNavigation";

const AccountNavigator = () => {
  const Stack = createNativeStackNavigator();

  Notifications.addNotificationResponseReceivedListener(() => {
    rootNavigation.navigation("Messages");
  });

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.white,
        },
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen name="Account" component={AccountScreen} />
      <Stack.Screen name="Messages" component={MessagesScreen} />
    </Stack.Navigator>
  );
};

export default AccountNavigator;

const styles = StyleSheet.create({});
