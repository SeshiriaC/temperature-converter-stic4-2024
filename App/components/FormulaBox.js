import { StyleSheet, Text, View } from "react-native";
import { useFonts, Roboto_400Regular } from "@expo-google-fonts/roboto";

export default function FormulaBox(props) {

  let [fontsLoaded] = useFonts({
    'Roboto-Regular' : Roboto_400Regular,
  });

  if (!fontsLoaded) {
    return console.log('Font not loaded');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.formulaTitle}>{props.Title}</Text>
      <Text style={[styles.formula, {fontFamily: "Roboto-Regular"}]}>{props.Formula}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#07C7F2',
    borderRadius: 10,
  },
  formulaTitle: {
    fontSize: 24,
    color: '#4B64F2',

  },
  formula: {
    fontSize: 16, 
    alignItems:'center',

  },
});
