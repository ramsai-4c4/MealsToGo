import React ,{useContext,useState}from "react";
import { View,StyleSheet,Text } from "react-native";
import { AuthenticationContext } from "../../services/Authentication/authcontext";
import { Screen } from "./screen";
import { TextInput,Button } from "react-native-paper";
export const Register=()=>{
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onRegister, error } = useContext(AuthenticationContext);
  const [repeatedPassword, setRepeatedPassword] = useState("");
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
          <TextInput
            style={styles.input}
            textContentType="password"
            secureTextEntry
            onChangeText={(p) => setRepeatedPassword(p)}
            placeholder="Enter Repeated Password"
          />
          {error && <Text style={styles.error}>Invalid Register</Text>}
          <Button
            icon="lock-open-outline"
            onPress={() => onRegister(email, password,repeatedPassword)}
            buttonColor="blue"
            mode="contained"
          >
            Register
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
