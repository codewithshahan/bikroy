import React from "react";
import { Platform, SafeAreaView, StatusBar, StyleSheet } from "react-native";

const Screen = ({ children, style }) => {
  return <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>;
};

export default Screen;

const styles = StyleSheet.create({
  screen: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
    padding: 10,
  },
});
