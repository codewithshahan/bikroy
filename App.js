import React, { useState } from "react";

import Screen from "./components/Screen";
import ImageInputList from "./components/ImageInputList";
import ListingEditScreen from "./Screens/ListingEditScreen";
import { NavigationContainer } from "@react-navigation/native";
import navigationTheme from "./components/navigation/navigationTheme";
import AuthNavigator from "./components/navigation/AuthNavigator";

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AuthNavigator />
    </NavigationContainer>
  );
}
