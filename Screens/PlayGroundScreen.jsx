import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AppFormField, Form, SubmitButton } from "../components/forms";
import AppFormPicker from "../components/forms/AppFormPicker";
import * as Yup from "yup";

const categories = [
  {
    backgroundColor: "#fc5c65",
    icon: "floor-lamp",
    label: "Furniture",
    value: 1,
  },
  {
    backgroundColor: "#fd9644",
    icon: "car",
    label: "Cars",
    value: 2,
  },
  {
    backgroundColor: "#fed330",
    icon: "camera",
    label: "Cameras",
    value: 3,
  },
  {
    backgroundColor: "#26de81",
    icon: "cards",
    label: "Games",
    value: 4,
  },
  {
    backgroundColor: "#2bcbba",
    icon: "shoe-heel",
    label: "Clothing",
    value: 5,
  },
  {
    backgroundColor: "#45aaf2",
    icon: "basketball",
    label: "Sports",
    value: 6,
  },
  {
    backgroundColor: "#4b7bec",
    icon: "headphones",
    label: "Movies & Music",
    value: 7,
  },
  {
    backgroundColor: "#a55eea",
    icon: "book-open-variant",
    label: "Books",
    value: 8,
  },
  {
    backgroundColor: "#778ca3",
    icon: "application",
    label: "Other",
    value: 9,
  },
];

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  category: Yup.object().required().nullable().label("Category"),
  description: Yup.string().label("Description"),
});

const PlayGroundScreen = () => {
  return (
    <View>
      <Form
        initialValues={{
          title: "",
          price: "",
          category: null,
          description: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => console.log(values)}
      >
        <AppFormField name="title" placeholder="Title" maxLength={8} />
        <AppFormField
          name="price"
          placeholder="Price"
          width="35%"
          keyboardType="numeric"
        />
        <AppFormPicker
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
    </View>
  );
};

export default PlayGroundScreen;

const styles = StyleSheet.create({});
