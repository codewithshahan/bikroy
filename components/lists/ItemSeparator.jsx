import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../../config/colors";

const ItemSeparator = () => {
  return (
    <View
      style={{
        width: "100%",
        height: 2,
        backgroundColor: colors.light,
      }}
    ></View>
  );
};

export default ItemSeparator;

const styles = StyleSheet.create({});
