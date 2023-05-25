import "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Home";
import Login from "./screens/Login";
import CreatePhrase from "./screens/CreatePhrase";
import Welcome from "./screens/Welcome";
import SignUp from "./screens/SignUp";
import CreateUser from "./screens/CreateUser";
import Sustantivos from "./screens/categories/Sustantivos";
import Adjetivos from "./screens/categories/Adjetivos";
import Conjugations from "./screens/categories/Conjugations";
import Idioms from "./screens/categories/Idioms";
import Pronouns from "./screens/categories/Pronouns";
import Verbs from "./screens/categories/Verbs";
// import auth from "@react-native-firebase/auth";

export default function App() {
  const Stack = createStackNavigator();

  // const [initializing, setInitializing] = useState(true);
  // const [user, setUser] = useState();

  // function onAuthStateChanged(user) {
  //   setUser(user);
  //   if (initializing) setInitializing(false);
  // }

  // useEffect(() => {
  //   const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
  //   return subscriber;
  // }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="CreateUser" component={CreateUser} />
        <Stack.Screen name="CreatePhrase" component={CreatePhrase} />
        <Stack.Screen name="Verbos" component={Verbs} />
        <Stack.Screen name="Adjetivos" component={Adjetivos} />
        <Stack.Screen name="Sustantivos" component={Sustantivos} />
        <Stack.Screen name="Conjugaciones" component={Conjugations} />
        <Stack.Screen name="Locuciones" component={Idioms} />
        <Stack.Screen name="Pronombres" component={Pronouns} />
        {/* {user ? (
        ) : (
          <>
          </>
        )} */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
