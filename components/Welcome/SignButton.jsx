import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { COLORS } from "../../constants";

/**
 *
 * @param {string} title - Texto del botón
 * @param {function} onPress - Función que realiza
 * @param {string} type - "login" / "signup"
 * @returns
 */

export function SignButton({ title, onPress, type }) {
  const getButtonStyle = () => {
    if (type === "login") {
      return [styles.button, styles.loginButton];
    } else if (type === "signup") {
      return [styles.button, styles.signupButton];
    } else {
      return styles.button;
    }
  };

  const getTextStyle = () => {
    if (type === "login") {
      return [styles.text, styles.loginText];
    } else if (type === "signup") {
      return [styles.text, styles.signUpText];
    } else {
      return styles.text;
    }
  };

  const handlePress = () => {
    if (onPress) {
      onPress();
    }
  };

  return (
    <TouchableOpacity style={getButtonStyle()} onPress={handlePress}>
      <Text style={getTextStyle()}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    marginBottom: 20,
    paddingVertical: 15,
    paddingHorizontal: 45,
    borderRadius: 20,
  },

  loginButton: {
    backgroundColor: COLORS.primary,
  },

  signupButton: {
    backgroundColor: "#e1e1e1",
  },

  text: {
    fontSize: 15,
  },

  signUpText: {
    color: COLORS.dark,
  },

  loginText: {
    color: COLORS.light,
  },
});
