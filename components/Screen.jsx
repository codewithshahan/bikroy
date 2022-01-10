import React from "react";
import {
  Platform,
  View,
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from "react-native";

const Screen = ({ children, style }) => {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={[styles.contain, style]}>{children}</View>
    </SafeAreaView>
  );
};

export default Screen;

const styles = StyleSheet.create({
  screen: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
  },
  contain: {
    flex: 1,
  },
});
