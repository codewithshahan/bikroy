import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import colors from "../../config/colors";
import Icon from "../Icon";

const ListItemDeleteActions = ({ onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Icon name="trash-can" size={70} />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ListItemDeleteActions;

const styles = StyleSheet.create({
  container: {
    width: 70,
    height: "100%",
    backgroundColor: colors.danger,
    alignItems: "center",
    justifyContent: "center",
  },
});
