import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Icon } from "@rneui/base";
import { COLORS } from "../../constants";

export function WordCard({ title, onPress }) {
  return (
    <View style={styles.wordContainer}>
      <Text style={styles.wordText}>{title}</Text>
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={onPress}
      >
        <Icon name="close" color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  wordContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: COLORS.secondary,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
  },
  wordText: {
    fontSize: 16,
    color: COLORS.dark,
  },
  iconContainer: {
    marginLeft: 40,
  },
});
