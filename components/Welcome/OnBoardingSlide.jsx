import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  useWindowDimensions,
} from "react-native";

import { COLORS } from "../../constants";

export function OnBoardingSlide({ image, title, description }) {
  const { width } = useWindowDimensions();

  return (
    <View style={styles.container}>
      <Image
        source={image}
        style={[
          styles.image,
          {
            width,
            resizeMode: "contain",
          },
        ]}
      />

      <View
        style={{
          flex: 0.3,
        }}
      >
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.light,
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
});
