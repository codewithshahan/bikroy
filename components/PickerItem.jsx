import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import AppText from "./AppText";

const PickerItem = ({ onPress, item }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <AppText>{item.label}</AppText>
    </TouchableOpacity>
  );
};

export default PickerItem;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
