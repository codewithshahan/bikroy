import React from "react";
import { Platform, StyleSheet, TextInput, View } from "react-native";
import Icon from "./Icon";
import colors from "../config/colors";
import defaultStyles from "../config/styles";
import MaterialIcon from "@expo/vector-icons/MaterialCommunityIcons";

const AppTextInput = ({ icon, ...otherprops }) => {
  return (
    <View style={styles.container}>
      <MaterialIcon
        name={icon}
        color={defaultStyles.colors.medium}
        size={20}
        style={{ marginRight: 5 }}
      />
      <TextInput style={defaultStyles.text} {...otherprops} />
    </View>
  );
};

export default AppTextInput;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    padding: 15,
    borderRadius: 30,
    alignItems: "center",
    backgroundColor: defaultStyles.colors.light,
    marginVertical: 15,
  },
});
