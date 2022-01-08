import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AppText from "./AppText";

const PickerItem = ({ onPress, label }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <AppText>{label}</AppText>
    </TouchableOpacity>
  );
};

export default PickerItem;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
