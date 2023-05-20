import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import commonPhrases from "../../data/commonPhrases";
import categories from "../../data/categories";
import PhraseItem from "./PhraseItem";

const CommonPhrasesList = () => {
  const getBackgroundColor = (category) => {
    const foundCategory = categories.find((cat) => cat.id === category);
    return foundCategory ? foundCategory.color : "#fff"; // Puedes establecer un color predeterminado en caso de no encontrar la categoría
  };

  return (
    <View>
      <FlatList
        data={commonPhrases}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <PhraseItem
            title={item.title}
            backgroundColor={getBackgroundColor(item.category[0])}
          />
        )}
      />
    </View>
  );
};

export default CommonPhrasesList;

const styles = StyleSheet.create({});
