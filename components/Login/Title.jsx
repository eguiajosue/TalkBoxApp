import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "../../constants";

export function Title({ welcomeTo, title }) {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>
        <Text style={[styles.text, styles.welcomeTo]}>{welcomeTo} </Text>
        <Text style={[styles.text, styles.title]}>{title}</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    paddingHorizontal: 20,
  },

  text: {
    fontSize: 40,
  },

  welcomeTo: {
    fontWeight: 200,
    textAlign: "left",
  },

  title: { fontWeight: 700 },
});
