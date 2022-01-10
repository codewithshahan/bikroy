import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AppText from "./AppText";
import Icon from "./Icon";

const CategoryItem = ({ onPress, item }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Icon backgroundColor={item.backgroundColor} name={item.icon} size={60} />
      <AppText style={styles.label}>{item.label}</AppText>
    </TouchableOpacity>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: "center",
    flex: 1,
  },
  label: {
    textAlign: "center",
    flex: 1,
    marginVertical: 5,
  },
});
