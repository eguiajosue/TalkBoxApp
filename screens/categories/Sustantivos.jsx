import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  SectionList,
  StatusBar,
  FlatList,
} from "react-native";
import React from "react";
import Word from "../../components/Word";

const Sustantivos = () => {
  const data = [
    { id: "1", title: "Mamá" },
    { id: "2", title: "Papá" },
    { id: "3", title: "Hermano" },
    { id: "4", title: "Amigo" },
    { id: "5", title: "Amiga" },
    { id: "6", title: "Abuelo" },
    { id: "7", title: "Abuela" },
    { id: "8", title: "Hermana" },
    { id: "9", title: "Tío" },
    { id: "10", title: "Tía" },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        numColumns={2}
        horizontal={false}
        renderItem={({ item }) => <Word title={item.title} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
};

export default Sustantivos;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatListContent: {
    justifyContent: "center",
  },
});
