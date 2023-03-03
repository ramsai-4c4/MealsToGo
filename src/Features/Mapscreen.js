import React, { useContext, useState, useEffect } from "react";
import MapView ,{Marker}from "react-native-maps";
import { RestContext } from "../services/restaurants/restaurant.context";
import { LocationContext } from "../services/location/locationcontext";
import { Searchbar } from "react-native-paper";
import { StyleSheet, View } from "react-native";
export const MapScreen = () => {
  const { restaurants } = useContext(RestContext);
  //console.log(restaurants);
  const { keyword, search, location } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);
  const [latdelta, setLatdelta] = useState(0);
  const { lat, lng, viewport } = location;
  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);
  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;

    setLatdelta(northeastLat - southwestLat);
  }, [location, viewport]);
  return (
    <>
      <View style={styles.searchbar}>
        <Searchbar
          placeholder="Search for a location"
          icon="map"
          value={searchKeyword}
          onSubmitEditing={() => {
            console.log("fk");
            search(searchKeyword);
          }}
          onChangeText={(text) => {
            setSearchKeyword(text);
          }}
        />
      </View>
      <MapView
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latdelta,
          longitudeDelta: 0.02,
        }}
        style={{ height: "100%" }}
      >
        {restaurants.map((restaurant) => {
            return <Marker
            key={restaurant.name}
            title={restaurant.name}
            coordinate={{
              latitude: restaurant.geometry.location.lat,
              longitude: restaurant.geometry.location.lng,
            }}
          />
        })}
      </MapView>
    </>
  );
};
const styles = StyleSheet.create({
  searchbar: {
    position: "absolute",
    top: 40,
    zIndex: 99,
    width: "100%",
    padding: 20,
  },
});
