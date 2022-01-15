<<<<<<< HEAD
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
=======
import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import * as Location from "expo-location";

>>>>>>> a37c540f35014f42d3c8dbc670ab6e057ed2e0ab
import { AppFormField, Form, SubmitButton } from "../components/forms";

import * as Yup from "yup";
import Screen from "../components/Screen";
import AppFormPicker from "../components/forms/AppFormPicker";
<<<<<<< HEAD
import AppFormImagePicker from "../components/AppFormImagePicker";
=======
import FormImagePicker from "../components/FormImagePicker";
import useLocation from "../components/useLocation";
>>>>>>> a37c540f35014f42d3c8dbc670ab6e057ed2e0ab

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
  images: Yup.array().min(1, "Please select at least one image"),
});

const ListingEditScreen = () => {
  const location = useLocation();

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
<<<<<<< HEAD
          onSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}
        >
          <AppFormImagePicker name="images" />
          <AppFormField name="title" placeholder="Title" maxLength={8} />
=======
          onSubmit={(values) => console.log(location)}
          validationSchema={validationSchema}
        >
          <FormImagePicker name="images" />

          <AppFormField name="title" placeholder="Title" maxLength={8} />

>>>>>>> a37c540f35014f42d3c8dbc670ab6e057ed2e0ab
          <AppFormField
            name="price"
            placeholder="Price"
            width="35%"
            keyboardType="numeric"
          />
<<<<<<< HEAD
=======

>>>>>>> a37c540f35014f42d3c8dbc670ab6e057ed2e0ab
          <AppFormPicker
            items={categories}
            placeholder="Category"
            name="category"
            width="50%"
          />
<<<<<<< HEAD
=======

>>>>>>> a37c540f35014f42d3c8dbc670ab6e057ed2e0ab
          <AppFormField
            name="description"
            placeholder="Description"
            numberOfLines={3}
            maxLength={255}
          />
<<<<<<< HEAD
=======

>>>>>>> a37c540f35014f42d3c8dbc670ab6e057ed2e0ab
          <SubmitButton title="Post" />
        </Form>
      </Screen>
    </ScrollView>
  );
};

export default ListingEditScreen;

const styles = StyleSheet.create({
  screen: {
    padding: 10,
  },
});
