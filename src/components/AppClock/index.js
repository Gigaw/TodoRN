import React from "react";
import { View, Text } from "react-native";

import styles from "./styles";

import TimeSection from "./TimeSection";

export default AppClock = () => {
  return (
    <View style={styles.clock}>
      <TimeSection time="13" />
      <Text style={styles.timeSeparator}>:</Text>
      <TimeSection time="01" />
      <Text style={styles.timeSeparator}>:</Text>
      <TimeSection time="12" />
    </View>
  );
};
