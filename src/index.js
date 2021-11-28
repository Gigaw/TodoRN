//npm
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { useIsFocused } from '@react-navigation/core';
import {useDispatch, useSelector} from 'react-redux';
import {Alert} from 'react-native';

//screens
import SignInScreen from './screens/SignInScreen';
import HomeScreen from './screens/HomeScreen';
import SignUpScreen from './screens/SignUpScreen';
import StartScreen from './screens/StartScreen';
import {getSignInData, setShouldAutoAuthorize} from './utils/asyncStorage';
import {clearUserError, getUser} from './store/actions/user';
import Camera from './screens/Camera';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  // const isFocused = useIsFocused();
  // const token = useSelector(state => state.user.token);
  // const user = useSelector(state => state.user);
  // const dispatch = useDispatch();
  // const [signInData, setSignInData] = useState(null);

  // const errorAlert = () =>
  //   Alert.alert('Error', user.errorMessage, [
  //     {text: 'OK', onPress: () => dispatch(clearUserError())},
  //   ]);

  // useEffect(() => {
  //   if (user.hasError) {
  //     errorAlert();
  //     setShouldAutoAuthorize(false);
  //   }
  // }, [user]);

  // useEffect(() => {
  //   (async () => {
  //     const cachedSignInData = await getSignInData();
  //     console.log(cachedSignInData);
  //     setSignInData(cachedSignInData);
  //   })();
  // }, []);

  // useEffect(() => {
  //   if (signInData.email && signInData.password)
  //     dispatch(getUser(signInData.email, signInData.password));
  // });

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          // initialRouteName={signInData === null ? 'Start' : 'SignIn'}
        >
          {/* {!token ? (
            <>
              {signInData ? (
                <Stack.Screen name="Start" component={StartScreen} />
              ) : null}
              <Stack.Screen
                name="SignIn"
                component={SignInScreen}
                initialParams={{
                  email: signInData?.email,
                  password: signInData?.password,
                }}
              />
              <Stack.Screen name="SignUp" component={SignUpScreen} />
            </>
          ) : (
            <>
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="Camera" component={Camera} />
            </>
          )} */}
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Camera" component={Camera} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
