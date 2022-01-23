import React, {useEffect, useState} from 'react';
import {Text, SafeAreaView, View, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import AppButton from '../../components/AppButton/';
import HeaderCircles from '../../components/HeaderCircles/';
import AppTitle from '../../components/AppTitle/';
import AppInput from '../../components/AppInput/';
import {useDispatch} from 'react-redux';
import {getUser} from '../../store/actions/user';
import {getSignInData} from '../../utils/asyncStorage';

export default SignInScreen = ({navigation, route}) => {
  const [email, setEmail] = useState(route.params?.email);
  const [password, setPassword] = useState(route.params?.password);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        const cachedSignInData = await getSignInData();
        setEmail(cachedSignInData.email);
        setPassword(cachedSignInData.password);
      } catch (e) {
        console.log('Ошибка получения данных и async storage');
      }
    })();
  }, []);

  const isButtonDisabled = !(email?.length && password?.length);

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
            placeholder="Enter your email"
            onChangeText={setEmail}
            value={email}
          />
          <AppInput
            placeholder="Confirm password"
            onChangeText={setPassword}
            value={password}
            secureTextEntry={true}
          />
        </View>
        <View style={[styles.alternativeTextContainer, {marginBottom: 25}]}>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.alternativeTextStrong}>Forgot Password</Text>
          </TouchableOpacity>
        </View>
        <AppButton
          title="Sign In"
          onPress={() => {
            dispatch(getUser(email, password));
          }}
          style={styles.button}
          disabled={isButtonDisabled}
        />
        <View style={styles.alternativeTextContainer}>
          <Text style={styles.alternativeText}>Don’t have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.alternativeTextStrong}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
