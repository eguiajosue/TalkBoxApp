import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Title } from "../components/Login/Title";
import { Icon } from "../components/Icon";
import { COLORS } from "../constants";

const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Title welcomeTo="¡Bienvenido de vuelta a" title="TalkBox" />

      <View style={styles.form}>
        <TextInput style={styles.input} placeholder="Correo Electronico" />
        <View>
          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            secureTextEntry={true}
          />
          <TouchableOpacity>
            <Text style={styles.forgotPassword}>¿Olvidaste tu contraseña?</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.textButton}>Iniciar Sesión</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.socialMedia}>
        <Icon type={"google"} />
        <Icon type={"facebook"} />
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
  },

  titleContainer: {
    paddingHorizontal: 20,
  },

  title: {
    fontSize: 40,
    textAlign: "left",
  },

  form: {
    height: "33%",
    justifyContent: "space-around",
  },

  input: {
    backgroundColor: COLORS.secondary,
    padding: 10,

    borderRadius: 20,
    width: 350,
  },

  button: {
    backgroundColor: COLORS.primary,
    padding: 15,

    borderRadius: 10,
    width: 350,
  },

  textButton: {
    textAlign: "center",
    color: COLORS.light,
  },

  socialMedia: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  forgotPassword: {
    textAlign: "right",
    marginTop: 10,
    color: COLORS.error,
  },
});
