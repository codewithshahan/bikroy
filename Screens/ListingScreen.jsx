import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Card from "../components/Card";

const ListingScreen = () => {
  return (
    <View style={styles.container}>
      <Card
        image={require("../assets/jacket.jpg")}
        title="Red Jacket for sale"
        subTitle="$100"
      />
    </View>
  );
};

export default ListingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#f8f4f4",
  },
});
