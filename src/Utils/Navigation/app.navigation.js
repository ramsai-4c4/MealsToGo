import React from "react";
import {Restaurantscreen} from "../../Components/Restaurantscreen"
import { Text } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { RestaurantsNavigator } from "./restaurantnavigator";
import { MapScreen } from "../../Features/Mapscreen";
import { Settingscreen } from "../../Features/Settings";

const Tab=createBottomTabNavigator()
export const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        screenOptions={({ route, }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === "Restaurants") {
              iconName = "md-restaurant";
            } else if (route.name === "Settings") {
              iconName = "md-settings";
            } else if (route.name === "Map") {
              iconName = "md-map";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "grey",
        }}
      >
        <Tab.Screen  name="Restaurants" options={{headerShown:false}} component={RestaurantsNavigator} />
        <Tab.Screen name="Map" options={{headerShown:false}} component={MapScreen} />
        <Tab.Screen name="Settings" component={Settingscreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
