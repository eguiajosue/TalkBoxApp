import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";

const Button = ({ title }) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#c2c2c2",
    height: 100,
    borderRadius: 25,
  },

  text: {
    color: "#000",
    fontSize: 30,
    fontWeight: 700,
  },
});
