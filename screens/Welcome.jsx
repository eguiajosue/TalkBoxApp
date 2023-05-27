import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import slides from "../data/slides";
import { SignButton } from "../components/Welcome/SignButton";
import { OnBoardingSlide } from "../components/Welcome/OnBoardingSlide";
import { COLORS } from "../constants";

const Welcome = ({ navigation }) => {
  _renderItem = ({ item }) => {
    return (
      <OnBoardingSlide
        image={item.image}
        title={item.title}
        description={item.description}
      />
    );
  };

  const handleLogin = () => {
    navigation.navigate("Login");
  };

  const handleSignUp = () => {
    navigation.navigate("SignUp");
  };

  return (
    <View style={styles.screenContainer}>
      <AppIntroSlider
        data={slides}
        renderItem={_renderItem}
        dotStyle={styles.dotStyle}
        activeDotStyle={styles.activeDotStyle}
      />

      <View style={styles.buttonContainer}>
        <SignButton title="Iniciar Sesion" type="login" onPress={handleLogin} />
        <SignButton title="Registrarse" type="signup" onPress={handleSignUp} />
      </View>

      <View style={styles.container}>
        <TouchableOpacity
          style={styles.noRegisterButton}
          onPress={() => {
            navigation.navigate("CreateUser");
          }}
        >
          <Text style={styles.noRegisterButtonText}>
            Continuar sin registrarse
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  container: {
    backgroundColor: COLORS.light,
  },
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: COLORS.primary,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  activeDotStyle: {
    backgroundColor: COLORS.primary,
  },
  dotStyle: {
    backgroundColor: "rgba(0, 0, 0, .2)",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: COLORS.light,
  },
  noRegisterButton: {
    backgroundColor: COLORS.light,
    padding: 10,
    marginBottom: 10,
  },
  noRegisterButtonText: {
    textAlign: "center",
  },
});

export default Welcome;
