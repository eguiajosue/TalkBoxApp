import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  FlatList,
  SectionList,
  TouchableOpacity,
} from "react-native";
import {
  sustantivos,
  adjetivos,
  conjugaciones,
  locuciones,
  preposiciones,
  pronombres,
  verbos,
} from "../data/words";
import WordListItem from "../components/WordListItem";
import WordListHeader from "../components/WordListHeader";

const CreatePhrase = () => {
  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={sustantivos}
        stickySectionHeadersEnabled={true}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.title}>{item}</Text>
          </View>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
      ></SectionList>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  item: {
    flex: 0.5,
    marginHorizontal: 16,
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    borderRadius: 25,
  },
  header: {
    fontSize: 32,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    textTransform: "capitalize",
  },
});

export default CreatePhrase;
