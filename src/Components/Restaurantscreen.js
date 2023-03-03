import { StatusBar as Expostatusbar } from "expo-status-bar";
import React, { useContext, useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
  FlatList,
} from "react-native";
import { Favouritecards } from "./favouritebar";
import { Searchbar } from "react-native-paper";
import { Restaurantinfo } from "../Features/Restaurantinfo";
import { RestContext } from "../services/restaurants/restaurant.context";
import { ActivityIndicator, Colors } from "react-native-paper";
import { LocationContext } from "../services/location/locationcontext";
export const Restaurantscreen = ({ navigation }) => {
  const { search, keyword } = useContext(LocationContext);
  const [searchword, setSearchword] = useState(keyword);
  const { loading, error, restaurants } = useContext(RestContext);
  const [isToggled, setIsToggled] = useState(false);
  useEffect(() => {
    console.log("niceeeeeeeeee");
    setSearchword(keyword);
  }, [keyword]);
  return (
    <View style={styles.container}>
      {loading && (
        <View style={{ position: "absolute", top: "50%", left: "50%" }}>
          <ActivityIndicator
            style={{ marginLeft: -25 }}
            size={50}
            animating={true}
            color={Colors}
          />
        </View>
      )}

      <View style={styles.input}>
        <Searchbar
          icon={isToggled ? "heart" : "heart-outline"}
          onIconPress={() => setIsToggled(!isToggled)}
          placeholder="Search For A Location"
          onSubmitEditing={() => {
            search(searchword);
          }}
          value={searchword}
          onChangeText={(text) => setSearchword(text)}
        />
      </View>
      {isToggled && <Favouritecards />}
      <FlatList
        style={{ flex: 1 }}
        data={restaurants}
        renderItem={({ item }) => (
          <>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetails", {
                  restaurant: item,
                })
              }
            >
              <Restaurantinfo restaurant={item} />
              <View style={{ paddingBottom: 10 }} />
            </TouchableOpacity>
          </>
        )}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ padding: 16 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: StatusBar.currentHeight,
  },
  input: {
    padding: 16,
  },
});
