import { StyleSheet, Text, View } from "react-native";

export default function FormulaBox(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.formulaTitle}>{props.Title}</Text>
      <Text style={styles.formula}>{props.Formula}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#07C7F2",
    borderRadius: 10,
  },
  formulaTitle: {
    fontSize: 28,
    color: "#4B64F2",
  },
  formula: {
    fontSize: 18,
  },
});
