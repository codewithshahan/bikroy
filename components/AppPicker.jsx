import React, { useState } from "react";
import {
  Button,
  FlatList,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import defaultStyles from "../config/styles";
import MaterialIcon from "@expo/vector-icons/MaterialCommunityIcons";
import AppText from "./AppText";
import Screen from "./Screen";
import PickerItem from "./PickerItem";

const AppPicker = ({
  icon,
  items,
  placeholder,
  selectedItem,
  onSelectItem,
}) => {
  const [modal, setModal] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModal(true)}>
        <View style={styles.container}>
          {icon && (
            <MaterialIcon
              name={icon}
              color={defaultStyles.colors.medium}
              size={20}
              style={{ marginRight: 5 }}
            />
          )}
          <View style={styles.text}>
            <AppText>{selectedItem ? selectedItem.label : placeholder}</AppText>
          </View>
          <MaterialIcon
            name="chevron-down"
            color={defaultStyles.colors.medium}
            size={20}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modal} animationType="slide">
        <Screen>
          <Button onPress={() => setModal(false)} title="Close"></Button>
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <PickerItem
                label={item.label}
                onPress={() => {
                  onSelectItem(item);
                  setModal(false);
                }}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
  );
};

export default AppPicker;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    padding: 15,
    borderRadius: 30,
    alignItems: "center",
    backgroundColor: defaultStyles.colors.light,
  },
  text: {
    flex: 1,
  },
});