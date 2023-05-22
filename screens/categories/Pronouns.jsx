import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  SectionList,
  StatusBar,
} from "react-native";
import React from "react";
import { pronombres } from "../../data/words";
const styles = require("../../constants/styles");

const Pronouns = () => {
  const data = [
    {
      title: "Personas",
      data: [
        "Mamá",
        "Papá",
        "Hermano",
        "Hermana",
        "Señor",
        "Señora",
        "Niño",
        "Niña",
        "Amigo",
        "Amiga",
      ],
    },
  ];

  return (
    <View>
      <SectionList
        sections={pronombres}
        stickySectionHeadersEnabled={true}
        renderItem={({ item }) => (
          <View style={styles.wordItem}>
            <Text style={styles.wordTitle}>{item}</Text>
          </View>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.wordHeader}>{title}</Text>
        )}
      ></SectionList>
    </View>
  );
};

export default Pronouns;
