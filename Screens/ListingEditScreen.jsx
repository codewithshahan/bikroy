import React, { cloneElement, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { AppFormField, Form, SubmitButton } from "../components/forms";

import * as Yup from "yup";
import Screen from "../components/Screen";
import AppFormPicker from "../components/forms/AppFormPicker";
import AppFormImagePicker from "../components/AppFormImagePicker";
import listings from "../api/listings";
import UploadScreen from "./UploadScreen";

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
  const [uploading, setUploading] = useState(0);
  const [uploadVisible, setUploadVisible] = useState(false);

  const handleSubmit = async (listing, { resetForm }) => {
    setUploading(0);
    setUploadVisible(true);
    const response = await listings.addListing({ ...listing }, (values) =>
      setUploading(values)
    );

    if (!response.ok) {
      setUploadVisible(false);
      return alert("Couldn't Save the List");
    }

    resetForm();
  };

  return (
    <ScrollView>
      <UploadScreen
        onDone={() => setUploadVisible(false)}
        visible={uploadVisible}
        value={uploading}
      />
      <Screen style={styles.screen}>
        <Form
          initialValues={{
            title: "",
            price: "",
            category: null,
            description: "",
            images: [],
          }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <AppFormImagePicker name="images" />
          <AppFormField name="title" placeholder="Title" maxLength={48} />
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
