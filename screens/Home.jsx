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
} from "react-native";
import { Avatar } from "@rneui/base";
import { commonPhrasesCategory, wordsCategories } from "../data/categories";
import TabItem from "../components/TabItem";
import CommonPhrasesList from "../components/CommonPhrases/CommonPhrasesList";
import AvatarIcon from "../assets/images/avatar.png";
import renderSeparator from "../components/renderSeparator";
import commonPhrases from "../data/commonPhrases";
import { useRoute } from "@react-navigation/native";

const Home = ({ navigation }) => {
  const route = useRoute();

  const [status, setStatus] = useState("todos");
  const [dataList, setDataList] = useState(commonPhrases);

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
    console.log(id);
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
          Bienvenido <Text>{route.params.name}</Text>!
        </Text>
      </View>
      <View style={styles.words}>
        <TextInput
          style={styles.input}
          placeholder="¿Que desea comunicar?"
          editable={false}
        />
        <TouchableOpacity
          style={styles.createPhraseButton}
          onPress={() => {
            navigation.navigate("CreatePhrase");
          }}
        >
          <Text style={{ color: "#fff" }}>Crear frase</Text>
        </TouchableOpacity>
      </View>

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
    fontWeight: "500",
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
    paddingHorizontal: 24,
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
    marginLeft: 10,
    padding: 10,
    borderRadius: 15,
    backgroundColor: "#e63946",
  },
  commonPhrasesContainer: {
    flex: 1,
    paddingHorizontal: 10,
    marginBottom: 40,
  },
});

export default Home;
