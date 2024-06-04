import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

export default function SplashScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <Image
          source={require("../assets/logo.png")}
          style={{ width: 250, height: 300 }}
        />
        <Text style={{ fontSize: 18 }}></Text>
      </View>
      <View style={styles.buttongroup}>
        <TouchableOpacity onPress={() => navigation.navigate("Formule")}>
          <View style={styles.subconatiner}>
            <Image
              source={require("../assets/formules.png")}
              style={styles.button}
            />
            <Text style={{ fontSize: 20 }}>Formule</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Conversion")}>
          <View style={styles.subconatiner}>
            <Image
              source={require("../assets/calculatrice.png")}
              style={styles.button}
            />
            <Text style={{ fontSize: 20 }}>Conversion</Text>
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
  subconatiner: {
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
  buttongroup: {
    marginVertical: 20,
    flexDirection: "column",
    alignItems: "start",
    justifyContent: "center",
  },
});
