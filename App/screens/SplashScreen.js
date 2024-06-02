import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Button,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function SplashScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <Image
          source={require("../assets/logo.png")}
          style={{ width: 250, height: 300 }}
        />
        <Text style={{ fontSize: 18 }}>Convertisseur de température</Text>
      </View>
      <View style={styles.subconatiner}>
        <TouchableOpacity onPress={() => navigation.navigate("Conversion")}>
          <Image
            source={require("../assets/right.png")}
            style={styles.button}
          />
        </TouchableOpacity>
        <Text style={{ fontSize: 18 }}>Passons à la conversion</Text>
      </View>
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
    margin: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: 70,
    height: 70,
  },
});
