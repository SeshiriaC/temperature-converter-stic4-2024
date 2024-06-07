import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import UnitChoice from "../components/UnitChoice";
import {
  CelsiusToFahrenheit,
  CelsiusToKelvin,
  FahrenheitToCelsius,
  FahrenheitToKelvin,
  KelvinToCelsius,
  KelvinToFahrenheit,
} from "../utils/conversions";

export default function ConversionScreen() {
  const [inputValue, setInputValue] = useState("");
  const [outputValue, setOutputValue] = useState("");
  const [inputUnit, setInputUnit] = useState("C");
  const [outputUnit, setOutputUnit] = useState("C");

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
        result = CelsiusToFahrenheit(input).toFixed(4) + " °F";
      } else if (outputUnit === "K") {
        result = CelsiusToKelvin(input).toFixed(4) + " K";
      } else if (outputUnit === "C") {
        result = input + " °C";
      }
    } else if (inputUnit === "F") {
      if (outputUnit === "C") {
        result = FahrenheitToCelsius(input).toFixed(4) + " °C";
      } else if (outputUnit === "K") {
        result = FahrenheitToKelvin(input).toFixed(4) + " K";
      } else {
        result = input + " °F";
      }
    } else if (inputUnit === "K") {
      if (outputUnit === "C") {
        result = KelvinToCelsius(input).toFixed(4) + " °C";
      } else if (outputUnit === "F") {
        result = KelvinToFahrenheit(input).toFixed(4) + " °F";
      } else {
        result = input + " K";
      }
    }
    setOutputValue(result);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.input}>Température à convertir</Text>
      <TextInput
        style={{
          padding: 10,
          width: 265,
          height: 40, 
          marginBottom: 30,
          backgroundColor: "#D9D9D9",
          borderRadius: 50,
          fontSize: 18,
        }}
        defaultValue="0"
        keyboardType="numeric"
        onChangeText={setInputValue}
      />
      <View style={styles.subcontainer}>
        <Text style={styles.input}>Unité initiale:</Text>
        <UnitChoice onUnitChange={updateInputUnit} />
      </View>
      <View style={styles.subcontainer}>
        <Text style={styles.input}>Convertir en:</Text>
        <UnitChoice onUnitChange={updateOutputUnit} />
      </View>
      <TouchableOpacity onPress={() => convertInput()}>
        <View style={styles.button}>
          <Image
            source={require("../assets/convertir.png")}
            style={styles.buttonIcon}
          />
          <Text style={{ fontSize: 20 }}>Convertir</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.resultContainer}>
        <Text style={styles.outputLabel}>Solution</Text>
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 0,
    height: 100,
    width: 265,
    margin: 0,
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
    fontSize: 30,
    color: "#4B64F2",
    marginHorizontal:50,
    justifyContent: "center",
  },
  button: {
    paddingHorizontal: 5,
    paddingVertical: 5,
    marginVertical: 10,
    borderWidth: 1,
    borderRadius: 50,
    width: 175,
    borderColor: "#4B64F2",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  buttonIcon: {
    marginRight: 5,
    width: 35,
    height: 35,
  },
});
