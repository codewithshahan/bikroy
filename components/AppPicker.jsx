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
import CategoryItem from "../components/CategoryItem";

const AppPicker = ({
  icon,
  items,
  width,
  PickerItemComponent = CategoryItem,
  placeholder,
  selectedItem,
  onSelectItem,
  numOfColumns = 1,
}) => {
  const [modal, setModal] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModal(true)}>
        <View style={[styles.container, { width }]}>
          {icon && (
            <MaterialIcon
              name={icon}
              color={defaultStyles.colors.medium}
              size={20}
              style={{ marginRight: 5 }}
            />
          )}

          {selectedItem ? (
            <AppText style={styles.text}>{selectedItem.label}</AppText>
          ) : (
            <AppText style={styles.placeholder}>{placeholder}</AppText>
          )}

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
            numColumns={numOfColumns}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <PickerItemComponent
                item={item}
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
    flexDirection: "row",
    padding: 15,
    borderRadius: 30,
    alignItems: "center",
    backgroundColor: defaultStyles.colors.light,
  },

  placeholder: {
    color: defaultStyles.colors.medium,
    flex: 1,
  },

  text: {
    flex: 1,
  },
});
