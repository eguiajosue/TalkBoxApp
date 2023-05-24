import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "react-native";
import { Icon } from "@rneui/base";
import DropDownPicker from "react-native-dropdown-picker";

const CreateUser = ({ navigation }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");

  const [errors, setErrors] = useState({});
  const [showErrors, setShowErrors] = useState(false);

  const getErrors = (name, age, gender) => {
    const errors = {};
    if (!name) {
      errors.name = "Porfavor ingrese un correo electrónico";
    }
    if (!age) {
      errors.age = "Porfavor ingrese una edad";
    } else if (age < 0 || gender > 100) {
      errors.age = "Porfavor ingrese una edad válida";
    }
    if (!gender) {
      errors.gender = "Porfavor ingrese un género";
    }

    return errors;
  };

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Hombre", value: "hombre" },
    { label: "Mujer", value: "mujer" },
  ]);

  const register = () => {
    const errors = getErrors(name, age, gender);

    if (Object.keys(errors).length > 0) {
      setShowErrors(true);
      setErrors(showErrors && errors);
    } else {
      setErrors({});
      setShowErrors(false);
      navigation.navigate("Home", {
        name: name,
        age: age,
        gender: gender,
      });
      console.log("Registered");
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
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
            <TextInput
              style={styles.input}
              value={name}
              onChangeText={(value) => setName(value)}
            />
            {errors.name && <Text style={styles.error}>{errors.name}</Text>}
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Edad: </Text>
            <TextInput
              style={styles.input}
              value={age}
              onChangeText={(value) => setAge(value)}
              keyboardType="number-pad"
            />
            {errors.age && <Text style={styles.error}>{errors.age}</Text>}
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Genero: </Text>
            <TextInput
              style={styles.input}
              value={gender}
              onChangeText={(value) => setGender(value)}
            />
            {errors.gender && <Text style={styles.error}>{errors.gender}</Text>}
          </View>
        </View>
      </View>

      <View>
        <TouchableOpacity style={styles.button} onPress={register}>
          <Text style={{ color: "#fff", textAlign: "center" }}>Continuar</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    padding: 20,
    backgroundColor: "#fff",
    justifyContent: "space-evenly",
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
  error: {
    color: "red",
    opacity: 0.5,
    fontSize: 10,
    textAlign: "right",
  },
});

export default CreateUser;
