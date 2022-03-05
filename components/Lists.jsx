import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";

import ListItemSeparator from "./ListItemSeparator";
import ListItem from "../components/ListItem";

const data = [
  {
    id: 1,
    title: "Mosh for sell",
    icon: {
      name: "email",
      color: "red",
    },
  },
  {
    id: 2,
    title: "DIrenct action for human",
    icon: {
      name: "message",
      color: "blue",
    },
  },
];

const Lists = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <ListItem
          icon={item.icon.name}
          color={item.icon.color}
          title={item.title}
          onPress={() => console.log("clicked")}
        />
      )}
      ItemSeparatorComponent={ListItemSeparator}
    />
  );
};

export default Lists;

const styles = StyleSheet.create({
  messageContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});
