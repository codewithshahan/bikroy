import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import {
  AppFormField,
  Form,
  SubmitButton,
  FormImagePicker,
} from "../components/forms";

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
  images: Yup.array().min(1, "Please select at least one image"),
});

const ListingEditScreen = () => {
  return (
    <ScrollView>
      <Screen style={styles.screen}>
        <Form
          initialValues={{
            title: "",
            price: "",
            category: null,
            description: "",
            images: [],
          }}
          onSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}
        >
          <FormImagePicker name="images" />
          <AppFormField name="title" placeholder="Title" maxLength={8} />
          <AppFormField
            name="price"
            placeholder="Price"
            keyboardType="numeric"
            width="35%"
          />
          <AppPicker
            items={categories}
            placeholder="Category"
            name="category"
            width="50%"
          />
          <AppFormField
            name="description"
            placeholder="Description"
            numberOfLines={3}
            maxLength={255}
          />
          <SubmitButton title="Post" />
        </Form>
      </Screen>
    </ScrollView>
  );
};

export default ListingEditScreen;

const styles = StyleSheet.create({
  screen: {
    margin: 10,
  },
});
