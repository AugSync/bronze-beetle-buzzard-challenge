import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Close } from "../icons";
import gStyles from "../styles";

export default function Menu({ navigation }) {
  return (
    <SafeAreaView style={[gStyles.container]}>
      <View style={[gStyles.content]}>
        <TouchableOpacity
          style={styles.closeContainer}
          onPress={() => navigation.goBack()}
        >
          <Close />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Characters")}>
          <Text style={styles.textOptions}>Characters</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Favorites")}>
          <Text style={styles.textOptions}>Favorites</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  closeContainer: {
    marginBottom: 10,
  },
  textOptions: {
    color: "#fff",
    fontFamily: "Urbanist-SemiBold",
    fontSize: 22,
    marginTop: 30,
    marginLeft: 15,
  },
});
