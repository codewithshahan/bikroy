import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import ListingEditScreen from "../../Screens/ListingEditScreen";
import AccountNavigator from "./AccountNavigator";
import FeedNavigator from "./FeedNavigator";
import PostIcon from "./PostIcon";
import routes from "./routes";
import colors from "../../config/colors";
import useNotifications from "../../hooks/useNotifications";

const AppNavigator = () => {
  const Tab = createBottomTabNavigator();

  useNotifications("AccountNavigator");

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          borderColor: colors.light,
          borderTopWidth: 2,
          padding: 5,
          backgroundColor: colors.white,
        },
        tabBarLabelStyle: { bottom: 5 },
        tabBarInactiveTintColor: colors.medium,
      }}
    >
      <Tab.Screen
        name="Feed"
        component={FeedNavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Post"
        component={ListingEditScreen}
        options={({ navigation }) => ({
          title: "",
          tabBarIcon: () => (
            <PostIcon
              onPress={() => navigation.navigate(routes.LISTING_EDIT)}
            />
          ),
        })}
      />
      <Tab.Screen
        name="AccountNavigator"
        component={AccountNavigator}
        options={{
          title: "Account",
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});
