import React from "react";
import { View, StyleSheet, Keyboard, Alert } from "react-native";
import * as Yup from "yup";
import * as Notifications from "expo-notifications";

import messagesApi from "../api/messages";
import { Form, AppFormField as Field, SubmitButton as Submit } from "./forms";

const validationSchema = Yup.object().shape({
  message: Yup.string().required("You can't send an empty message"),
});

function ContactSellerForm({ listing }) {
  const handleSubmit = async ({ message }, { resetForm }) => {
    Keyboard.dismiss();

    const result = await messagesApi.send(message, listing.id);

    if (!result.ok) {
      console.log("Error", result);
      return Alert.alert("Error", "Could not send the message to the seller");
    }

    resetForm();

    Notifications.scheduleNotificationAsync({
      content: {
        title: "Awesome!",
        body: "Your message was sent to the seller.",
      },
      trigger: {
        seconds: 3,
      },
    });

    Alert.alert("Message Sent!");
  };

  return (
    <>
      <Form
        initialValues={{ message: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <View style={styles.container}>
          <Field name="message" placeholder="Message..." />
          <Submit title="Contact Seller" />
        </View>
      </Form>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default ContactSellerForm;
