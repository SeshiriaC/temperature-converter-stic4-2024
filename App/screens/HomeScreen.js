import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useFonts, Roboto_400Regular } from "@expo-google-fonts/roboto";

export default function HomeScreen() {
  const navigation = useNavigation();

  let [fontsLoaded] = useFonts({
    "Roboto-Regular" : Roboto_400Regular,
  });

  if (!fontsLoaded) {
    return console.log('Font not loaded');
  }

  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require("../assets/logo.png")}
          style={{ width: 250, height: 300 }}
        />
        <Text style={{ fontFamily: "Roboto-Regular", fontSize: 18 }}></Text>
      </View>
      <View style={styles.buttonGroup}>
        <TouchableOpacity onPress={() => navigation.navigate("Formule")}>
          <View style={styles.subContainer}>
            <Image
              source={require("../assets/formules.png")}
              style={styles.button}
            />
            <Text style={{ fontFamily: "Roboto-Regular", fontSize: 20 }}>
              Formule
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Conversion")}>
          <View style={styles.subContainer}>
            <Image
              source={require("../assets/calculatrice.png")}
              style={styles.button}
            />
            <Text style={{ fontFamily: "Roboto-Regular", fontSize: 20 }}>
              Conversion
            </Text>
          </View>
        </TouchableOpacity>
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
  subContainer: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginVertical: 10,
    borderWidth: 1,
    borderRadius: 50,
    width: 200,
    borderColor: "#4B64F2",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  button: {
    marginRight: 5,
    width: 35,
    height: 35,
  },
  buttonGroup: {
    marginVertical: 20,
    flexDirection: "column",
    alignItems: "start",
    justifyContent: "center",
  },
});
