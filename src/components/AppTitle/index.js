import React from "react";
import { Text } from "react-native";

import styles from "./styles";

const AppTitle = ({ style, children }) => {
  const titleStyle = [styles.title];

  if (style) {
    if (Array.isArray(style)) {
      titleStyle.push(...style);
    } else if (typeof style === "object") {
      titleStyle.push(style);
    }
  }

  return <Text style={titleStyle}>{children}</Text>;
};

export default AppTitle;
