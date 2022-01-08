import React from "react";
import { StyleSheet, View, Image, TouchableHighlight } from "react-native";
import AppText from "./AppText";
import colors from "../config/colors";
import Swipeable from "react-native-gesture-handler/Swipeable";

const ListItem = ({
  image,
  title,
  subTitle,
  iconComponent,
  onPress,
  renderRighActions,
}) => {
  return (
    <Swipeable renderRightActions={renderRighActions}>
      <TouchableHighlight onPress={onPress} underlayColor={colors.light}>
        <View style={styles.listContainer}>
          {image && <Image style={styles.image} source={image} />}
          {iconComponent}
          <View style={styles.content}>
            <AppText style={styles.title}>{title}</AppText>
            {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  listContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.white,
    padding: 10,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 100,
  },
  content: {
    marginLeft: 10,
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
