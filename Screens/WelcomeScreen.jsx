import React from "react";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import colors from "../config/colors";

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/background.jpg")}
        style={styles.image}
      >
        <Image source={require("../assets/logo-red.png")} style={styles.logo} />
        <Text>Sell You Never Before</Text>

        <View style={styles.buttonContainer}>
          <View style={styles.loginButton}>{/* <Text>Login</Text> */}</View>
          <View style={styles.registerButton}>
            {/* <Text>Register</Text> */}
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    alignItems: "center",
  },
  logo: {
    marginTop: 40,
    width: 90,
    height: 90,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 0,
    padding: 20,
    width: "100%",
  },
  loginButton: {
    height: 60,
    marginVertical: 10,
    borderRadius: 30,
    backgroundColor: colors.primary,
  },

  registerButton: {
    height: 60,
    borderRadius: 30,
    backgroundColor: colors.secondary,
  },
});
