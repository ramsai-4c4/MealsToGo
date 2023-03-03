import React, { useState, useEffect } from "react";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { StatusBar as Expostatusbar } from "expo-status-bar";
import { Navigator } from "./src/Utils/Navigation";
import { Restaurantacontext } from "./src/services/restaurants/restaurant.context";
import { LocationContextProvider } from "./src/services/location/locationcontext";
import { FavouriteProvider } from "./src/services/favourites/favouritescontext";
import { AuthenticationContextProvider } from "./src/services/Authentication/authcontext";
const firebaseConfig = {
  apiKey: "AIzaSyBuxZiR9LXyUKvaoDqi2uZ_jJJm0b9oPwE",
  authDomain: "mealstogo-68415.firebaseapp.com",
  projectId: "mealstogo-68415",
  storageBucket: "mealstogo-68415.appspot.com",
  messagingSenderId: "1063640741462",
  appId: "1:1063640741462:web:ad42a508b89652860fadf7",
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)
}

export default function App() {
  
  return (
    <>
      <FavouriteProvider>
        <AuthenticationContextProvider>
        <LocationContextProvider>
          <Restaurantacontext>
            <Navigator />
          </Restaurantacontext>
        </LocationContextProvider>
        </AuthenticationContextProvider>
      </FavouriteProvider>

      <Expostatusbar style="auto" />
    </>
  );
}
