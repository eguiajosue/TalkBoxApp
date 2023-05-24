import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";
import commonPhrases from "../../data/commonPhrases";
import { wordsCategories, commonPhrasesCategory } from "../../data/categories";
import PhraseItem from "./PhraseItem";
import * as Speech from "expo-speech";

const CommonPhrasesList = () => {
  const getBackgroundColor = (category) => {
    const foundCategory = commonPhrasesCategory.find(
      (cat) => cat.id === category
    );
    return foundCategory ? foundCategory.color : "#fff"; // Puedes establecer un color predeterminado en caso de no encontrar la categoría
  };

  const renderItem = ({ item }) => {
    const handleButtonPress = () => {
      Speech.speak(item.title);
    };

    return (
      <TouchableOpacity
        style={[
          styles.button,
          { backgroundColor: getBackgroundColor(item.category) },
        ]}
        onPress={handleButtonPress}
      >
        <Text style={styles.text}>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  const styles = StyleSheet.create({
    button: {
      padding: 10,
      borderRadius: 10,
      marginVertical: 5,
    },
    text: {
      textAlign: "right",
      textTransform: "uppercase",
      fontSize: 20,
      fontWeight: "500",
    },
  });

  return (
    <View style={styles.container}>
      <FlatList
        data={commonPhrases}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default CommonPhrasesList;
