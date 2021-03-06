import React from "react";
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../config/colors";

const PostIcon = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="plus-circle"
          color={colors.light}
          size={40}
        />
      </View>
    </TouchableOpacity>
  );
};

export default PostIcon;

const styles = StyleSheet.create({
  container: {
    width: 70,
    height: 70,
    borderRadius: 40,
    backgroundColor: colors.danger,
    borderColor: colors.light,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 4,
    bottom: 15,
  },
});
