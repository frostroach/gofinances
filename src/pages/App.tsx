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

import Dashboard from "./App/Dashboard";
import { theme } from "../theme";
import Signup from "./App/Signup";
import TabsRoutes from "../routes/tabs.routes";

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
      <NavigationContainer>
        <ThemeProvider theme={theme}>
          <StatusBar style="light" backgroundColor={theme.colors.purple} />
          <TabsRoutes />
        </ThemeProvider>
      </NavigationContainer>
    );
  }
}
