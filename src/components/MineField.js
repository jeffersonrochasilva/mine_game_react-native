import React from "react";
import { View, StyleSheet } from "react-native";

import Field from "./Field";

export default (props) => {
  const rows = props.board.map((row, r) => {
    const columns = row.map((field, c) => {
      return <Field {...field} key={c} />;
    });
    return <View key={r}>{columns}</View>;
  });
  return <view style={styles.container}>{rows}</view>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#eee",
  },
});
