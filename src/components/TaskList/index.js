import React from "react";
import { View, Text, ScrollView } from "react-native";

import AppTitle from "../AppTitle";
import Task from "./Task";

import styles from "./styles";

const mock = [];

for (let i = 0; i < 3; i++) {
  mock.push(
    {
      isChecked: true,
      name: "Learn Javascript by 11am",
    },
    {
      isChecked: false,
      name: "Have Lunch by 2pm",
    }
  );
}

export default TaskList = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <AppTitle>Daily Tasks</AppTitle>
        <View style={styles.addBtn} />
      </View>
      <ScrollView style={{ flex: 1 }}>
        {mock.map((el, index) => (
          <Task {...el} key={index} />
        ))}
      </ScrollView>
    </View>
  );
};
