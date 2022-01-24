import React, {useEffect, useRef, useState} from 'react';
import {Image, View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
// import Geolocation from '@react-native-community/geolocation';
import Geolocation from 'react-native-geolocation-service';

import styles from './styles';

import LogOutSvg from '../../assets/svg/log-out.svg';

import AppTitle from '../../components/AppTitle';
import HeaderCircles from '../../components/HeaderCircles';
import AppClock from '../../components/AppClock';
import TaskList from '../../components/TaskList';
import {clearUserData} from '../../store/actions/user';
import {useDispatch, useSelector} from 'react-redux';
import {setShouldAutoAuthorize} from '../../utils/asyncStorage';

Geolocation.setRNConfiguration({
  skipPermissionRequests: true,
  authorizationLevel: 'whenInUse',
});

export default HomeScreen = ({navigation, route}) => {
  const user = useSelector(state => state.user.user);
  // const [avatar, setAvatar] = useState(newAvatar || '../../assets/images/person.jpg')
  const [position, setPosition] = useState(null);
  const avatarUri = useSelector(state => state.user.avatar);
  const dispatch = useDispatch();
  const newAvatar = route?.params?.newAvatar;
  const watchID = useRef(null);

  useEffect(() => {
    watchID.current = Geolocation.watchPosition(
      info => {
        setPosition(info);
      },
      error => console.log(error),
      {interval: 10000, distanceFilter: 1}
    );
    return () => {
      Geolocation.clearWatch(watchID.current);
    };
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
              }}
              style={{alignSelf: 'flex-end', marginBottom: 12}}>
              <LogOutSvg />
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
              current position latitude: {position?.coords.latitude}
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
