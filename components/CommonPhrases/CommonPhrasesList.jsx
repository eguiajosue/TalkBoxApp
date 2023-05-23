import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";
import commonPhrases from "../../data/commonPhrases";
import categories from "../../data/categories";
import PhraseItem from "./PhraseItem";
import * as Speech from "expo-speech";

const CommonPhrasesList = () => {
  const getBackgroundColor = (category) => {
    const foundCategory = categories.find((cat) => cat.id === category);
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
          { backgroundColor: getBackgroundColor(item.category[0]) },
        ]}
        onPress={handleButtonPress}
      >
        <Text style={styles.text}>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <FlatList
        data={commonPhrases}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

export default CommonPhrasesList;

const styles = StyleSheet.create({
  button: {
    borderWidth: 0.1,
    marginVertical: 5,
    padding: 30,
  },
  text: {
    textAlign: "right",
    textTransform: "uppercase",
    fontSize: 20,
    fontWeight: "500",
  },
});
