import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import styles from "./styles";

export default AppButton = ({ title, onPress, style, disabled }) => {
  return (
    <TouchableOpacity style={style} onPress={onPress} disabled={disabled}>
      <View  style={[styles.button, disabled && styles.buttonDisabled]}>
        <Text style={styles.buttonText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};
