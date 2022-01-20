import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import {
  Form,
  AppFormField,
  SubmitButton,
  ErrorMessage,
} from "../components/forms";
import usersApi from "../api/users";
import useAuth from "../auth/useAuth";
import authApi from "../api/auth";
import ActivityIndicator from "../components/ActivityIndicator";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().min(3).label("Name"),
  email: Yup.string().email().required().label("Email"),
  password: Yup.string().min(4).max(10).required().label("Password"),
});

const RegisterScreen = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { logIn } = useAuth();

  handleSubmit = async (userInfo) => {
    setLoading(true);
    const result = await usersApi.register(userInfo);

    setLoading(false);
    if (!result.ok) {
      if (result.data) setError(result.data.error);
      else {
        setError("An unexpected error occured!");
        console.log(result);
      }
      return;
    }

    const { data: authToken } = await authApi.login(
      userInfo.email,
      userInfo.password
    );

    logIn(authToken);
  };

  return (
    <Screen style={styles.screen}>
      <Form
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <ErrorMessage error={error} visible={error} />
        <AppFormField
          icon="google"
          placeholder="Name"
          name="name"
          autoCapitalize="none"
          maxLength={10}
          autoCorrect={false}
        />

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

        <SubmitButton title="Register" />
      </Form>
      <ActivityIndicator visible={loading} />
    </Screen>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  screen: {
    padding: 10,
  },
});
