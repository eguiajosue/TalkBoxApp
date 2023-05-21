import { StyleSheet, Text, View } from "react-native";
import React from "react";

const WordListItem = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default WordListItem;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    padding: 10,
  },
  text: {
    textTransform: "capitalize",
  },
});
