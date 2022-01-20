import React, { useContext } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import context from "../auth/context";
import store from "../auth/store";
import useAuth from "../auth/useAuth";

import Icon from "../components/Icon";
import { ListItemSeparator, ListItem } from "../components/lists";
import Screen from "../components/Screen";
import colors from "../config/colors";

const AccountScreen = ({ navigation }) => {
  const { user, logOut } = useAuth();

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
      targetScreen: "Messages",
    },
  ];

  return (
    <Screen style={styles.screen}>
      <ListItem
        image={require("../assets/mosh.jpg")}
        title={user.name}
        subTitle={user.email}
      />

      <View style={styles.container}>
        <FlatList
          data={lists}
          keyExtractor={(item) => item.id.toString()}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              title={item.name}
              iconComponent={
                <Icon
                  name={item.iconName}
                  backgroundColor={item.backgroundColor}
                />
              }
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          )}
        />
      </View>

      <ListItem
        iconComponent={
          <Icon name="logout" backgroundColor="#ffe66d" color={colors.medium} />
        }
        onPress={() => logOut()}
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
