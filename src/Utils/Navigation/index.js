import React, { useContext } from "react";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { AppNavigation } from "./app.navigation";
import { AccountNavigator } from "./Accountnavigator";
import { AuthenticationContext } from "../../services/Authentication/authcontext";
export const Navigator = () => {
  const { user } = useContext(AuthenticationContext);
  console.log("hello")
  return (<>
  
  {user ?<AppNavigation/>:<NavigationContainer>
           <AccountNavigator />
         </NavigationContainer>}
  </>
    // <>
    //   {isAuthenticated ? (
    //     <AppNavigation />
    //   ) : (
    //     
    //   )}
    // </>
  );
};
