import { useState} from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";


function UnitChoice({onUnitChange}) {
  const [isCelsiusSelected, setIsCelsiusSelected] = useState(true);
  const [isFahrenheitSelected, setIsFahrenheitSelected] = useState(false);
  const [isKelvinSelected, setIsKelvinSelected] = useState(false);
  const [unitState, isUnitState] = useState("C");

  const celsiusNotSelected = require("../assets/celsius-icon.png");
  const celsiusSelected = require("../assets/celsius-selected-icon.png");

  const fahrenheitNotSelected = require("../assets/fahrenheit-icon.png");
  const fahrenheitSelected = require("../assets/fahrenheit-selected-icon.png");

  const kelvinNotSelected = require("../assets/kelvin-icon.png");
  const kelvinSelected = require("../assets/kelvin-selected-icon.png");

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          setIsCelsiusSelected(!isCelsiusSelected);
          setIsFahrenheitSelected(false);
          setIsKelvinSelected(false);
          if (!isCelsiusSelected) {
            isUnitState('C');
            onUnitChange('C');
          }
        }}
      >
        <Image
          source={isCelsiusSelected ? celsiusSelected : celsiusNotSelected}
          style={styles.icons}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setIsFahrenheitSelected(!isFahrenheitSelected);
          setIsCelsiusSelected(false);
          setIsKelvinSelected(false);
          if (!isFahrenheitSelected) {
            isUnitState('F');
            onUnitChange('F');
          }
        }}
      >
        <Image
          source={
            isFahrenheitSelected ? fahrenheitSelected : fahrenheitNotSelected
          }
          style={styles.icons}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setIsKelvinSelected(!isKelvinSelected);
          setIsCelsiusSelected(false);
          setIsFahrenheitSelected(false);
          if (!isKelvinSelected) {
            isUnitState('K');
            onUnitChange('K');
          }
        }}
      >
        <Image
          source={isKelvinSelected ? kelvinSelected : kelvinNotSelected}
          style={styles.icons}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  icons: {
    margin: 5,
    width: 50,
    height: 50,
  },
});

export default UnitChoice;
