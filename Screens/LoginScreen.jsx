import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import { Form, AppFormField, SubmitButton } from "../components/forms";

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required().label("Email"),
  password: Yup.string().min(4).max(10).required().label("Password"),
});

const LoginScreen = () => {
  return (
    <Screen style={styles.screen}>
      <Image source={require("../assets/logo-red.png")} style={styles.logo} />
      <Form
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          icon="email"
          placeholder="Email"
          name="email"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          textContentType="emailAddress"
        />

        <AppFormField
          icon="lock"
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Password"
          name="password"
          secureTextEntry
          textContentType="password"
        />

        <SubmitButton title="Login" />
      </Form>
    </Screen>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  screen: {
    padding: 10,
  },

  logo: {
    width: 100,
    height: 100,
    alignSelf: "center",
    marginVertical: 20,
  },
});
