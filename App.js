import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./components/navigation/AppNavigator";
import OfflineNotice from "./components/OfflineNotice";
import AuthNavigator from "./components/navigation/AuthNavigator";
import Context from "./auth/context";
import jwtDecode from "jwt-decode";
import store from "./auth/store";
import AppLoading from "expo-app-loading";
import navigationTheme from "./components/navigation/navigationTheme";

export default function App() {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);

  const restoreUser = async () => {
    const user = await store.getUser();

    if (user) setUser(user);
  };

  if (!isReady)
    return (
      <AppLoading
        startAsync={restoreUser}
        onError={console.warn}
        onFinish={() => setIsReady(true)}
      />
    );

  return (
    <Context.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <NavigationContainer theme={navigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </Context.Provider>
  );
}
