import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "../pages/Auth/Login";

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => {
  const screenOptions = { headerShown: false };
  return (
    <Auth.Navigator screenOptions={screenOptions}>
      <Auth.Screen name="Login" component={Login} />
    </Auth.Navigator>
  );
};

export default AuthRoutes;
