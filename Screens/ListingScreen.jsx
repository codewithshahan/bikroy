import React, { useEffect, useState } from "react";
import { FlatList, StatusBar, StyleSheet, Text, View } from "react-native";
import Card from "../components/Card";
import routes from "../components/navigation/routes";
import Screen from "../components/Screen";
import colors from "../config/colors";
import ActivityIndicator from "../components/ActivityIndicator";

import useApi from "../hooks/useApi";
import Button from "../components/AppButton";
import AppText from "../components/AppText";
import listingsApi from "../api/listings";

const ListingScreen = ({ navigation }) => {
  const {
    data: listings,
    error,
    loading,
    request: loadListings,
  } = useApi(listingsApi.getListings);

  useEffect(() => {
    loadListings();
  }, []);

  return (
    <Screen style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.light} />
      {error && (
        <>
          <AppText>Couldn't find the listings</AppText>
          <Button onPress={() => loadListings()} title="Retry" />
        </>
      )}
      {loading && <ActivityIndicator visible={loading} />}
      <FlatList
        data={listings}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Card
              title={item.title}
              subTitle={"$" + item.price}
              imageUri={item.images[0].url}
              onPress={() => navigation.navigate(routes.LISTING_DETAIL, item)}
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
    backgroundColor: colors.light,
  },
  card: {
    padding: 10,
  },
});
