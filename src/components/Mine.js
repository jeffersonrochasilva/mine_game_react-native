import React from "react";
import { View, StyleSheet } from "react-native";

export default (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.coreMine} />
      <View style={styles.line} />
      <View style={[styles.line, { transform: [{ rotate: "45deg" }] }]} />
      <View style={[styles.line, { transform: [{ rotate: "90deg" }] }]} />
      <View style={[styles.line, { transform: [{ rotate: "135deg" }] }]} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  coreMine: {
    height: 12,
    width: 12,
    borderRadius: 10,
    backgroundColor: "blanck",
    alignItems: "center",
    justifyContent: "center",
  },
  line: {
    position: "absolute",
    height: 3,
    width: 20,
    borderRadius: 3,
    backgroundColor: "black",
  },
});
