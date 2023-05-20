import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Button from "../components/Button";

const CreatePhrase = () => {
  return (
    <View style={styles.container}>
      <Button title={"Palabra"} />
      <Button title={"Palabra"} />
      <Button title={"Palabra"} />
    </View>
  );
};

export default CreatePhrase;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
