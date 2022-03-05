import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import colors from "../../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import defaultStyles from "../../config/styles";

const AppTextInput = ({ placeholder, icon, width = "100%", ...otherProps }) => {
  return (
    <View style={[styles.container, { width: width }]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={colors.medium}
          style={styles.icon}
        />
      )}
      <TextInput
        style={defaultStyles.text}
        placeholder={placeholder}
        placeholderTextColor={defaultStyles.colors.medium}
        {...otherProps}
      />
    </View>
  );
};

export default AppTextInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    padding: 18,
    borderRadius: 50,
    flexDirection: "row",
    marginVertical: 10,
    alignItems: "center",
  },
  icon: {
    marginRight: 7,
  },
});
