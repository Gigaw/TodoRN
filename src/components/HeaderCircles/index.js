import React from "react";
import { View } from "react-native";
import styles from "./styles";

const HeaderCircles = ({color}) => {
  return (
    <View style={styles.circlesContainer}>
      <View style={[styles.circle, styles.circleTop, {backgroundColor: color}]} />
      <View style={[styles.circle, styles.circleBottom, {backgroundColor: color}]} />
    </View>
  );
};

export default HeaderCircles;
