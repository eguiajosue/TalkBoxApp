import React, { useState } from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  StatusBar,
  TextInput,
  View,
  FlatList,
  LayoutAnimation,
} from "react-native";
import { Avatar, Icon } from "@rneui/base";
import { commonPhrasesCategory, wordsCategories } from "../data/categories";
import TabItem from "../components/TabItem";
import CommonPhrasesList from "../components/CommonPhrases/CommonPhrasesList";
import AvatarIcon from "../assets/images/avatar.png";
import renderSeparator from "../components/renderSeparator";
import commonPhrases from "../data/commonPhrases";
import { useRoute } from "@react-navigation/native";
import * as Speech from "expo-speech";

const layoutAnimationConfig = {
  duration: 300,
  update: {
    type: LayoutAnimation.Types.easeInEaseOut,
  },
  delete: {
    duration: 100,
    type: LayoutAnimation.Types.easeInEaseOut,
    property: LayoutAnimation.Properties.opacity,
  },
};

const Home = ({ navigation }) => {
  const words = [
    { id: 1, title: "hello" },
    { id: 2, title: "my" },
    { id: 3, title: "name" },
    { id: 4, title: "is" },
  ];

  const route = useRoute();

  // Tabs
  const [status, setStatus] = useState("todos");

  // Frases comunes
  const [dataList, setDataList] = useState(commonPhrases);

  // Palabras en para realizar una frase personalizada
  const [wordsData, setWordsData] = useState(words);

  const [disabled, setDisabled] = useState(false);

  const setStatusFilter = (status) => {
    if (status !== "todos") {
      setDataList([...commonPhrases.filter((e) => e.category === status)]);
    } else {
      setDataList(commonPhrases);
    }
    setStatus(status);
  };

  const handleStatus = ({ id }) => {
    setStatus(setStatusFilter(id));
  };

  const muteVoice = () => {
    Speech.stop();
  };

  const speak = (sentence) => {
    Speech.speak(sentence);
  };

  const deleteWordByID = (id) => {
    const filteredWords = wordsData.filter((word) => word.id !== id);
    setWordsData(filteredWords);
    LayoutAnimation.configureNext(layoutAnimationConfig);
  };

  const wordsArray = wordsData.map((word) => word.title);

  const wordsString = wordsArray.join(" ");
  console.log(wordsString);

  const renderItem = ({ item }) => {
    return (
      <View style={styles.wordContainer}>
        <Text style={styles.wordText}>{item.title}</Text>
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => deleteWordByID(item.id)}
        >
          <Icon name="close" color="#fff" />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <Avatar
          size={35}
          source={AvatarIcon}
          rounded
          containerStyle={{ backgroundColor: "#c3c3c3", marginLeft: 13 }}
        />
        <Text style={styles.title}>
          Bienvenido <Text style={styles.name}>{route.params?.name}</Text>!
        </Text>
      </View>

      <View style={styles.words}>
        <FlatList
          style={{ paddingHorizontal: 0 }}
          data={wordsData}
          renderItem={renderItem}
          horizontal
          ItemSeparatorComponent={<View style={{ marginHorizontal: 2.5 }} />}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
        />

        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            onPress={() => speak(wordsString)}
            style={{
              backgroundColor: "#e63946",
              borderRadius: 10,
              marginHorizontal: 2,
            }}
          >
            <Icon
              color="#fff"
              name="volume-up"
              style={{
                padding: 10,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => muteVoice()}
            style={{
              backgroundColor: "#e63946",
              borderRadius: 10,
              marginHorizontal: 2,
            }}
          >
            <Icon
              color="#fff"
              name="volume-mute"
              style={{
                padding: 10,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity
        style={styles.createPhraseButton}
        onPress={() => {
          navigation.navigate("CreatePhrase");
        }}
      >
        <Text style={{ color: "#fff", textAlign: "center", fontSize: 20 }}>
          Abrir menu de palabras
        </Text>
      </TouchableOpacity>

      <View style={styles.tabContainer}>
        <Text style={styles.subtitle}>Categorias</Text>
        <View>
          <FlatList
            data={commonPhrasesCategory}
            renderItem={({ item }) => (
              <TabItem item={item} onPress={() => handleStatus(item)} />
            )}
            keyExtractor={(item) => item.id}
            horizontal
            ItemSeparatorComponent={renderSeparator}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>

      <View style={styles.commonPhrasesContainer}>
        <Text style={styles.subtitle}>Frases comunes</Text>
        <CommonPhrasesList data={dataList} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  title: {
    fontSize: 25,
    fontWeight: "400",
    padding: 12,
  },
  subtitle: {
    padding: 10,
    fontWeight: "500",
    marginLeft: 5,
  },
  words: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  input: {
    width: "75%",
    height: 50,
    borderRadius: 15,
    backgroundColor: "#DBDBDB60",
  },
  tabContainer: {
    paddingHorizontal: 10,
  },
  createPhraseButton: {
    margin: 10,
    padding: 10,
    borderRadius: 15,
    backgroundColor: "#e63946",
  },
  commonPhrasesContainer: {
    flex: 1,
    marginBottom: 40,
  },
  text: {
    textTransform: "capitalize",
    fontWeight: 800,
  },
  wordContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#c1c1c1",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
  },
  wordText: {
    fontSize: 16,
    color: "#000",
  },
  iconContainer: {
    marginLeft: 40,
  },
});

export default Home;
