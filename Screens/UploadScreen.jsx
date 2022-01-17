import React from "react";
import { Modal, StyleSheet, Text, View } from "react-native";
import * as Progress from "react-native-progress/Bar";
import colors from "../config/colors";
import LottieView from "lottie-react-native";

const UploadScreen = ({ visible = false, value = 0, onDone }) => {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        {value < 1 ? (
          <Progress.default
            progress={value}
            color={colors.primary}
            width={200}
          />
        ) : (
          <LottieView
            style={styles.done}
            autoPlay
            loop={false}
            onAnimationFinish={onDone}
            source={require("../assets/animations/done.json")}
          />
        )}
      </View>
    </Modal>
  );
};

export default UploadScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  done: {
    width: 150,
  },
});
