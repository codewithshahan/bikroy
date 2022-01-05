import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Card from "../components/Card";
import ListItem from "../components/ListItem";
import Screen from "../components/Screen";

const ListingScreen = () => {
  const lists = [
    {
      id: 1,
      title: "Red Jacker for Sale",
      price: 100,
      image: require("../assets/jacket.jpg"),
    },
    {
      id: 2,
      title: "Couch for Sale!",
      price: 1000,
      image: require("../assets/couch.jpg"),
    },
    {
      id: 3,
      title: "Mosh for Sale!",
      price: 20,
      image: require("../assets/mosh.jpg"),
    },
  ];

  return (
    <Screen style={styles.container}>
      <FlatList
        data={lists}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Card
              title={item.title}
              subTitle={"$" + item.price}
              image={item.image}
            />
          </View>
        )}
      />
    </Screen>
  );
};

export default ListingScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f8f4f4",
  },
  card: {
    padding: 10,
  },
});
