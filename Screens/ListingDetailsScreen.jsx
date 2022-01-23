import React from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  ScrollView,
} from "react-native";
import { Image } from "react-native-expo-image-cache";

import colors from "../config/colors";
import { ListItem } from "../components/lists";
import ContactSellerForm from "../components/ContactSellerForm";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

import rootNavigation from "../components/navigation/rootNavigation";

export default function ListingDetailsScreen({ route: { params: listing } }) {
  return (
    <ScrollView>
      <KeyboardAvoidingView
        behavior="position"
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 100}
      >
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <Image
            style={styles.image}
            preview={{ uri: listing.images[0].thumbnailUrl }}
            uri={listing.images[0].url}
            tint="light"
          />
          <View style={styles.detailsContainer}>
            <Text style={styles.title}>{listing.title}</Text>
            <Text style={styles.price}>${listing.price}</Text>
            <TouchableWithoutFeedback
              style={styles.profile}
              onPress={() => rootNavigation.navigation("AccountNavigator")}
            >
              <ListItem
                title="Shahan Chowdhury"
                subTitle="5 Listings"
                image={require("../assets/shahan.png")}
              />
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
        <View style={styles.contact}>
          <ContactSellerForm listing={listing} />
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: { height: 300, width: "100%" },
  detailsContainer: { marginLeft: 15, marginVertical: 10, marginBottom: 20 },
  title: { fontSize: 24, marginVertical: 10 },
  price: { color: colors.secondary, fontSize: 18, fontWeight: "700" },
  profile: {
    marginTop: 30,
  },
  contact: {
    padding: 10,
  },
});
