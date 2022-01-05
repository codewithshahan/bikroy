import React from "react";
import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Icon = ({ color = "#fff", size = 40, name, backgroundColor }) => {
  return (
    <View
      style={{
        backgroundColor,
        width: size,
        height: size,
        borderRadius: size / 2,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <MaterialCommunityIcons color={color} size={size * 0.5} name={name} />
    </View>
  );
};

export default Icon;
