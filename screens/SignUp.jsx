import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { SocialIcon } from "@rneui/base";

const SignUp = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errors, setErrors] = useState({});
  const [showErrors, setShowErrors] = useState(false);

  const getErrors = (email, password, confirmPasswords) => {
    const errors = {};
    if (!email) {
      errors.email = "Porfavor ingrese un correo electrónico";
    } else if (!email.includes("@")) {
      errors.email = "Porfavor ingrese un correo electrónico válido";
    }

    if (!password) {
      errors.password = "Porfavor ingrese una contraseña";
    } else if (password.length < 8) {
      errors.password = "La contraseña debe de contener mínimo 8 characteres";
    } else if (password !== confirmPassword) {
      errors.confirmPassword = "Las contraseñas no coinciden";
    }

    return errors;
  };

  const handlerRegister = () => {
    const errors = getErrors(email, password, confirmPassword);

    if (Object.keys(errors).length > 0) {
      setShowErrors(true);
      setErrors(showErrors && errors);
      console.log(errors);
    } else {
      setErrors({});
      setShowErrors(false);
      console.log("Registered");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>Registro</Text>
      </View>

      <View style={styles.form}>
        <View>
          {/* <View style={styles.section}>
            <Text style={styles.sectionTitle}>Nombre: </Text>
            <TextInput style={styles.input} />
          </View> */}

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Correo Electrónico: </Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={(value) => setEmail(value)}
            />
            {errors.email && <Text style={styles.error}>{errors.email}</Text>}
          </View>

          {/* <View style={styles.section}>
            <Text style={styles.sectionTitle}>Edad: </Text>
            <TextInput style={styles.input} />
          </View> */}

          {/* <View style={styles.section}>
            <Text style={styles.sectionTitle}>Genero: </Text>
            <TextInput style={styles.input} />
          </View> */}

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Contraseña: </Text>
            <TextInput
              keyboardType="visible-password"
              style={styles.input}
              value={password}
              onChangeText={(value) => setPassword(value)}
            />
            {errors.password && (
              <Text style={styles.error}>{errors.password}</Text>
            )}
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Confirmar contraseña: </Text>
            <TextInput
              keyboardType="visible-password"
              style={styles.input}
              value={confirmPassword}
              onChangeText={(value) => setConfirmPassword(value)}
            />
            {errors.confirmPassword && (
              <Text style={styles.error}>{errors.confirmPassword}</Text>
            )}
          </View>
        </View>

        <View style={{ alignItems: "center" }}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handlerRegister()}
          >
            <Text style={{ color: "#fff", textAlign: "center" }}>
              Crear cuenta
            </Text>
          </TouchableOpacity>

          <SocialIcon
            iconSize={25}
            onPress={() => navigation.navigate("Home")}
            button
            light
            style={{ width: "100%", marginTop: 20 }}
            title="Registrarse con Google"
            type="google"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  error: {
    color: "red",
    opacity: 0.5,
    fontSize: 10,
    textAlign: "right",
  },
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
    marginTop: 10,
    width: "100%",
    borderRadius: 15,
  },
});

export default SignUp;
