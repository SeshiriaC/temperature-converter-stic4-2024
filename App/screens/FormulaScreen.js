import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function ConversionScreen() {
  return (
    <View style={styles.container}>

      <Text>
        Formules de conversions:
      </Text>
      <Text>
        Celsius en Fahrenheit:
        T(°F) = [T(°C) x (9 / 5)] + 32
      </Text>
      <Text>
        Celsius en Kelvin:
        T( K) = T(°C) + 273,15
      </Text>
      <Text>
        Fahrenheit en Celsius:
        T(°C) = [T(°F) - 32] x (5 / 9)
      </Text>
      <Text>
        Fahrenheit en Kelvin:
        T( K) = [[T(°F) - 32] x (5 / 9)] + 273,15
      </Text>
      <Text>
        Kelvin en Celsius:
        T(°C) = T(°K) - 273,15
      </Text>
      <Text>
        Kelvin en Fahrenheit:
        T(°C) = [[T(°K) - 273,15] x (9 / 5)] + 32
      </Text>
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
});
