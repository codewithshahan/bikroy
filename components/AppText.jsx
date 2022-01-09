import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import defaultStyles from "../config/styles";

const AppText = ({ style, children }) => {
  return <Text style={[defaultStyles.text, style]}>{children}</Text>;
};

export default AppText;
