import React, { useEffect } from 'react';
import {Image, View, Text, SafeAreaView, TouchableOpacity} from 'react-native';

import styles from './styles';

// import LogOutSvg from "../../assets/svg/log-out.svg";

import AppTitle from '../../components/AppTitle';
import HeaderCircles from '../../components/HeaderCircles';
import AppClock from '../../components/AppClock';
import TaskList from '../../components/TaskList';
import { clearUserData } from '../../store/actions/user';
import { useDispatch, useSelector } from 'react-redux';

export default HomeScreen = ({navigation}) => {
  const user = useSelector(state => state.user.user)
  const dispatch = useDispatch();

  // useEffect(() => {
  //   console.log('user', user)
  // })

  return (
    <>
      <View style={styles.smallContainer}>
        <HeaderCircles color="rgba(255, 252, 238, 0.47)" />
        <SafeAreaView style={{flex: 1, justifyContent: 'flex-end'}}>
          <View style={styles.smallContainerContent}>
            <TouchableOpacity onPress={() => dispatch(clearUserData())}>
                <Text>LOGOUT</Text>
            </TouchableOpacity>
            <Image
              source={require('../../assets/images/person.jpg')}
              style={styles.avatar}
            />
            <AppTitle style={styles.welcomeText}>Welcome {user.name.first}!</AppTitle>
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
