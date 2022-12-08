import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { NativeRouter, Route, Routes } from "react-router-native";
import { Characters } from "./screens";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Urbanist-Regular": require("./assets/fonts/Urbanist-Regular.ttf"),
    "Urbanist-SemiBold": require("./assets/fonts/Urbanist-SemiBold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NativeRouter>
      <StatusBar style="light" />

      <Routes>
        <Route path="/" element={<Characters />} />
      </Routes>
    </NativeRouter>
  );
}
