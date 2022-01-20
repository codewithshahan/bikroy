import React, { useState, useContext, useEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import {
  Form,
  AppFormField,
  SubmitButton,
  ErrorMessage,
} from "../components/forms";
import AuthApi from "../api/auth";
import useAuth from "../auth/useAuth";

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required().label("Email"),
  password: Yup.string().min(4).max(10).required().label("Password"),
});

const LoginScreen = () => {
  const [loginFailed, setLoginFailed] = useState(false);

  const auth = useAuth();

  const handleSubmit = async ({ email, password }) => {
    const result = await AuthApi.login(email, password);

    if (!result.ok) return setLoginFailed(true);

    setLoginFailed(false);
    auth.logIn(result.data);
  };

  return (
    <Screen style={styles.screen}>
      <Image source={require("../assets/logo-red.png")} style={styles.logo} />
      <Form
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <ErrorMessage visible={loginFailed} error="Invalid Email or Password" />
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
