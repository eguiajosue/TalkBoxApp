import React from "react";
import { StatusBar, StyleSheet, Text, View, TextInput } from "react-native";
import { SocialIcon } from "@rneui/base";

export function Icon({ type, onPress }) {
  return (
    <View style={styles.iconWrapper}>
      <SocialIcon button type={type} onPress={onPress} />
    </View>
  );
}

const styles = StyleSheet.create({});
