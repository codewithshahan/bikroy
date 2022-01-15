import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import defaultStyles from "../config/styles";
import MaterialIcon from "@expo/vector-icons/MaterialCommunityIcons";

const AppTextInput = ({ icon, width, ...otherprops }) => {
  return (
    <View style={[styles.container, { width }]}>
      <MaterialIcon
        name={icon}
        color={defaultStyles.colors.medium}
        size={20}
        style={{ marginRight: 5 }}
      />
      <TextInput
        placeholderTextColor={defaultStyles.colors.medium}
        style={defaultStyles.text}
        {...otherprops}
      />
    </View>
  );
};

export default AppTextInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    borderRadius: 30,
    alignItems: "center",
    backgroundColor: defaultStyles.colors.light,
    marginVertical: 10,
  },
});
