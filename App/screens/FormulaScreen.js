import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ScrollView } from "react-native";
import FormulaBox from "../components/FormulaBox";

export default function FormulaScreen() {
  const CelsiusToFahreheitFormula = "T(°F) = [T(°C) x (9 / 5)] + 32";
  const CelsiusToFahrenheitTitle = "Celsius en Fahrenheit";

  const CelsiusToKelvinFormula = "T( K) = T(°C) + 273,15";
  const CelsiusToKelvinTitle = "Celsius en Kelvin";

  const FahrenheitToCelsiusFormula = "T(°C) = [T(°F) - 32] x (5 / 9)";
  const FahrenheitToCelsiusTitle = "Fahrenheit en Celsius";

  const FahrenheitToKelvinFormula = "T( K) = [[T(°F) - 32] x (5 / 9)] + 273,15";
  const FahrenheitToKelvinTitle = "Fahrenheit en Kelvin";

  const KelvinToCelsiusFormula = "T(°C) = T(°K) - 273,15";
  const KelvinToCelciusTitle = "Kelvin en Celsius";

  const KelvinToFahrenheitFormula = "T(°C) = [[T(°K) - 273,15] x (9 / 5)] + 32";
  const KelvinToFahrenheitTitle = "Kelvin en Fahrenheit";

  return (
      <ScrollView contentContainerStyle={styles.container}>
        <FormulaBox
          Title={CelsiusToFahrenheitTitle}
          Formula={CelsiusToFahreheitFormula}
        />
        <FormulaBox
          Title={CelsiusToKelvinTitle}
          Formula={CelsiusToKelvinFormula}
        />
        <FormulaBox
          Title={FahrenheitToCelsiusTitle}
          Formula={FahrenheitToCelsiusFormula}
        />
        <FormulaBox
          Title={FahrenheitToKelvinTitle}
          Formula={FahrenheitToKelvinFormula}
        />
        <FormulaBox
          Title={KelvinToCelciusTitle}
          Formula={KelvinToCelsiusFormula}
        />
        <FormulaBox
          Title={KelvinToFahrenheitTitle}
          Formula={KelvinToFahrenheitFormula}
        />
        <StatusBar style="auto" />
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    alignItems: "start",
    justifyContent: "center",
  },
});