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
import { AudioButton } from "../components/Home/AudioButton";
import { WordCard } from "../components/Home/WordCard";
import { COLORS } from "../constants";

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
    { id: 1, title: "está" },
    { id: 2, title: "sobre" },
    { id: 3, title: "la" },
    { id: 4, title: "mesa" },
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
      <WordCard title={item.title} onPress={() => deleteWordByID(item.id)} />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
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
          <AudioButton iconName="volume-up" />
          <AudioButton iconName="volume-mute" />
        </View>
      </View>

      <TouchableOpacity
        style={styles.createPhraseButton}
        onPress={() => {
          navigation.navigate("CreatePhrase");
        }}
      >
        <Text style={styles.textButton}>
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
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
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
    backgroundColor: COLORS.secondary,
  },
  tabContainer: {
    paddingHorizontal: 10,
  },
  createPhraseButton: {
    margin: 10,
    padding: 10,
    borderRadius: 15,
    backgroundColor: COLORS.primary,
  },
  commonPhrasesContainer: {
    flex: 1,
    marginBottom: 40,
  },
  text: {
    textTransform: "capitalize",
    fontWeight: 800,
  },
  textButton: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
  },
  wordContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: COLORS.secondary,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
  },
  wordText: {
    fontSize: 16,
    color: COLORS.dark,
  },
  iconContainer: {
    marginLeft: 40,
  },
});

export default Home;
