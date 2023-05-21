import { StyleSheet, Text, View } from "react-native";
import React from "react";

const WordListHeader = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default WordListHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#d1d1d1",
    padding: 10,
  },
  text: {
    fontSize: 20,
    textAlign: "center",
  },
});
