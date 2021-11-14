import React, { Fragment } from "react";
import {
  Image,
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import AppTitle from "../AppTitle";

import styles from "./styles";

export default Task = ({ name, isChecked }) => {
  const checkboxStyle = [styles.checkbox];
  const lineStyle = [styles.line];

  if (isChecked) {
    checkboxStyle.push({ backgroundColor: "#FFD615" });
    lineStyle.push({ backgroundColor: "#FFD615" });
  }

  return (
    <View style={styles.task}>
      <TouchableOpacity onPress={() => console.log('task')}>
        <View style={checkboxStyle} />
      </TouchableOpacity>
      <View style={styles.taskTextContainer}>
        <View style={lineStyle} />
        <Text style={styles.taskText}>{name}</Text>
      </View>
    </View>
  );
};
