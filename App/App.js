import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import UnitChoice from "./components/UnitChoice";
import {
  CelciusToFahrenheit,
  CelciusToKelvin,
  FahrenheitToCelcius,
  FahrenheitToKelvin,
  KelvinToCelcius,
  KelvinToFahrenheit,
} from "./utils/conversions";


export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [outputValue, setOutputValue] = useState("");
  const [inputUnit, setInputUnit] = useState("C");
  const [outputUnit, setOutputUnit] = useState("F");

  //Mise à jour de l'unité de la valeur d'entrée de la conversion
  const updateInputUnit = (newInputUnitValue) => {
    setInputUnit(newInputUnitValue);
    console.log("Input unit updated to:", newInputUnitValue);
  };

  //Mise à jour de l'unité de la valeur de sortie de la conversion
  const updateOutputUnit = (newOutputUnitValue) => {
    setOutputUnit(newOutputUnitValue);
    console.log("Output unit updated to:", newOutputUnitValue);
  };

  function convertInput() {
    //Convertis de l'entrée en nombre réel
    const input = parseFloat(inputValue);

    //Vérifie si l'entrée est un nombre réel
    if (isNaN(input)) {
      setOutputValue("La valeur entrée n'est pas un nombre.");
      return;
    }

    let result;
    //Effectue la conversion selon les unitées entrées
    if (inputUnit === "C") {
      if (outputUnit === "F") {
        result = CelciusToFahrenheit(input) + " °F";
      } else if (outputUnit === "K") {
        result = CelciusToKelvin(input) + " K";
      } else if (outputUnit === "C") {
        result = input + " °C";
      }
    } else if (inputUnit === "F") {
      if (outputUnit === "C") {
        result = FahrenheitToCelcius(input) + " °C";
      } else if (outputUnit === "K") {
        result = FahrenheitToKelvin(input) + " K";
      } else {
        result = input + " °F";
      }
    } else if (inputUnit === "K") {
      if (outputUnit === "C") {
        result = KelvinToCelcius(input) + " °C";
      } else if (outputUnit === "F") {
        result = KelvinToFahrenheit(input) + " °F";
      } else {
        result = input + " K";
      }
    }
    setOutputValue(result);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.input}>Valeur initiale en: </Text>
      <UnitChoice onUnitChange={updateInputUnit} />

      <Text style={styles.input}>Convertir en: </Text>
      <UnitChoice onUnitChange={updateOutputUnit} />

      <Text style={styles.input}>Température à convertir: </Text>
      <TextInput
        style={{
          padding: 10,
          width: 265,
          height: 40,
          marginBottom: 30,
          backgroundColor: "#D9D9D9",
          borderRadius: 10,
          fontSize: 18,
        }}
        defaultValue="0"
        keyboardType="numeric"
        onChangeText={setInputValue}
      />

      <Button title="Convertir" color="#4B64F2" onPress={() => convertInput()} />
      <View>
        <Text style={styles.output}>Solution:</Text>
        <Text style={styles.output}>{outputValue}</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  selector: {
    margin: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  buttonContainer: {
    marginHorizontal: 10,
  },
  input: {
    fontSize: 18,
  },
  output: {
    margin: 50,
    fontSize: 20,
  },
});
