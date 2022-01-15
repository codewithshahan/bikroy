<<<<<<< HEAD
import React, { useEffect, useRef } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import ImageInput from "./ImageInput";

const ImageInputList = ({ imageUris = [], onAddImage, onRemoveImage }) => {
  const ref = useRef();

  return (
    <View style={{ marginBottom: 10 }}>
      <ScrollView
        ref={ref}
        onContentSizeChange={() => ref.current.scrollToEnd()}
        horizontal
      >
        {imageUris.map((imageUri) => (
          <View key={imageUri} style={styles.image}>
            <ImageInput
=======
import React, { useRef } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import ImageInput from "./ImageInput";

const ImageInputList = ({ imageUris = [], onRemoveImage, onAddImage }) => {
  const scrollView = useRef();

  return (
    <View>
      <ScrollView
        horizontal
        ref={scrollView}
        onContentSizeChange={() => scrollView.current.scrollToEnd()}
      >
        {imageUris.map((imageUri) => (
          <View style={styles.image}>
            <ImageInput
              key={imageUri}
>>>>>>> a37c540f35014f42d3c8dbc670ab6e057ed2e0ab
              imageUri={imageUri}
              onChangeImage={() => onRemoveImage(imageUri)}
            />
          </View>
        ))}
        <ImageInput onChangeImage={(uri) => onAddImage(uri)} />
      </ScrollView>
    </View>
  );
};

export default ImageInputList;

const styles = StyleSheet.create({
  image: {
    marginRight: 7,
<<<<<<< HEAD
    paddingBottom: 10,
=======
>>>>>>> a37c540f35014f42d3c8dbc670ab6e057ed2e0ab
  },
});
