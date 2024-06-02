import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import UnitChoice from "../components/UnitChoice";
import {
  CelciusToFahrenheit,
  CelciusToKelvin,
  FahrenheitToCelcius,
  FahrenheitToKelvin,
  KelvinToCelcius,
  KelvinToFahrenheit,
} from "../utils/conversions";

export default function ConversionScreen() {
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
    const input = parseFloat(inputValue);

    if (isNaN(input)) {
      setOutputValue("La valeur entrée n'est pas un nombre.");
      return;
    }

    let result;
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
      <View style={styles.subcontainer}>
        <Text style={styles.input}>Valeur initiale en: </Text>
        <UnitChoice onUnitChange={updateInputUnit} />
      </View>
      <View style={styles.subcontainer}>
        <Text style={styles.input}>Convertir en: </Text>
        <UnitChoice onUnitChange={updateOutputUnit} />
      </View>
      <Button
        title="Convertir"
        color="#4B64F2"
        style={styles.button}
        onPress={() => convertInput()}
      />
      <View style={styles.resultContainer}>
        <Text style={styles.outputLabel}>Solution:</Text>
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
  subcontainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    height: 100,
    width: 265,
    margin: 0,
  },
  selector: {
    margin: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  input: {
    fontSize: 18,
  },
  resultContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  outputLabel: {
    fontSize: 20,
  },
  output: {
    fontSize: 20,
  },
  button: {
    fontSize: 50,
  }
});
