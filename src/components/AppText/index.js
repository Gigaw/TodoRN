import React from "react";
import { Text } from "react-native";

import styles from "./styles";

const AppText = ({ style, children }) => {
  const textStyle = [styles.text];

  if (style) {
    if (Array.isArray(style)) {
      textStyle.push(...style);
    } else if (typeof style === "object") {
      textStyle.push(style);
    }
  }

  return <Text style={textStyle}>{children}</Text>;
};

export default AppText;
