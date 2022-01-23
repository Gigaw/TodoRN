import React, {useState} from 'react';
import {Text, SafeAreaView, View, TouchableOpacity} from 'react-native';
import styles from './styles';
import AppButton from '../../components/AppButton/';
import HeaderCircles from '../../components/HeaderCircles/';
import AppText from '../../components/AppText/';
import AppTitle from '../../components/AppTitle/';
import AppInput from '../../components/AppInput/';
import {registerUser} from '../../store/actions/user';
import {useDispatch} from 'react-redux';

const calculateIsRegisterButtonDisabled = ({
  email,
  password,
  name,
  confirmPassword,
}) => {
  if (
    email.length > 0 &&
    password.length > 0 &&
    name.length > 0 &&
    confirmPassword > 0 &&
    password === confirmPassword
  ) {
    return false;
  }
  return true;
};

export default SignUpScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const dispatch = useDispatch();

  const pressHandler = () => {
    dispatch(
      registerUser({
        email,
        password,
        name,
      }),
    );
  };

  const isButtonDisabled = calculateIsRegisterButtonDisabled({
    email,
    password,
    name,
    confirmPassword,
  });

  return (
    <SafeAreaView style={styles.container}>
      <HeaderCircles />
      <View style={styles.content}>
        <View style={styles.textContainer}>
          <AppTitle style={styles.title}>Welcome Onboard!</AppTitle>
          <AppText>We help you meet up you tasks on time.</AppText>
        </View>
        <View style={styles.inputsContainer}>
          <AppInput
            placeholder="Enter your full name"
            value={name}
            onChangeText={setName}
          />
          <AppInput
            placeholder="Enter your email"
            value={email}
            onChangeText={setEmail}
          />
          <AppInput
            placeholder="Enter password"
            value={password}
            onChangeText={setPassword}
          />
          <AppInput
            placeholder="Confirm password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
        </View>
        <AppButton
          title="Register"
          onPress={pressHandler}
          style={styles.button}
          disabled={isButtonDisabled}
        />
        <View style={styles.alternativeTextContainer}>
          <Text style={styles.alternativeText}>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.push('SignIn')}>
            <View>
              <Text style={styles.alternativeTextStrong}>Sign In</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
