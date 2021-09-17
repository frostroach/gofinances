import React from "react";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

import Dashboard from "./src/pages/App/Dashboard";
import { theme } from "./src/theme";

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_500Medium,
    Poppins_400Regular,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <ThemeProvider theme={theme}>
        <StatusBar style="light" backgroundColor={theme.colors.purple} />
        <Dashboard />
      </ThemeProvider>
    );
  }
}
