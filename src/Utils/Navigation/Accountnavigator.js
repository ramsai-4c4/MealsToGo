import React from "react";
import { Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { Accscreen } from "../../Features/account/Accscreen";
import { Login } from "../../Features/account/login";
import { Register } from "../../Features/account/register";
const Stack = createStackNavigator();

export const AccountNavigator = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen
      name="Main"
      component={Accscreen}
    />
    <Stack.Screen
      name="Login"
      component={Login}
    />
    <Stack.Screen
      name="Register"
      component={Register}
    />
  </Stack.Navigator>
);