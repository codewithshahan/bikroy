import React from "react";
import { StyleSheet, TouchableHighlight, View } from "react-native";
import { Image } from "react-native-expo-image-cache";

import AppText from "./AppText";
import colors from "../config/colors";

const Card = ({ imageUri, thumbnailUrl, title, subTitle, onPress }) => {
  return (
    <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
      <View style={styles.cardContainer}>
        <Image
          style={styles.image}
          uri={imageUri}
          tint="light"
          preview={{ uri: thumbnailUrl }}
        />

        <View style={styles.content}>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subTitle}>{subTitle}</AppText>
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default Card;

const styles = StyleSheet.create({
  cardContainer: {
    width: "100%",
    borderRadius: 10,
    height: 285,
    backgroundColor: "#fff",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontSize: 18,
    fontWeight: "500",
    marginBottom: 2,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 18,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    marginLeft: 15,
  },
});
