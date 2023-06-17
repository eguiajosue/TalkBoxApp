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

const Adjetives = () => {
  const data = [
    { id: "1", title: "Jugar" },
    { id: "2", title: "Bailar" },
    { id: "3", title: "Cantar" },
    { id: "4", title: "Reir" },
    { id: "5", title: "Estudiar" },
    { id: "6", title: "Leer" },
    { id: "7", title: "Escribir" },
    { id: "8", title: "Hermana" },
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

export default Adjetives;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatListContent: {
    justifyContent: "center",
  },
});
