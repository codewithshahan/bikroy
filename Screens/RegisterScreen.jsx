import React from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import { Form, AppFormField, SubmitButton } from "../components/forms";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().min(3).label("Name"),
  email: Yup.string().email().required().label("Email"),
  password: Yup.string().min(4).max(10).required().label("Password"),
});

const RegisterScreen = () => {
  return (
    <Screen style={styles.screen}>
      <Form
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
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
    </Screen>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  screen: {
    padding: 10,
  },
});
