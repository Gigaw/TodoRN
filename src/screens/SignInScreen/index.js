import React, {useEffect, useState} from 'react';
import {Text, SafeAreaView, View, Image, TouchableOpacity} from 'react-native';

import styles from './styles';

import AppButton from '../../components/AppButton/';
import HeaderCircles from '../../components/HeaderCircles/';
import AppTitle from '../../components/AppTitle/';
import AppInput from '../../components/AppInput/';
import {useDispatch, useSelector} from 'react-redux';
import {getUser} from '../../store/actions/user';

export default SignInScreen = ({navigation}) => {
  const [signInEmail, setSignInEmail] = useState('gigolaevigor@mail.ru');
  const [signInPassword, setSignInPassword] = useState('071001099');
  // const dispatch = useDispatch();

  return (
    <SafeAreaView style={styles.container}>
      <HeaderCircles />
      <View style={styles.content}>
        <View style={styles.textContainer}>
          <AppTitle style={styles.title}>Welcome Back!</AppTitle>
        </View>
        <Image
          source={require('./../../assets/images/sign-in.png')}
          style={styles.image}
        />
        <View style={styles.inputsContainer}>
          <AppInput
            placeholder="Enter your signInEmail"
            onChangeText={setSignInEmail}
            value={signInEmail}
          />
          <AppInput
            placeholder="Confirm signInPassword"
            onChangeText={setSignInPassword}
            value={signInPassword}
          />
        </View>
        <View style={[styles.alternativeTextContainer, {marginBottom: 25}]}>
          <Text style={styles.alternativeTextStrong}>Forgot Password</Text>
        </View>
        <AppButton
          title="Sign In"
          onPress={() => {
            dispatch(getUser(signInEmail, signInPassword));
          }}
          style={styles.button}
        />
        <View style={styles.alternativeTextContainer}>
          <Text style={styles.alternativeText}>Don’t have an account? </Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.alternativeTextStrong}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
