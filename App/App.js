import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import ConversionScreen from "./screens/ConversionScreen";
import FormulaScreen from "./screens/FormulaScreen";
import { useFonts, Roboto_400Regular } from "@expo-google-fonts/roboto";

const Stack = createNativeStackNavigator();

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    Roboto_400Regular,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Conversion" component={ConversionScreen}/>
        <Stack.Screen name="Formule" component={FormulaScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}