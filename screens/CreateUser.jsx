import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "react-native";
import { Icon } from "@rneui/base";

const CreateUser = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>Creación de usuario</Text>
        <Text style={styles.comment}>
          Para continuar ingrese los datos para el uso de la aplicacion
        </Text>
      </View>

      <View style={styles.form}>
        <View>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Nombre: </Text>
            <TextInput style={styles.input} />
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Edad: </Text>
            <TextInput style={styles.input} />
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Genero: </Text>
            <TextInput style={styles.input} />
          </View>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <Text style={{ color: "#fff", textAlign: "center" }}>Continuar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    padding: 20,
    backgroundColor: "#fff",
  },
  form: {
    display: "flex",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 50,
  },
  comment: {
    color: "#a1a1a1",
    marginBottom: 20,
  },
  image: {
    width: "50%",
    height: "50%",
    resizeMode: "contain",
    justifyContent: "center",
  },
  section: {
    marginTop: 10,
  },
  sectionTitle: {
    fontWeight: "600",
    marginBottom: 5,
  },
  input: {
    backgroundColor: "#e1e1e1",
    padding: 10,
    borderRadius: 12,
  },
  button: {
    backgroundColor: "#e63946",
    padding: 15,
    marginTop: 30,
    borderRadius: 15,
  },
});

export default CreateUser;
