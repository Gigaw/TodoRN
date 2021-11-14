import React from "react";
import { Image, View, Text, SafeAreaView } from "react-native";

import styles from "./styles";

// import LogOutSvg from "../../assets/svg/log-out.svg";

import AppTitle from "../../components/AppTitle";
import HeaderCircles from "../../components/HeaderCircles";
import AppClock from "../../components/AppClock";
import TaskList from "../../components/TaskList";

export default HomeScreen = () => {
  return (
    <>
      <View style={styles.smallContainer}>
        <HeaderCircles color="rgba(255, 252, 238, 0.47)" />
        <SafeAreaView style={{ flex: 1, justifyContent: "flex-end" }}>
          <View style={styles.smallContainerContent}>
            <View>{/* <LogOutSvg /> */}</View>
            <Image
              source={require("../../assets/images/person.jpg")}
              style={styles.avatar}
            />
            <AppTitle style={styles.welcomeText}>Welcome Anand!</AppTitle>
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
