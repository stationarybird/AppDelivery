import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, useColorScheme } from "react-native";
import RootNavigator from "./src/navigation";
import { Amplify, Auth } from "aws-amplify";
import {
  withAuthenticator,
  useAuthenticator,
  Authenticator,
  defaultDarkModeOverride,
  ThemeProvider,
} from "@aws-amplify/ui-react-native";
import awsExports from "./src/aws-exports";
import CustomHeader from "./src/components/CustomHeader";
import CustomFooter from "./src/components/CustomFooter";

Amplify.configure(awsExports);

import { NavigationContainer } from "@react-navigation/native";

const formFields = {
  signIn: {
    username: {
      labelHidden: false,
      placeholder: "Enter your username here",
      isRequired: true,
      label: "Username:",
    },
  },
};

function App() {
  const colorMode = useColorScheme();
  return (
    <ThemeProvider
      colorMode={colorMode}
      theme={{
        tokens: {
          colors: {
            brand: {
              primary: {
                10: "#e5f9e0",
                20: "#c3e59d",
                40: "#a1d1b2",
                60: "#7fbf86",
                80: "#5dac5a",
                90: "#3b9930",
                100: "#1a8606",
              },
              secondary: {
                10: "#f2e0d5",
                20: "#e6ccb2",
                40: "#d9b88f",
                60: "#cc9f6c",
                80: "#bf8749",
                90: "#b26e26",
                100: "#a65603",
              },
            },
          },
        },
        overrides: [defaultDarkModeOverride],
      }}
    >
      <Authenticator.Provider>
        <Authenticator
          Header={CustomHeader}
          Footer={CustomFooter}
          formFields={formFields}
        >
          <NavigationContainer>
            <RootNavigator />

            <StatusBar style="light" />
          </NavigationContainer>
        </Authenticator>
      </Authenticator.Provider>
    </ThemeProvider>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
