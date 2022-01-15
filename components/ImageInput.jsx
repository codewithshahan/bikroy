<<<<<<< HEAD
import React, { useEffect } from "react";
import { Alert, Image, StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import * as ImagePicker from "expo-image-picker";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const ImageInput = ({ imageUri, onChangeImage }) => {
  const getPermission = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted) {
      Alert.alert("You need to enable permission");
    }
  };

  useEffect(() => getPermission(), []);

  const selectImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync();
    onChangeImage(result.uri);
=======
import React, { useEffect, useState } from "react";
import {
  Image,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

const ImageInput = ({ imageUri, onChangeImage }) => {
  useEffect(() => {
    requestPersmission();
  }, []);

  const requestPersmission = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) {
      alert("You must be enable camera permission");
    }
  };

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      onChangeImage(result.uri);
    } catch (error) {
      console.log("Error readng image", error);
    }
>>>>>>> a37c540f35014f42d3c8dbc670ab6e057ed2e0ab
  };

  const handlePress = () => {
    if (!imageUri) selectImage();
    else
<<<<<<< HEAD
      Alert.alert("Delete", "Are you sure to delete this image?", [
=======
      Alert.alert("Delete", "Are you sure you want to delete this image?", [
>>>>>>> a37c540f35014f42d3c8dbc670ab6e057ed2e0ab
        {
          text: "Yes",
          onPress: () => onChangeImage(null),
        },
<<<<<<< HEAD
        {
          text: "No",
        },
=======
        { text: "No" },
>>>>>>> a37c540f35014f42d3c8dbc670ab6e057ed2e0ab
      ]);
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {!imageUri && (
          <MaterialCommunityIcons
            name="camera"
<<<<<<< HEAD
            size={40}
            color={colors.medium}
          />
        )}

        {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
=======
            color={colors.medium}
            size={40}
          />
        )}
        {imageUri && <Image style={styles.image} source={{ uri: imageUri }} />}
>>>>>>> a37c540f35014f42d3c8dbc670ab6e057ed2e0ab
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ImageInput;

const styles = StyleSheet.create({
  container: {
<<<<<<< HEAD
    width: 120,
    height: 120,
    backgroundColor: colors.light,
    borderRadius: 10,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
=======
    width: 100,
    height: 100,
    borderRadius: 10,
    backgroundColor: colors.light,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
>>>>>>> a37c540f35014f42d3c8dbc670ab6e057ed2e0ab
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
