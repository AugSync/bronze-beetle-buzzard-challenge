import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header, Character } from "../components";

export default function Characters() {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Characters" />
      <Character
        name="Luke Skiwaker"
        gender="male"
        birthDate="151012"
        address="barcelona"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#17141F",
    padding: 17,
  },
});
