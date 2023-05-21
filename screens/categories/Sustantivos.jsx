import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  SectionList,
  StatusBar,
} from "react-native";
import React from "react";
import { sustantivos } from "../../data/words";
const styles = require("../../constants/styles");

const Sustantivos = () => {
  return (
    <SafeAreaView
      style={[styles.wordContainer, { marginTop: StatusBar.currentHeight }]}
    >
      <SectionList
        sections={sustantivos}
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

export default Sustantivos;
