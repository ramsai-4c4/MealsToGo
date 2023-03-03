import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { List } from "react-native-paper";
import { AuthenticationContext } from "../services/Authentication/authcontext";
export const Settingscreen = () => {
  const { onLogout } = useContext(AuthenticationContext);
  return (
    <View>
      <List.Section>
        <List.Item
          style={{ padding: 16 }}
          title="Favourites"
          description="View your favourites"
          left={(props) => <List.Icon {...props} color="black" icon="heart" />}
    
        />
        <List.Item
          style={{ padding: 16 }}
          title="Logout"
          left={(props) => <List.Icon {...props} color="black" icon="door" />}
          onPress={onLogout}
        />
      </List.Section>
    </View>
  );
};
