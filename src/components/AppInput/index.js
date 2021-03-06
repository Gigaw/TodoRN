import React from 'react';
import {View, TextInput} from 'react-native';
import styles from './styles';

const AppInput = ({
  style,
  placeholder,
  value,
  onChangeText,
  autoCapitalize,
  secureTextEntry
}) => {
  const inputStyle = [styles.input];

  if (style) {
    if (Array.isArray(style)) {
      inputStyle.push(...style);
    } else if (typeof style === 'object') {
      inputStyle.push(style);
    }
  }

  return (
    <View style={styles.input}>
      <TextInput
        secureTextEntry={secureTextEntry}
        style={styles.inputText}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        autoCapitalize={autoCapitalize || 'none'}
      />
    </View>
  );
};

export default AppInput;
