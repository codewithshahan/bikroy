import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AppFormField, Form, SubmitButton } from "../components/forms";

import * as Yup from "yup";
import AppPicker from "../components/AppPicker";
import Screen from "../components/Screen";

const categories = [
  { label: "Car", value: 1 },
  { label: "Mobile", value: 2 },
  { label: "TV", value: 3 },
];

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  category: Yup.object().required().nullable().label("Category"),
  description: Yup.string().label("Description"),
});

const ListingEditScreen = () => {
  return (
    <Screen style={styles.screen}>
      <Form
        initialValues={{
          title: "",
          price: "",
          category: null,
          description: "",
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField name="title" placeholder="Title" maxLength={8} />
        <AppFormField name="price" placeholder="Price" keyboardType="numeric" />
        <AppPicker items={categories} placeholder="Category" name="category" />
        <AppFormField
          name="description"
          placeholder="Description"
          numberOfLines={3}
          maxLength={255}
        />
        <SubmitButton title="Post" />
      </Form>
    </Screen>
  );
};

export default ListingEditScreen;

const styles = StyleSheet.create({
  screen: {
    padding: 10,
  },
});
