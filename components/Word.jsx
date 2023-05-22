import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const Word = ({ title }) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Word;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#DEC1B6",
    padding: 30,
    width: "50%",
    margin: 5,
    borderRadius: 10,
  },
  text: {
    fontSize: 30,
    textAlign: "center",
  },
});
