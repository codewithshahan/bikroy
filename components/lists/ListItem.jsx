import React from "react";
import { StyleSheet, View, Image, TouchableHighlight } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";

import AppText from "../AppText";
import colors from "../../config/colors";

import { MaterialCommunityIcons } from "@expo/vector-icons";

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
            <AppText style={styles.title} numberOfLines={1}>
              {title}
            </AppText>
            {subTitle && (
              <AppText style={styles.subTitle} numberOfLines={2}>
                {subTitle}
              </AppText>
            )}
          </View>

          <MaterialCommunityIcons
            name="chevron-right"
            size={20}
            color={colors.medium}
          />
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
    flex: 1,
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
