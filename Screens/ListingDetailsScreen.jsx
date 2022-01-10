import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import ListItem from "../components/lists/ListItem";
import colors from "../config/colors";

const ListingDetailsScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/jacket.jpg")} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>Red Jacket For Sale!</Text>
        <Text style={styles.subtitle}>$100</Text>
        <View style={styles.profile}>
          <ListItem
            image={require("../assets/mosh.jpg")}
            title="Shahan Ahmed"
            subTitle="5 Listings"
          />
        </View>
      </View>
    </View>
  );
};

export default ListingDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: 300,
  },
  content: {
    padding: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: "500",
    marginVertical: 5,
  },
  subtitle: {
    fontSize: 18,
    color: colors.secondary,
    fontWeight: "bold",
  },
});
