import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Icon } from "@rneui/base";
import { COLORS } from "../../constants";

export function AudioButton({ iconName, onPress }) {
  return (
    <TouchableOpacity style={styles.wordSelectionButtons} onPress={onPress}>
      <Icon
        color="#fff"
        name={iconName}
        style={{
          padding: 10,
        }}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  wordSelectionButtons: {
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    marginHorizontal: 2,
  },
});
