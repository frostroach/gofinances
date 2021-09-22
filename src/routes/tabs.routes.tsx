import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "styled-components";

import Dashboard from "../pages/App/Dashboard";
import Signup from "../pages/App/Signup";
import Briefing from "../pages/App/Briefing";
import { Platform } from "react-native";
import { heightPercentageToDP } from "../utils";

const Tabs = createBottomTabNavigator();

const TabsRoutes: React.FC = () => {
  const theme = useTheme();

  const screenOptions = {
    headerShown: false,
    tabBarActiveTintColor: theme.colors.orange,
    tabBarInactiveTintColor: theme.colors.gray100,
    tabBarStyle: {
      paddingVertical: Platform.OS === "ios" ? heightPercentageToDP("3%") : 0,
    },
  };

  return (
    <Tabs.Navigator screenOptions={screenOptions}>
      <Tabs.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons
              name="format-list-bulleted"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Signup"
        component={Signup}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="attach-money" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Briefing"
        component={Briefing}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="pie-chart" size={size} color={color} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

export default TabsRoutes;
