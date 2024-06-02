import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import {
  CelciusToFahrenheit,
  CelciusToKelvin,
  FahrenheitToCelcius,
  FahrenheitToKelvin,
  KelvinToCelcius,
  KelvinToFahrenheit,
} from "./utils/conversions";
import UnitChoice from "./components/UnitChoice";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [outputValue, setOutputValue] = useState("");
  const [inputUnit, setInputUnit] = useState("C");
  const [outputUnit, setOutputUnit] = useState("F");
  
  const updateInputUnit = (newInputUnitValue) => {
    setInputUnit(newInputUnitValue);
    console.log("Input unit updated to:", newInputUnitValue);
  };

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
      } else if (outputUnit === "C"){
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
      <Text>Valeur initiale en: </Text>

      <UnitChoice onUnitChange={updateInputUnit}/>
      <TextInput
        style={{
          padding: 10,
          width: 265,
          height: 40,
          backgroundColor: "#D9D9D9",
          borderRadius: 10,
        }}
        defaultValue="0"
        keyboardType="numeric"
        onChangeText={setInputValue}
      />

      <UnitChoice onUnitChange={updateOutputUnit}/>
      <Button title="Convertir" onPress={() => convertInput()} />
      <View>
        <Text>{outputValue}</Text>
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
});
