import React from "react";
import { Text } from "react-native";
import { createStackNavigator,TransitionPresets} from "@react-navigation/stack";

import { Restaurantscreen } from "../../Components/Restaurantscreen";
import { Restaurantdetails } from "./restaurantdetails";
const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator headerMode="none" screenOptions={{...TransitionPresets.ModalPresentationIOS}} >
      <RestaurantStack.Screen
        name="Restaurantlist"
        component={Restaurantscreen}
      />
      <RestaurantStack.Screen
        name="RestaurantDetails"
        component={Restaurantdetails}
      />
      
    </RestaurantStack.Navigator>
  );
};
