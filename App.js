//npm
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';

//screens
import SignInScreen from './src/screens/SignInScreen/';
import HomeScreen from './src/screens/HomeScreen/';
import SignUpScreen from './src/screens/SignUpScreen/';
import StartScreen from './src/screens/StartScreen/';

// import getConfig from 'app.config.js';

// import HomeScreen from './src/screens/HomeScreen/'
import {store} from './src/store/reducers';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName="SignIn">
          {/* {true ? ( */}
          {/* <> */}
          <Stack.Screen name="Start" component={StartScreen} />
          <Stack.Screen name="SignIn" component={SignInScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
          {/* </> */}
          {/* ) : ( */}
          <Stack.Screen name="Home" component={HomeScreen} />
          {/* )} */}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
