import React from "react";
import { Screen } from "./screen";
import { View, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
export const Accscreen = ({navigation}) => {
  return (
    <>
    <Screen/>
      <View style={styles.trans}>
        <View style={styles.main}>
          <View style={styles.inner}>
          <Button icon="lock-open-outline" 
          onPress={()=>navigation.navigate("Login")}
          mode="contained">Login</Button>
          <View style={{marginBottom:15}} />
          <Button icon="lock-open-outline"
            onPress={()=>navigation.navigate("Register")}
           buttonColor="skyblue" mode="contained">Register</Button>
          </View>
        </View>
      </View>
      </>
  );
};
const styles = StyleSheet.create({
  trans: {
    position: "absolute",
    width: "100%",
    height: "100%",
    flex:1,
    zIndex: 19,
    backgroundColor:"fff",
  },
  main:{
    flexDirection:"column",
    justifyContent:"center",
    flex:1,
    alignItems:"center",
    border:"solid",
    backgroundColor:"transparent"
  },
  inner:{
    backgroundColor:"#fff",
    padding:23,
    opacity:0.8
  }
});

