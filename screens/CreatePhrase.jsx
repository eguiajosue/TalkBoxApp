import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Tab, TabView, FAB } from "@rneui/themed";
import * as Speech from "expo-speech";

const CreatePhrase = () => {
  const [index, setIndex] = useState(0);

  const palabrasPronombres = [
    { title: "Yo" },
    { title: "Tú" },
    { title: "Él" },
    { title: "Ella" },
    { title: "Nosotros" },
    { title: "Nosotras" },
    { title: "Ellos" },
    { title: "Ellas" },
    // Agrega más pronombres aquí
  ];

  const palabrasPreposiciones = [
    { title: "A" },
    { title: "De" },
    { title: "En" },
    { title: "Por" },
    { title: "Para" },
    { title: "Con" },
    // Agrega más preposiciones aquí
  ];

  const palabrasVerbos = [
    { title: "Correr" },
    { title: "Saltar" },
    { title: "Hablar" },
    { title: "Comer" },
    { title: "Dormir" },
    { title: "Estudiar" },
    // Agrega más verbos aquí
  ];

  const palabrasTiempo = [
    { title: "Día" },
    { title: "Noche" },
    { title: "Mañana" },
    { title: "Tarde" },
    { title: "Semana" },
    { title: "Mes" },
    // Agrega más palabras relacionadas con el tiempo aquí
  ];

  const palabrasAnimales = [
    { title: "Perro" },
    { title: "Gato" },
    { title: "Elefante" },
    { title: "León" },
    { title: "Pájaro" },
    { title: "Tigre" },
    // Agrega más animales aquí
  ];

  const palabrasComida = [
    { title: "Manzana" },
    { title: "Pizza" },
    { title: "Arroz" },
    { title: "Hamburguesa" },
    { title: "Ensalada" },
    { title: "Helado" },
    // Agrega más alimentos aquí
  ];

  const palabrasPartesCasa = [
    { title: "Sala" },
    { title: "Cocina" },
    { title: "Dormitorio" },
    { title: "Baño" },
    { title: "Comedor" },
    { title: "Jardín" },
    // Agrega más partes de la casa aquí
  ];

  const palabrasPartesCuerpo = [
    { title: "Cabeza" },
    { title: "Brazo" },
    { title: "Pierna" },
    { title: "Ojo" },
    { title: "Boca" },
    { title: "Mano" },
    // Agrega más partes del cuerpo aquí
  ];

  const palabrasEnfermedades = [
    { title: "Gripe" },
    { title: "Resfriado" },
    { title: "Fiebre" },
    { title: "Dolor de cabeza" },
    { title: "Dolor de estómago" },
    { title: "Asma" },
    // Agrega más enfermedades aquí
  ];

  const renderButton = ({ item }) => {
    // Función para manejar el evento onPress del botón
    const handleButtonPress = () => {
      Speech.speak(item.title);
    };

    return (
      <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
        <Text style={styles.buttonText}>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  const stopVoice = () => {
    Speech.stop();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Tab
        value={index}
        onChange={(e) => setIndex(e)}
        indicatorStyle={{
          backgroundColor: "white",
          height: 3,
        }}
        variant="primary"
        scrollable={true}
        titleStyle={styles.tabTitle}
      >
        <Tab.Item title="Pronombres" />
        <Tab.Item title="Preposiciones" />
        <Tab.Item title="Verbos" />
        <Tab.Item title="Tiempo" />
        <Tab.Item title="Animales" />
        <Tab.Item title="Comida" />
        <Tab.Item title="Casa" />
        <Tab.Item title="Cuerpo" />
        <Tab.Item title="Enfermedades" />
      </Tab>

      <TabView
        value={index}
        onChange={setIndex}
        animationType="spring"
        containerStyle={{}}
      >
        <TabView.Item>
          <FlatList
            data={palabrasPronombres}
            renderItem={renderButton}
            keyExtractor={(item, index) => index.toString()}
          />
        </TabView.Item>
        <TabView.Item>
          <FlatList
            data={palabrasPreposiciones}
            renderItem={renderButton}
            keyExtractor={(item, index) => index.toString()}
          />
        </TabView.Item>
        <TabView.Item>
          <FlatList
            data={palabrasVerbos}
            renderItem={renderButton}
            keyExtractor={(item, index) => index.toString()}
          />
        </TabView.Item>
        <TabView.Item>
          <FlatList
            data={palabrasTiempo}
            renderItem={renderButton}
            keyExtractor={(item, index) => index.toString()}
          />
        </TabView.Item>
        <TabView.Item>
          <FlatList
            data={palabrasAnimales}
            renderItem={renderButton}
            keyExtractor={(item, index) => index.toString()}
          />
        </TabView.Item>
        <TabView.Item>
          <FlatList
            data={palabrasComida}
            renderItem={renderButton}
            keyExtractor={(item, index) => index.toString()}
          />
        </TabView.Item>
        <TabView.Item>
          <FlatList
            data={palabrasPartesCasa}
            renderItem={renderButton}
            keyExtractor={(item, index) => index.toString()}
          />
        </TabView.Item>
        <TabView.Item>
          <FlatList
            data={palabrasPartesCuerpo}
            renderItem={renderButton}
            keyExtractor={(item, index) => index.toString()}
          />
        </TabView.Item>
        <TabView.Item>
          <FlatList
            data={palabrasEnfermedades}
            renderItem={renderButton}
            keyExtractor={(item, index) => index.toString()}
          />
        </TabView.Item>
      </TabView>

      <FAB
        icon={{ name: "stop", color: "white" }}
        size="large"
        placement="right"
        color="#e63946"
        onPress={stopVoice}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  button: {
    backgroundColor: "#DEC1B6",
    paddingVertical: 30,
    margin: 5,
    borderRadius: 10,
    width: 400,
    textAlign: "center",
  },
  buttonText: {
    textAlign: "center",
    fontSize: 24,
  },
  tabTitle: {
    fontSize: 24,
    textAlign: "center",
    textTransform: "capitalize",
  },
});

export default CreatePhrase;
