import React from "react";
import { ImageBackground, View } from "react-native";
import image from "../../../assets/favicon.png";

export const Screen = () => {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        style={{ flex: 1, justifyContent: "center",alignItems: "center" }}
        source={require("../../../assets/home_bg.png")}
      />
    </View>
  );
};
