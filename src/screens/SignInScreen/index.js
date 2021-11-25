import React, {useEffect, useState} from 'react';
import {
  Text,
  SafeAreaView,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import styles from './styles';

import AppButton from '../../components/AppButton/';
import HeaderCircles from '../../components/HeaderCircles/';
import AppTitle from '../../components/AppTitle/';
import AppInput from '../../components/AppInput/';
import {useDispatch, useSelector} from 'react-redux';
import {clearUserError, getUser} from '../../store/actions/user';
import {
  setSignInData,
  getSignInData,
  getShouldAutoAuthorize,
  setShouldAutoAuthorize,
} from '../../utils/asyncStorage';

export default SignInScreen = ({navigation, route}) => {
  const [email, setEmail] = useState(route.params?.email);
  const [password, setPassword] = useState(route.params?.password);
  const [shouldAuthorize, setShouldAuthorize] = useState(false);
  // const [email, setEmail] = useState('gigolaevigor@mail.ru');
  // const [password, setPassword] = useState('071001099');
  // const errorMessage = useSelector(state => state.user.errorMessage);

  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const cachedSignInData = await getSignInData();
      const cachedShouldAutoAuthorize = await getShouldAutoAuthorize();
      console.log('cachedShouldAutoAuthorize', cachedShouldAutoAuthorize);
      setEmail(cachedSignInData.email);
      setPassword(cachedSignInData.password);
      setShouldAuthorize(cachedShouldAutoAuthorize);
    })();
  }, []);

  useEffect(() => {
    console.log(shouldAuthorize);
    if (shouldAuthorize && email && password) {
      dispatch(getUser(email, password));
    }
  }, [shouldAuthorize]);

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
            setSignInData(email, password);
            setShouldAutoAuthorize(true);
            dispatch(getUser(email, password));
          }}
          style={styles.button}
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
