import React from "react";
import { View, Text } from "react-native";

import styles from "./styles";

export default TimeSection = ({ time }) => {
  return (
    <View style={styles.timeBlock}>
      <View style={styles.timeBlockBottomBackground} />
      <Text style={styles.number}>{time}</Text>
    </View>
  );
};
