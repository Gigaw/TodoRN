import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import styles from "./styles";

export default AppButton = ({ title, onPress, style }) => {
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      <View  style={styles.button}>
        <Text style={styles.buttonText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};
