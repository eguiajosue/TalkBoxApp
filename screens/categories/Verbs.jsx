import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  SectionList,
  StatusBar,
} from "react-native";
import React from "react";
import { verbos } from "../../data/words";
const styles = require("../../constants/styles");

const Verbs = () => {
  return (
    <SafeAreaView
      style={[styles.wordContainer, { marginTop: StatusBar.currentHeight }]}
    >
      <SectionList
        sections={verbos}
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
    </SafeAreaView>
  );
};

export default Verbs;
