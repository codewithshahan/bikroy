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
  },
});
