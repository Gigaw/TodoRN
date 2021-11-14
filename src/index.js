//npm
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//screens
import SignInScreen from "./screens/SignInScreen/SignInScreen";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import SignUpScreen from "./screens/SignUpScreen/SignUpScreen";
import StartScreen from "./screens/StartScreen/StartScreen";
import { Provider } from "react-redux";

import { store } from "./store/reducers";

const Stack = createStackNavigator();

export default function App() {
  const [isSignedIn, setIsSignedIn] = useState(true);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="Home"
        >
          {!isSignedIn ? (
            <>
              <Stack.Screen name="Start" component={StartScreen} />
              <Stack.Screen name="SignIn" component={SignInScreen} />
              <Stack.Screen name="SignUp" component={SignUpScreen} />
            </>
          ) : (
            <Stack.Screen name="Home" component={HomeScreen} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
