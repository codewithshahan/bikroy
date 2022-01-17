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
        {imageUris.map((imageUri, index) => (
          <View key={imageUri + index} style={styles.image}>
            <ImageInput
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
    paddingBottom: 10,
  },
});
