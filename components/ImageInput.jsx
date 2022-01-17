import React, { useEffect } from "react";
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
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
  };

  const handlePress = () => {
    if (!imageUri) selectImage();
    else
      Alert.alert("Delete", "Are you sure to delete this image?", [
        {
          text: "Yes",
          onPress: () => onChangeImage(null),
        },
        {
          text: "No",
        },
      ]);
  };

  return (
    <TouchableHighlight underlayColor={colors.light} onPress={handlePress}>
      <View style={styles.container}>
        {!imageUri && (
          <MaterialCommunityIcons
            name="camera"
            size={40}
            color={colors.medium}
          />
        )}

        {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
      </View>
    </TouchableHighlight>
  );
};

export default ImageInput;

const styles = StyleSheet.create({
  container: {
    width: 120,
    height: 120,
    backgroundColor: colors.light,
    borderRadius: 10,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
