import React, {useEffect, useRef, useState} from 'react';
import {
  Image,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Geolocation from '@react-native-community/geolocation';

import styles from './styles';

// import LogOutSvg from "../../assets/svg/log-out.svg";

import AppTitle from '../../components/AppTitle';
import HeaderCircles from '../../components/HeaderCircles';
import AppClock from '../../components/AppClock';
import TaskList from '../../components/TaskList';
import {clearUserData} from '../../store/actions/user';
import {useDispatch, useSelector} from 'react-redux';
import {setShouldAutoAuthorize} from '../../utils/asyncStorage';

Geolocation.setRNConfiguration({skipPermissionRequests: true, authorizationLevel: 'whenInUse' });
Geolocation.requestAuthorization();
// Geolocation.setRNConfiguration(config);

export default HomeScreen = ({navigation, route}) => {
  // const user = useSelector(state => state.user.user);
  // const [avatar, setAvatar] = useState(newAvatar || '../../assets/images/person.jpg')
  const [position, setPosition] = useState(null);
  const avatarUri = useSelector(state => state.user.avatar);
  const dispatch = useDispatch();
  const newAvatar = route?.params?.newAvatar;

  useEffect(() => {
    console.log('new Avatar', avatarUri);

    // if(newAvatar) setAvatar
    // console.log('avatar', avatar);
  });

  useEffect(() => {
    Geolocation.getCurrentPosition(
      info => {
        console.log('geolocation', info);
        const initialPosition = JSON.stringify(info);
        setPosition(initialPosition);
      },
      error => Alert.alert('Error', JSON.stringify(error)),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
  }, []);

  return (
    <>
      <View style={styles.smallContainer}>
        <HeaderCircles color="rgba(255, 252, 238, 0.47)" />
        <SafeAreaView style={{flex: 1, justifyContent: 'flex-end'}}>
          <View style={styles.smallContainerContent}>
            <TouchableOpacity
              onPress={() => {
                setShouldAutoAuthorize(false);
                dispatch(clearUserData());
              }}>
              <Text>LOGOUT</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Camera')}>
              {newAvatar ? (
                <Image
                  source={{
                    uri: newAvatar,
                  }}
                  style={styles.avatar}
                />
              ) : (
                <Image
                  source={require('../../assets/images/person.jpg')}
                  style={styles.avatar}
                />
              )}
            </TouchableOpacity>

            <AppTitle style={styles.welcomeText}>
              current position: {position}
              {/* Welcome {user.name.first}! */}
            </AppTitle>
          </View>
        </SafeAreaView>
      </View>
      <View style={styles.bigContainer}>
        <SafeAreaView>
          <View style={styles.bigContainerContent}>
            <AppClock />
            <Text style={styles.strongText}>Tasks List</Text>
            <TaskList />
          </View>
        </SafeAreaView>
      </View>
    </>
  );
};
