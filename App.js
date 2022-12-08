import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Characters, Favorites, Menu } from "./screens";
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";

import { Provider } from "react-redux";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Urbanist-Regular": require("./assets/fonts/Urbanist-Regular.ttf"),
    "Urbanist-SemiBold": require("./assets/fonts/Urbanist-SemiBold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <StatusBar style="light" />

          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
            initialRouteName="Characters"
          >
            <Stack.Screen
              name="Menu"
              component={Menu}
              options={{
                presentation: "modal",
                animationTypeForReplace: "push",
                animation: "slide_from_left",
              }}
            />
            <Stack.Screen
              name="Characters"
              component={Characters}
              options={{
                presentation: "modal",
                animationTypeForReplace: "push",
                animation: "slide_from_right",
              }}
            />
            <Stack.Screen
              name="Favorites"
              component={Favorites}
              options={{
                presentation: "modal",
                animationTypeForReplace: "push",
                animation: "slide_from_right",
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
