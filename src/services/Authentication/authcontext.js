import React, { createContext, useEffect, useState } from "react";
import { loginRequest } from "./authservice";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const onLogin = (email, password) => {
    console.log(email);
    setIsLoading(true);
    loginRequest(email, password)
      .then((u) => {
        console.log("user");
        setUser(u);
        setIsLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setIsLoading(false);
        setError(e);
      });
  };
  const onRegister = (email, password, repeatedPassword) => {
    if (password !== repeatedPassword) {
      setError("Error: Passwords do not match");
      return;
    }
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((u) => {
        setUser(u);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.toString());
      });
  };
  const onLogout=()=>{
    setUser(null);
    firebase.auth().signOut()
  }

  return (
    <AuthenticationContext.Provider
      value={{
        user,
        isLoading,
        error,
        onLogin,
        onRegister,
        onLogout
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
