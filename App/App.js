import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "./screens/SplashScreen";
import ConversionScreen from "./screens/ConversionScreen";
import FormulaScreen from "./screens/FormulaScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={SplashScreen}/>
        <Stack.Screen name="Conversion" component={ConversionScreen}/>
        <Stack.Screen name="Formule" component={FormulaScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}