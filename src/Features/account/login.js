import React, { useState, useContext } from "react";
import { AuthenticationContext } from "../../services/Authentication/authcontext";
import { Screen } from "./screen";
import { View, StyleSheet, Text } from "react-native";
import { TextInput, Button } from "react-native-paper";
export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onLogin, error } = useContext(AuthenticationContext);

  return (
    <>
      <Screen />
      <View style={styles.loginmain}>
        <View style={styles.inside}>
          <TextInput
            style={styles.input}
            onChangeText={(u) => setEmail(u)}
            placeholder="Enter Email"
          />
          <TextInput
            style={styles.input}
            textContentType="password"
            secureTextEntry
            onChangeText={(p) => setPassword(p)}
            placeholder="Enter Password"
          />
          {error && <Text style={styles.error}>Invalid login</Text>}
          <Button
            icon="lock-open-outline"
            onPress={() => onLogin(email, password)}
            buttonColor="skyblue"
            mode="contained"
          >
            Login
          </Button>
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  loginmain: {
    position: "absolute",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    opacity: 0.7,
  },
  input: {
    width: 250,
    marginBottom: 10,
  },
  inside: {
    backgroundColor: "#fff",
    padding: 25,
    opacity: 0.7,
    border: "solid",
  },
  error: {
    color: "red",
    padding: 10,
  },
});
