import "react-native-gesture-handler";
import "intl";
import "intl/locale-data/jsonp/pt-BR";

import React from "react";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

import { theme } from "../theme";
import { AuthProvider, useAuth } from "../hooks/auth";
import Routes from "../routes";

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_500Medium,
    Poppins_400Regular,
    Poppins_700Bold,
  });

  const { userStoragedLoading } = useAuth();

  if (!fontsLoaded || userStoragedLoading) {
    return <AppLoading />;
  } else {
    return (
      <ThemeProvider theme={theme}>
        <StatusBar style="light" backgroundColor={theme.colors.purple} />
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </ThemeProvider>
    );
  }
}
