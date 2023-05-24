import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect } from "react";

const TabItem = ({ item, onPress }) => {
  const styles = StyleSheet.create({
    tab: {
      borderRadius: 10,
      paddingHorizontal: 10,
      backgroundColor: item.color,
    },
    title: {
      fontSize: 15,
      padding: 10,
      color: "#fff",
    },
  });

  return (
    <TouchableOpacity onPress={onPress} style={[styles.tab]}>
      <Text style={[styles.title]}>{item.title}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;
