import React from "react";
import { StyleSheet, View, Image } from "react-native";
import AppText from "./AppText";
import colors from "../config/colors";

const ListItem = ({ image, title, subTitle }) => {
  return (
    <View style={styles.listContainer}>
      <Image style={styles.image} source={image} />
      <View>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  listContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 40,
  },
  image: {
    width: 70,
    marginRight: 10,
    height: 70,
    borderRadius: 100,
  },
  title: {
    fontSize: 18,
    fontWeight: "500",
    marginBottom: 5,
  },
  subTitle: {
    color: colors.medium,
    fontWeight: "500",
    fontSize: 15,
  },
});
