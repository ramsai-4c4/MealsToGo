import React, { useContext } from "react";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet ,Text} from "react-native";
import { TouchableOpacity } from "react-native";
import { FavouritesContext } from "../services/favourites/favouritescontext";
export const Favourite = ({ restaurant }) => {
  const { favourites, addToFavourites, removeFromFavourites }=useContext(FavouritesContext);

  const isFavourite = favourites.find((r) => r.placeId === restaurant.placeId);
  return  (
    <TouchableOpacity
      style={styles.touch}
      onPress={() =>
        !isFavourite
          ? addToFavourites(restaurant)
          : removeFromFavourites(restaurant)
      }
    >
    <Ionicons 
    name={isFavourite ? "md-heart" :'md-heart-outline'}
    size={24} 
    color={isFavourite ? "red" : "white"} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touch: {
    position: "absolute",
    top: 25,
    right: 25,
    zIndex: 19,
  },
});
