import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Icon from "../components/Icon";
import ItemSeparator from "../components/ItemSeparator";
import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import colors from "../config/colors";

const AccountScreen = () => {
  const lists = [
    {
      id: 1,
      name: "My Listings",
      iconName: "format-list-bulleted",
      backgroundColor: colors.danger,
    },
    {
      id: 2,
      name: "My Messages",
      iconName: "email",
      backgroundColor: colors.secondary,
    },
  ];

  return (
    <Screen style={styles.screen}>
      <ListItem
        image={require("../assets/mosh.jpg")}
        title="Mosh Hamdani"
        subTitle="programmingwithmosh@gmail.com"
      />

      <View style={styles.container}>
        <FlatList
          data={lists}
          keyExtractor={(item) => item.id.toString()}
          ItemSeparatorComponent={ItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              title={item.name}
              iconComponent={
                <Icon
                  name={item.iconName}
                  backgroundColor={item.backgroundColor}
                />
              }
            />
          )}
        />
      </View>

      <ListItem
        iconComponent={
          <Icon name="logout" backgroundColor="#ffe66d" color={colors.medium} />
        }
        title="Log Out"
      />
    </Screen>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
  },

  container: {
    backgroundColor: colors.white,
    marginVertical: 30,
  },
});
