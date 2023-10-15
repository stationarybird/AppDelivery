import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import RootNavigator from "./src/navigation";

import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  const [loaded] = useFonts({
    Satoshi: require("./assets/fonts/Satoshi-Black.otf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <RootNavigator />

      <StatusBar style="light" />
    </NavigationContainer>
  );
}
