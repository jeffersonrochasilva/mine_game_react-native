import React from "react";
import { View, StyleSheet, Text } from "react-native";

// Components
import Mine from "./Mine";
import Flag from "./Flag";

// Params
import params from "../params";

export default (props) => {
  const { mined, opened, nearMine, exploded, flagged } = props;

  const styleField = [styles.field];
  if (opened) styleField.push(styles.opened);
  if (exploded) styleField.push(styles.exploded);
  if (flagged) styleField.push(styles.flagged);
  if (!opened && !exploded) styleField.push(styles.regular);

  let color = null;
  if (nearMine > 0) {
    if (nearMine == 1) color = "#2a28d7";
    if (nearMine == 2) color = "#2b520f";
    if (nearMine > 2 && nearMine < 6) color = "#f9060a";
    if (nearMine >= 6) color = "#f221a9";
  }
  return (
    <View style={styleField}>
      {!mined && opened && nearMine > 0 ? (
        <Text style={[styles.label, { color: color }]}>{nearMine}</Text>
      ) : (
        false
      )}
      {mined && opened ? <Mine /> : false}
      {flagged && !opened ? <Flag /> : false}
    </View>
  );
};

const styles = StyleSheet.create({
  field: {
    height: params.blockSize,
    width: params.blockSize,
    borderWidth: params.borderSize,
  },
  regular: {
    backgroundColor: "#999",
    borderLeftColor: "#ccc",
    borderTopColor: "#ccc",
    borderRightColor: "#333",
    borderBottomColor: "#333",
  },
  opened: {
    backgroundColor: "#999",
    borderColor: "#777",
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    fontWeight: "bold",
    fontSize: params.fontSize,
  },
  exploded: {
    backgroundColor: "red",
    borderColor: "red",
  },
});
