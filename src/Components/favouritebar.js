import React,{useContext} from "react";
import {Text,View,ScrollView,TouchableOpacity} from "react-native";
import { CompactInfo } from "./Compactinfo";
import { FavouritesContext } from "../services/favourites/favouritescontext";
export const Favouritecards=()=>{
    const {favourites}=useContext(FavouritesContext)
    if (!favourites.length) {
        return null;
      }

    return <View style={{padding:10}}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((restaurant) => {
          const key = restaurant.name;
          console.log(key)
          return (
            <View style={{marginLeft:10}}>
              <TouchableOpacity
                // onPress={() =>
                //   onNavigate("RestaurantDetail", {
                //     restaurant,
                //   })
                // }
              >
                <CompactInfo restaurant={restaurant}/>
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
    </View>
}