//npm
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';

//screens
import SignInScreen from './screens/SignInScreen';
import HomeScreen from './screens/HomeScreen';
import SignUpScreen from './screens/SignUpScreen';
import StartScreen from './screens/StartScreen';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  const token = useSelector(state => state.user.token);

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          // initialRouteName="Home"
        >
          {!token ? (
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
    </>
  );
}
