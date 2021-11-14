import React, { useEffect, useState } from "react";
import { Image, SafeAreaView, View, Text } from "react-native";

import styles from "./styles";

import AppButton from "../../components/AppButton/";
import HeaderCircles from "../../components/HeaderCircles/";
import AppText from "../../components/AppText/";
import AppTitle from "../../components/AppTitle/";


export default StartScreen = ({ navigation }) => {
  // const [isSignedIn, setIsSignedIn] = useState(true);

  useEffect(() => {
    // console.log(2)
    // getResponse()
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <HeaderCircles />
      <View style={styles.content}>
        <Image
          source={require("./../../assets/images/start-screen.png")}
          style={styles.image}
        />
        <View style={styles.textContainer}>
          <AppTitle style={styles.title}>Let’s get things done on time</AppTitle>
          <AppText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus
            praesent purus tincidunt ut cursus vitae. Nisl, vitae nulla lectus
            tortor, est a aliquam. Pretium netus
          </AppText>
        </View>
        <AppButton
          title="Get Started"
          onPress={() => {
            // console.log(1)
            navigation.navigate("SignUp");
            // getResponse()
          }}
        />
      </View>
    </SafeAreaView>
  );
};
