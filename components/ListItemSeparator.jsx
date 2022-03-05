import { StyleSheet, Text, View } from "react-native";
import React from "react";
import color from "../config/colors";

const ListItemSeparator = () => {
  return (
    <View
      style={{
        width: "90%",
        height: 2,
        backgroundColor: color.light,
        flex: 1,
        alignSelf: "center",
      }}
    ></View>
  );
};

export default ListItemSeparator;

const styles = StyleSheet.create({});
