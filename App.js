import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import AppPicker from "./components/AppPicker";
import AppTextInput from "./components/AppTextInput";
import Screen from "./components/Screen";
import AccountScreen from "./Screens/AccountScreen";
import ListingDetailsScreen from "./Screens/ListingDetailsScreen";
import ListingEditScreen from "./Screens/ListingEditScreen";
import ListingScreen from "./Screens/ListingScreen";
import LoginScreen from "./Screens/LoginScreen";
import MessagesScreen from "./Screens/MessagesScreen";
import PlayGroundScreen from "./Screens/PlayGroundScreen";
import RegisterScreen from "./Screens/RegisterScreen";
import ViewImageScreen from "./Screens/ViewImageScreen";
import WelcomeScreen from "./Screens/WelcomeScreen";
import ImageInput from "./components/ImageInput";
import ImageInputList from "./components/ImageInputList";

export default function App() {
  return <ListingEditScreen />;
}
