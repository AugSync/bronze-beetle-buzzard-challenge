import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { BurgerMenu } from "../icons";

export default function Header({ title, navigation }) {
  return (
    <View style={styles.containerHeader}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Menu")}
        style={styles.containerBurgerMenu}
      >
        <BurgerMenu />
      </TouchableOpacity>
      <Text style={styles.textHeader}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  containerHeader: {
    alignItems: "center",
    justifyContent: "center",
    height: 24,
    position: "relative",
  },
  containerBurgerMenu: {
    position: "absolute",
    left: 0,
    top: 4,
  },
  textHeader: {
    color: "#fff",
    fontFamily: "Urbanist-SemiBold",
    fontSize: 15,
  },
});
