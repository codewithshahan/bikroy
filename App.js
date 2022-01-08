import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import AppPicker from "./components/AppPicker";
import AppTextInput from "./components/AppTextInput";
import Screen from "./components/Screen";
import AccountScreen from "./Screens/AccountScreen";
import ListingDetailsScreen from "./Screens/ListingDetailsScreen";
import ListingScreen from "./Screens/ListingScreen";
import MessagesScreen from "./Screens/MessagesScreen";
import ViewImageScreen from "./Screens/ViewImageScreen";
import WelcomeScreen from "./Screens/WelcomeScreen";

const items = [
  { label: "Camera", value: 1 },
  { label: "Clothes", value: 2 },
  { label: "Car", value: 3 },
];

export default function App() {
  const [selectedItem, setSelectedItem] = useState();

  return (
    <Screen>
      <AppPicker
        selectedItem={selectedItem}
        onSelectItem={(item) => setSelectedItem(item)}
        items={items}
        icon="apps"
        placeholder="Category"
      />
      <AppTextInput icon="email" placeholder="Email" />
    </Screen>
  );
}
