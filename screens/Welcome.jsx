import React from "react";
// import Icon from 'react-native-vector-icons/Ionicons';
import {
  StyleSheet,
  View,
  Text,
  Image,
  useWindowDimensions,
  TouchableOpacity,
  Button,
} from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import slides from "../data/slides";
import Icon from "react-native-vector-icons/Ionicons";

const Welcome = ({ navigation }) => {
  const { width } = useWindowDimensions();

  _renderItem = ({ item }) => {
    return (
      <View style={[styles.container, {}]}>
        <Image
          source={item.image}
          style={[styles.image, { width, resizeMode: "contain" }]}
        />

        <View style={{ flex: 0.3 }}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
      </View>
    );
  };

  _renderDoneButton = () => {
    return (
      <TouchableOpacity
        style={styles.buttonCircle}
        onPress={() => navigation.navigate("Home")}
      >
        <Icon name="md-checkmark" color="rgba(255, 255, 255, .9)" size={24} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <AppIntroSlider
        data={slides}
        renderItem={_renderItem}
        dotStyle={{ backgroundColor: "rgba(0, 0, 0, .2)" }}
        activeDotStyle={{ backgroundColor: "#e63946" }}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.loginButton]}
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <Text style={{ color: "#fff" }}>Iniciar Sesion</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.signupButton]}
          onPress={() => {
            navigation.navigate("SignUp");
          }}
        >
          <Text>Registrarse</Text>
        </TouchableOpacity>
      </View>

      <View style={{ backgroundColor: "#ffff" }}>
        <TouchableOpacity
          style={styles.noRegisterButton}
          onPress={() => {
            navigation.navigate("CreateUser");
          }}
        >
          <Text style={{ textAlign: "center" }}>Continuar sin registrarse</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: "#e63946",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "800",
    textAlign: "center",
    fontSize: 28,
    paddingHorizontal: 5,
    marginBottom: 20,
  },
  description: {
    fontWeight: "300",
    textAlign: "center",
    paddingHorizontal: 64,
  },
  image: {
    flex: 0.7,
    justifyContent: "center",
  },

  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#ffff",
  },

  button: {
    marginBottom: 20,
    paddingVertical: 15,
    paddingHorizontal: 45,
    borderRadius: 20,
  },

  loginButton: {
    backgroundColor: "#e63946",
  },

  signupButton: {
    backgroundColor: "#e1e1e1",
  },

  noRegisterButton: {
    backgroundColor: "#ffff",
    padding: 10,
    marginBottom: 10,
  },
});

export default Welcome;
