"use strict";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";

module.exports = StyleSheet.create({
  // Estilos para las palabras y encabezados
  wordContainer: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  wordItem: {
    flex: 0.5,
    marginHorizontal: 16,
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    borderRadius: 25,
  },
  wordHeader: {
    fontSize: 32,
    backgroundColor: "#fff",
  },
  wordTitle: {
    fontSize: 24,
    textTransform: "capitalize",
  },
});
