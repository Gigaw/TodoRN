//npm
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import messaging from '@react-native-firebase/messaging';
import {useDispatch, useSelector} from 'react-redux';
import {Alert} from 'react-native';

//screens
import SignInScreen from './screens/SignInScreen';
import HomeScreen from './screens/HomeScreen';
import SignUpScreen from './screens/SignUpScreen';
import StartScreen from './screens/StartScreen';
import {getSignInData} from './utils/asyncStorage';
import {clearUserError, getUser} from './store/actions/user';
import Camera from './screens/Camera';
import PushNotification from 'react-native-push-notification';

const Stack = createNativeStackNavigator();

PushNotification.configure({
  onRegister: function (token) {
    console.log("TOKEN:", token);
  },
  onNotification: function (notification) {
    console.log("NOTIFICATION:", notification);
  },
  onAction: function (notification) {
    console.log("ACTION:", notification.action);
    console.log("NOTIFICATION:", notification);
  },

  onRegistrationError: function(err) {
    console.error(err.message, err);
  },

  permissions: {
    alert: true,
    badge: true,
    sound: true,
  },
  popInitialNotification: true,
  requestPermissions: true,
});

PushNotification.createChannel(
  {
    channelId: "channel-id", // (required)
    channelName: "My channel", // (required)
    channelDescription: "A channel to categorise your notifications", // (optional) default: undefined.
    playSound: false, // (optional) default: true
    soundName: "default", // (optional) See `soundName` parameter of `localNotification` function
    importance: 4, // (optional) default: 4. Int value of the Android notification importance
    vibrate: true, // (optional) default: true. Creates the default vibration patten if true.
  },
  (created) => console.log(`createChannel returned '${created}'`) // (optional) callback returns whether the channel was created, false means it already existed.
);

const getToken = async () => {
  const token = await messaging().getToken();
  // console.log('token', token);
  return token
};

export default function Navigation() {
  const token = useSelector(state => state.user.token);
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  const [signInData, setSignInData] = useState(null);

  const errorAlert = () => {
    Alert.alert('Error', user.errorMessage, [
      {text: 'OK', onPress: () => dispatch(clearUserError())},
    ]);
  };

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      // console.log(remoteMessage);
      
      PushNotification.localNotification({
        channelId: 'channel-id',
        channelName: 'My channel',
        message: 'remoteMessage.notification.body',
        title: 'remoteMessage.notification.title',
      });
      // Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });
    
    
    // getToken();
    return unsubscribe;
  }, []);

  useEffect(() => {
    if (user.hasError) {
      errorAlert();
    }
  }, [user]);

  useEffect(() => {
    (async () => {
      const cachedSignInData = await getSignInData();
      setSignInData(cachedSignInData);
      if (cachedSignInData?.email && cachedSignInData?.password) {
        dispatch(getUser(cachedSignInData.email, cachedSignInData.password));
      }
    })();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {!token ? (
          <>
            {!signInData ? (
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
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
