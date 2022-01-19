import { useNetInfo } from "@react-native-community/netinfo";
import React from "react";
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";

const OfflineNotice = () => {
  const notice = useNetInfo();

  if (notice.type !== "unknown" && notice.isInternetReachable === false)
    return (
      <SafeAreaView>
        <View style={styles.container}>
          <AppText style={styles.text}>No Internet Connection</AppText>
        </View>
      </SafeAreaView>
    );

  return null;
};

export default OfflineNotice;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: colors.primary,
    zIndex: 2,
    padding: 10,
    top: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  text: {
    color: colors.white,
    textAlign: "center",
    fontWeight: "bold",
  },
});
