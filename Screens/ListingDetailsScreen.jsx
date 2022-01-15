import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

import ListItem from "../components/lists/ListItem";
import colors from "../config/colors";

const ListingDetailsScreen = ({ route }) => {
  const listing = route.params;
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image source={listing.image} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>{listing.title}</Text>
          <Text style={styles.subtitle}>${listing.price}</Text>
          <View style={styles.profile}>
            <ListItem
              image={require("../assets/mosh.jpg")}
              title="Shahan Ahmed"
              subTitle="5 Listings"
            />
          </View>
        </View>
      </View>
    </ScrollView>
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
