import { SafeAreaView, StyleSheet, Text, View, StatusBar } from "react-native";
import React from "react";
import Button from "../components/Button";

const CreatePhrase = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Button title={"Palabra"} />
        <Button title={"Palabra"} />
        <Button title={"Palabra"} />
      </View>
    </SafeAreaView>
  );
};

export default CreatePhrase;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    flexDirection: "row",
    marginTop: StatusBar.currentHeight,
  },
});
