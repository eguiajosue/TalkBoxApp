import { StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SocialIcon } from "@rneui/base";
import { Touchable } from "react-native";

const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          <Text style={{ fontWeight: 200 }}>¡Bienvenido de vuelta a </Text>
          <Text style={{ fontWeight: 700 }}>TalkBox</Text>
        </Text>
      </View>

      <View style={styles.form}>
        <TextInput style={styles.input} placeholder="Correo Electronico" />
        <View>
          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            secureTextEntry={true}
          />
          <TouchableOpacity>
            <Text
              style={{
                textAlign: "right",
                marginTop: 10,
                color: "#dc858b",
              }}
            >
              ¿Olvidaste tu contraseña?
            </Text>
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
        <View style={styles.iconWrapper}>
          <SocialIcon button type="google" />
        </View>
        <View style={styles.iconWrapper}>
          <SocialIcon button type="facebook" />
        </View>
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
    backgroundColor: "#ededed",
    padding: 10,

    borderRadius: 20,
    width: 350,
  },

  button: {
    backgroundColor: "#e63946",
    padding: 15,

    borderRadius: 10,
    width: 350,
  },

  textButton: {
    textAlign: "center",
    color: "#fff",
  },

  socialMedia: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  iconWrapper: {
    marginHorizontal: 10,
  },
});
