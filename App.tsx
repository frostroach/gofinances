import { StatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import Dashboard from "./src/pages/App/Dashboard";
import { colors } from "./src/theme";

export default function App() {
  return (
    <ThemeProvider theme={colors}>
      <StatusBar style="dark" backgroundColor={colors.white100} />
      <Dashboard />
    </ThemeProvider>
  );
}
