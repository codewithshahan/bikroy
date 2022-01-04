import React from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import colors from "../config/colors";

const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.controlButtons}>
        <Button title="Close"></Button>
        <Button title="Delete"></Button>
      </View>
      <Image source={require("../assets/chair.jpg")} style={styles.image} />
    </View>
  );
};

export default ViewImageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  image: {
    position: "absolute",
    zIndex: -1,
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  controlButtons: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
