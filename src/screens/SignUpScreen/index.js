import React from "react";
import { Text, SafeAreaView, View } from "react-native";

import styles from "./styles";

import AppButton from "../../components/AppButton/";
import HeaderCircles from "../../components/HeaderCircles/";
import AppText from "../../components/AppText/";
import AppTitle from "../../components/AppTitle/";
import AppInput from "../../components/AppInput/";

export default SignUpScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderCircles />
      <View style={styles.content}>
        <View style={styles.textContainer}>
          <AppTitle style={styles.title}>Welcome Onboard!</AppTitle>
          <AppText>We help you meet up you tasks on time.</AppText>
        </View>
        <View style={styles.inputsContainer}>
          <AppInput placeholder="Enter your full name" />
          <AppInput placeholder="Enter your email" />
          <AppInput placeholder="Enter password" />
          <AppInput placeholder="Confirm password" />
        </View>
        <AppButton
          title="Register"
          onPress={() => {
            navigation.navigate("SignIn");
          }}
          style={styles.button}
        />
        <View style={styles.alternativeTextContainer}>
          <Text style={styles.alternativeText}>Already have an account? </Text>
          <Text style={styles.alternativeTextStrong}>Sign In</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
