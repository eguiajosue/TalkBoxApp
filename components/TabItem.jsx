import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect } from "react";

const TabItem = ({ item, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={([styles.tab], { backgroundColor: item.color })}
    >
      <Text style={[styles.title]}>{item.title}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  tab: {
    borderRadius: 50,
    paddingHorizontal: 10,
    marginHorizontal: 10,
  },
  title: {
    fontSize: 15,
    padding: 10,
    color: "#fff",
  },
});
