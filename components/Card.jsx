import React from "react";
import { Image, StyleSheet, View } from "react-native";

import AppText from "./AppText";
import colors from "../config/colors";

const Card = ({ image, title, subTitle }) => {
  return (
    <View style={styles.cardContainer}>
      <Image style={styles.image} source={image} />
      <View style={styles.content}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  cardContainer: {
    width: "100%",
    borderRadius: 10,
    height: 260,
    backgroundColor: "#fff",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 180,
  },
  title: {
    fontSize: 18,
    fontWeight: "500",
    marginVertical: 2,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 18,
  },
  content: {
    padding: 12,
  },
});
