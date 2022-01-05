import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import ItemSeparator from "../components/ItemSeparator";
import ListItem from "../components/ListItem";
import ListItemDeleteActions from "../components/ListItemDeleteActions";
import Screen from "../components/Screen";

const MessagesScreen = () => {
  const initialMess = [
    {
      id: 1,
      title: "Hey Whats Up",
      image: require("../assets/mosh.jpg"),
      description: "I want to connect with you for my project!",
    },
    {
      id: 2,
      title: "Paid 500 Dollars",
      image: require("../assets/logo-red.png"),
      description: "I want to !",
    },
  ];

  const [messages, setMessages] = useState(initialMess);
  const [refresh, setRefresh] = useState(false);

  const handleDelete = (item) => {
    const newMess = messages.filter((i) => item.id !== i.id);
    setMessages(newMess);
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={ItemSeparator}
        refreshing={refresh}
        onRefresh={() =>
          setMessages([
            {
              id: 2,
              title: "Paid 500 Dollars",
              image: require("../assets/logo-red.png"),
              description: "I want to connect with ",
            },
          ])
        }
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            image={item.image}
            onPress={() => console.log("Item selected")}
            subTitle={item.description}
            renderRighActions={() => (
              <ListItemDeleteActions onPress={() => handleDelete(item)} />
            )}
          />
        )}
      />
    </Screen>
  );
};

export default MessagesScreen;

const styles = StyleSheet.create({});
