import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const PhraseItem = ({ title, backgroundColor }) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: backgroundColor }]}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default PhraseItem;

const styles = StyleSheet.create({
  button: {
    borderWidth: 0.1,
    marginVertical: 5,
    borderRadius: 10,
    padding: 30,
  },
  text: {
    textAlign: "right",
    textTransform: "uppercase",
    fontSize: 20,
    fontWeight: "500",
  },
});
