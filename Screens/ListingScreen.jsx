import React from "react";
import { FlatList, StatusBar, StyleSheet, Text, View } from "react-native";
import Card from "../components/Card";
import routes from "../components/navigation/routes";
import Screen from "../components/Screen";
import colors from "../config/colors";

const ListingScreen = ({ navigation }) => {
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
      <StatusBar barStyle="dark-content" backgroundColor={colors.light} />
      <FlatList
        data={lists}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Card
              title={item.title}
              subTitle={"$" + item.price}
              image={item.image}
              onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
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
