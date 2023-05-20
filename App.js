import { StyleSheet, Text, View } from "react-native";

// Parametros
import params from "./src/params";
import { createMineboard } from "./src/functions";

// Componetns
import Minefield from "./src/components/MineField";

export default function App(props) {
  const mineAmount = () => {
    const cols = params.getColumnsAmount();
    const rows = params.getRowsAmount();
    return Math.ceil(cols * rows * params.difficultLevel);
  };

  const createState = () => {
    const cols = params.getColumnsAmount();
    const rows = params.getRowsAmount();
    return {
      board: createMineboard(rows, cols, mineAmount()),
    };
  };
  const board = createState();
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Iniciando o Mines</Text>
      <Text style={styles.instructions}>
        Tamanho da Grade:{params.getRowsAmount()}x{params.getColumnsAmount()}
      </Text>
      {/* <View style={styles.board}>
        <Minefield board={board} />
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5fcff",
    alignItems: "center",
    justifyContent: "center",
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
});
