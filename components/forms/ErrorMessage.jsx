import React from "react";
import { StyleSheet } from "react-native";
import AppText from "../AppText";

const ErrorMessage = ({ error, visible }) => {
  if (!error || !visible) return null;

  return <AppText style={styles.text}>{error}</AppText>;
};

export default ErrorMessage;

const styles = StyleSheet.create({
  text: {
    color: "red",
    fontWeight: "600",
  },
});
