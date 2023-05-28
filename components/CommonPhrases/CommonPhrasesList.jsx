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

const CommonPhrasesList = ({ data }) => {
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
      width: "50%",
      height: 200,
      borderRadius: 10,
      marginVertical: 5,
      marginHorizontal: 5,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    text: {
      textTransform: "uppercase",
      fontSize: 15,
      fontWeight: "900",
      textAlign: "center",
      opacity: 0.5,
    },
  });

  return (
    <View style={styles.container}>
      <FlatList
        key={"#"}
        data={data}
        numColumns={2}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default CommonPhrasesList;
